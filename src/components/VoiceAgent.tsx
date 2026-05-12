import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Widgets from '../imports/Widgets';
import ETAWidget from './ETAWidget';
import Hos from '../imports/Hos-2046-1880';
import HosPage from '../imports/HosPage-2051-2980';
import { WordByWordText } from './WordByWordText';
import { VoiceService } from '../services/voiceService';
import { NLUService, IntentResult } from '../services/nluService';
import { TTSService } from '../services/ttsService';
import { AudioFeedbackService } from '../services/audioFeedbackService';

interface VoiceAgentProps {
  isOpen: boolean;
  onClose: (completedAction?: string) => void;
  tapPosition?: { x: number; y: number };
}

type ConversationStage = 'listening' | 'transcribing' | 'thinking' | 'confirming' | 'sending' | 'sent' | 'loadSummary' | 'eta' | 'hos' | 'error' | 'timeout' | 'outOfScope' | 'weighStation' | 'certifyLogs';

const initialQuickActions = [
  "Whats My ETA",
  "What's My HOS Status",
  "How far till the weigh-station",
  "Certify logs",
  "Load Summary"
];

const afterSendQuickActions = [
  "Whats My ETA",
  "How far till the weigh-station",
  "What's My HOS Status",
  "Certify logs",
  "Load Summary"
];

const FLEET_IDS = ['DEMO1', 'DEMO2', 'DEMO3'];

export function VoiceAgent({ isOpen, onClose, tapPosition = { x: 195, y: 600 } }: VoiceAgentProps) {
  const [stage, setStage] = useState<ConversationStage>('listening');
  const [voiceAmplitude, setVoiceAmplitude] = useState(0);
  const [quickActions, setQuickActions] = useState(initialQuickActions);
  const [transcriptProgress, setTranscriptProgress] = useState(0);
  const [selectedFleetId, setSelectedFleetId] = useState('DEMO1');
  const [showFleetSelector, setShowFleetSelector] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [hasInteracted, setHasInteracted] = useState(false);
  const [liveTranscript, setLiveTranscript] = useState('');
  const [finalTranscript, setFinalTranscript] = useState('');
  const [extractedMessage, setExtractedMessage] = useState('');
  const [currentIntent, setCurrentIntent] = useState<IntentResult | null>(null);
  
  // Voice service instance
  const voiceServiceRef = useRef<VoiceService | null>(null);
  const isInitializedRef = useRef(false);
  
  // NLU service instance
  const nluServiceRef = useRef<NLUService>(new NLUService());
  
  // TTS service instance
  const ttsServiceRef = useRef<TTSService>(new TTSService());
  
  // Audio feedback service instance
  const audioFeedbackRef = useRef<AudioFeedbackService>(new AudioFeedbackService());
  
  const mockMessage = "I will be there in 45 minutes.";
  const loadSummarySpeech = "You're hauling a refrigerated load with three stops. You're currently headed to Walmart Distribution 32 in Los Angeles with an 8:00 a.m appointment. You're on schedule, the total, and this load is marked hazmat.";
  const etaSpeech = "You should arrive at your destination in approximately 45 minutes, putting your estimated time of arrival at 7:30 PM.";
  const hosSpeech = "You have 45 minutes left until you have to rest and you have two hours and 25 minutes until your day is up.";

  // Progressive transcript text animation - now uses real transcript
  const transcriptWords = (liveTranscript || finalTranscript).split(' ').filter(w => w.length > 0);
  const getProgressiveTranscript = () => {
    if (!liveTranscript && !finalTranscript) return '';
    if (finalTranscript) return finalTranscript;
    
    // For live transcript, show it progressively
    if (transcriptProgress === 0) return '';
    const wordCount = Math.floor((transcriptProgress / 100) * transcriptWords.length);
    const partialText = transcriptWords.slice(0, wordCount).join(' ');
    // Add partial word effect for mid-word progress
    if (wordCount < transcriptWords.length && transcriptProgress % 10 > 5) {
      const nextWord = transcriptWords[wordCount];
      const charProgress = Math.floor((transcriptProgress % 10) / 10 * nextWord.length);
      return partialText + (partialText ? ' ' : '') + nextWord.slice(0, charProgress) + '..';
    }
    return partialText + (wordCount < transcriptWords.length ? '..' : '');
  };

  // Initialize voice service when component opens and start listening immediately
  useEffect(() => {
    if (!isOpen) {
      // Cleanup when closed
      if (voiceServiceRef.current) {
        voiceServiceRef.current.cleanup();
        voiceServiceRef.current = null;
        isInitializedRef.current = false;
      }
      
      // Reset to initial state when closed
      const timer = setTimeout(() => {
        setStage('listening');
        setQuickActions(initialQuickActions);
        setTranscriptProgress(0);
        setSelectedFleetId('DEMO1');
        setShowFleetSelector(false);
        setErrorMessage('');
        setHasInteracted(false);
        setLiveTranscript('');
        setFinalTranscript('');
        setExtractedMessage('');
        setCurrentIntent(null);
      }, 500);
      return () => clearTimeout(timer);
    }

    // Initialize voice service and start listening immediately
    const initVoiceService = async () => {
      if (isInitializedRef.current) return;
      
      try {
        // CRITICAL: Unlock TTS on iOS (must happen on user interaction)
        console.log('[VoiceAgent] Unlocking TTS...');
        ttsServiceRef.current.unlock();
        
        // Check if browser supports speech recognition
        if (!VoiceService.isSupported()) {
          setErrorMessage('Speech recognition is not supported in this browser. Please use Chrome, Edge, or Safari.');
          setStage('error');
          audioFeedbackRef.current.playBeep('error');
          return;
        }

        const service = new VoiceService();
        await service.initialize();
        voiceServiceRef.current = service;
        isInitializedRef.current = true;

        // Track restart attempts to prevent infinite loops
        let restartCount = 0;
        const maxRestarts = 5;
        
        // Detect iOS for special handling
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
          (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

        // Main listener callbacks
        const createMainListenerCallbacks = (): Parameters<typeof service.startListening>[0] => ({
          onStart: () => {
            console.log('[Main Listener] 🎤 Started');
            restartCount = 0; // Reset on successful start
          },
          onSoundStart: () => {},
          onSpeechStart: () => {
            console.log('[Main Listener] 🗣️ Speech detected');
          },
          onPartialTranscript: (text) => {
            setLiveTranscript(text);
            const wordCount = text.split(' ').filter(w => w.length > 0).length;
            if (wordCount > 0) {
              setTranscriptProgress(Math.min((wordCount / 10) * 100, 90));
            }
            setStage(prevStage => 
              text.trim().length > 0 && prevStage === 'listening' ? 'transcribing' : prevStage
            );
          },
          onFinalTranscript: async (text) => {
            if (stage === 'confirming' || stage === 'sending' || stage === 'sent') {
              return;
            }
            
            console.log('[Main Listener] ✅ Processing:', text);
            setFinalTranscript(text);
            setLiveTranscript('');
            setTranscriptProgress(100);
            
            setTimeout(() => {
              setStage('thinking');
              setTimeout(() => processIntent(text), 1500);
            }, 500);
          },
          onAmplitudeUpdate: (amplitude) => {
            setVoiceAmplitude(amplitude);
          },
          onError: (error) => {
            console.error('[Main Listener] Error:', error);
            // Don't show error for common iOS issues
            if (!error.message.includes('No speech') && !error.message.includes('aborted')) {
              setErrorMessage(error.message);
              setStage('error');
              try { audioFeedbackRef.current.playBeep('error'); } catch {}
            }
          },
          onEnd: () => {
            console.log('[Main Listener] Ended');
            setStage(prevStage => {
              if (prevStage === 'listening' || prevStage === 'transcribing') {
                // Limit restarts to prevent crash loops
                if (restartCount >= maxRestarts) {
                  console.log('[Main Listener] Max restarts reached, stopping');
                  return prevStage;
                }
                restartCount++;
                
                // Longer delay for iOS stability
                const delay = isIOS ? 800 : 400;
                
                setTimeout(() => {
                  if (ttsServiceRef.current.getIsSpeaking()) {
                    setTimeout(() => {
                      if (voiceServiceRef.current && !voiceServiceRef.current.getIsListening()) {
                        try { audioFeedbackRef.current.playBeep('start'); } catch {}
                        voiceServiceRef.current.startListening(createMainListenerCallbacks());
                      }
                    }, 500);
                  } else if (voiceServiceRef.current && !voiceServiceRef.current.getIsListening()) {
                    try { audioFeedbackRef.current.playBeep('start'); } catch {}
                    voiceServiceRef.current.startListening(createMainListenerCallbacks());
                  }
                }, delay);
              }
              return prevStage;
            });
          }
        });
        
        const mainListenerCallbacks = createMainListenerCallbacks();
        
        // Start listening with appropriate delay for platform
        const startDelay = isIOS ? 1000 : 500;
        console.log('[Main Listener] 📢 Initializing... will start in', startDelay, 'ms');
        
        setTimeout(() => {
          if (!voiceServiceRef.current || voiceServiceRef.current.getIsListening()) {
            return;
          }
          
          // Check TTS first
          if (ttsServiceRef.current.getIsSpeaking()) {
            setTimeout(() => {
              if (voiceServiceRef.current && !voiceServiceRef.current.getIsListening()) {
                setHasInteracted(true);
                try { audioFeedbackRef.current.playBeep('start'); } catch {}
                service.startListening(mainListenerCallbacks);
              }
            }, 500);
          } else {
            setHasInteracted(true);
            try { audioFeedbackRef.current.playBeep('start'); } catch {}
            service.startListening(mainListenerCallbacks);
          }
        }, startDelay);
      } catch (error) {
        console.error('Failed to initialize voice service:', error);
        setErrorMessage(error instanceof Error ? error.message : 'Failed to initialize voice recognition.');
        setStage('error');
        audioFeedbackRef.current.playBeep('error');
      }
    };

    initVoiceService();

    return () => {
      if (voiceServiceRef.current) {
        voiceServiceRef.current.cleanup();
        voiceServiceRef.current = null;
        isInitializedRef.current = false;
      }
      // Stop TTS on cleanup
      if (ttsServiceRef.current) {
        ttsServiceRef.current.stop();
      }
      // Cleanup audio feedback
      if (audioFeedbackRef.current) {
        audioFeedbackRef.current.cleanup();
      }
    };
  }, [isOpen]);

  // Handle stage changes and voice recognition
  useEffect(() => {
    if (!isOpen || !voiceServiceRef.current) return;

    // CRITICAL: Stop main listener when entering confirming stage
    // The confirming stage has its own dedicated command listener
    if (stage === 'confirming' && voiceServiceRef.current.getIsListening()) {
      voiceServiceRef.current.stopListening();
    }

    const intervals: NodeJS.Timeout[] = [];

    // Animate transcript progress during transcribing stage (for visual effect)
    if (stage === 'transcribing' && liveTranscript) {
      setTranscriptProgress(0);
      const progressInterval = setInterval(() => {
        setTranscriptProgress(prev => {
          if (prev >= 100) {
            return 100;
          }
          // Progress based on transcript length
          const wordCount = liveTranscript.split(' ').length;
          const increment = Math.max(5, 100 / Math.max(wordCount, 1));
          return Math.min(prev + increment, 100);
        });
      }, 100);
      intervals.push(progressInterval);
    }

    // Add timeout for listening stage
    if (stage === 'listening' && hasInteracted) {
      const timeoutTimer = setTimeout(() => {
        if (voiceServiceRef.current?.getIsListening()) {
          // Still listening, don't timeout
          return;
        }
        setStage('timeout');
        setErrorMessage('No voice input detected. Please try again.');
        audioFeedbackRef.current.playBeep('error');
      }, 15000); // 15 second timeout
      intervals.push(timeoutTimer as any);
    }

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [isOpen, stage, hasInteracted, liveTranscript]);

  // Speak responses when stage changes (but not during listening/transcribing)
  useEffect(() => {
    if (!isOpen) return;
    
    // Don't speak during listening or transcribing stages
    if (stage === 'listening' || stage === 'transcribing') {
      return;
    }

    // CRITICAL: Stop voice recognition when TTS starts to prevent feedback loop
    const stopVoiceRecognition = () => {
      if (voiceServiceRef.current && voiceServiceRef.current.getIsListening()) {
        console.log('[TTS] 🛑 Stopping voice recognition to prevent hearing TTS output');
        voiceServiceRef.current.stopListening();
      }
    };

    // Small delay to ensure UI has updated
    const timer = setTimeout(() => {
      stopVoiceRecognition();
      speakStageResponse(stage).then(() => {
        // Restart voice recognition after TTS finishes (only if in confirming stage)
        if (stage === 'confirming' && voiceServiceRef.current && !voiceServiceRef.current.getIsListening()) {
          console.log('[TTS] ✅ TTS finished, restarting voice recognition for commands');
          // The confirming stage useEffect will handle restarting the command listener
        }
      }).catch((error) => {
        console.error('[TTS] Error during speech:', error);
        // Restart voice recognition even if TTS fails
        if (stage === 'confirming' && voiceServiceRef.current && !voiceServiceRef.current.getIsListening()) {
          console.log('[TTS] Restarting voice recognition after TTS error');
        }
      });
    }, 300);

    return () => {
      clearTimeout(timer);
      // NOTE: Don't stop TTS in cleanup - let it finish naturally
      // Only stop if component is closing completely
    };
  }, [stage, isOpen, extractedMessage, selectedFleetId, errorMessage]);

  // Listen for voice commands during confirming stage
  useEffect(() => {
    if (!isOpen || stage !== 'confirming' || !voiceServiceRef.current) {
      return;
    }

    // Create command handler function with STRICT detection
    const handleVoiceCommand = (text: string): boolean => {
      const normalizedText = text.toLowerCase().trim();
      const wordCount = normalizedText.split(/\s+/).filter(w => w.length > 0).length;
      
      console.log('[Voice Command] Received transcript during confirming stage:', text);
      console.log('[Voice Command] Normalized text:', normalizedText);
      console.log('[Voice Command] Word count:', wordCount);
      
      // STRICT: Only process short commands (1-3 words max) to avoid false positives
      // Longer transcripts are likely misheard or background noise
      if (wordCount > 3) {
        console.warn('[Voice Command] ⚠️ Transcript too long for command detection, ignoring:', { 
          text, 
          wordCount, 
          reason: 'Commands should be 1-3 words max' 
        });
        return false;
      }
      
      // Exact match patterns (highest priority - most reliable)
      const exactSendCommands = [
        'send',
        'yes',
        'confirm',
        'go ahead',
        'proceed',
        'do it'
      ];
      
      // Short phrase patterns (2-3 words)
      const shortSendCommands = [
        'send it',
        'yes send',
        'ok send',
        'send now',
        'go ahead and send'
      ];
      
      // Exact match cancel commands
      const exactCancelCommands = [
        'cancel',
        'no',
        'stop',
        'abort'
      ];
      
      // Short phrase cancel commands
      const shortCancelCommands = [
        'cancel it',
        'no cancel',
        'don\'t send',
        'never mind'
      ];
      
      // First check for exact matches (most reliable)
      for (const pattern of exactSendCommands) {
        if (normalizedText === pattern) {
          console.log('[Voice Command] ✅ SEND command detected (exact match)!', { original: text, pattern, normalized: normalizedText });
          console.log('[Voice Command] Executing handleSend()...');
          try {
            handleSend();
          } catch (error) {
            console.error('[Voice Command] Error executing handleSend:', error);
          }
          return true;
        }
      }
      
      for (const pattern of exactCancelCommands) {
        if (normalizedText === pattern) {
          console.log('[Voice Command] ✅ CANCEL command detected (exact match)!', { original: text, pattern, normalized: normalizedText });
          console.log('[Voice Command] Executing handleCancel()...');
          try {
            handleCancel();
          } catch (error) {
            console.error('[Voice Command] Error executing handleCancel:', error);
          }
          return true;
        }
      }
      
      // Then check for short phrases (only if transcript is 2-3 words)
      if (wordCount >= 2 && wordCount <= 3) {
        for (const pattern of shortSendCommands) {
          if (normalizedText === pattern) {
            console.log('[Voice Command] ✅ SEND command detected (short phrase)!', { original: text, pattern, normalized: normalizedText });
            console.log('[Voice Command] Executing handleSend()...');
            try {
              handleSend();
            } catch (error) {
              console.error('[Voice Command] Error executing handleSend:', error);
            }
            return true;
          }
        }
        
        for (const pattern of shortCancelCommands) {
          if (normalizedText === pattern) {
            console.log('[Voice Command] ✅ CANCEL command detected (short phrase)!', { original: text, pattern, normalized: normalizedText });
            console.log('[Voice Command] Executing handleCancel()...');
            try {
              handleCancel();
            } catch (error) {
              console.error('[Voice Command] Error executing handleCancel:', error);
            }
            return true;
          }
        }
      }
      
      // If not a recognized command, ignore it (don't process as intent)
      console.warn('[Voice Command] ⚠️ Unrecognized command during confirming stage:', { 
        original: text, 
        normalized: normalizedText,
        wordCount,
        reason: 'No exact or short phrase match found'
      });
      console.log('[Voice Command] Available exact patterns:', { send: exactSendCommands, cancel: exactCancelCommands });
      console.log('[Voice Command] Available short phrase patterns:', { send: shortSendCommands, cancel: shortCancelCommands });
      return false;
    };

    // Helper function to safely start listening only when TTS is silent
    const safeStartListening = (listener: ReturnType<typeof createCommandListener>, delay: number = 500) => {
      // CRITICAL: Always check TTS state before starting mic
      const checkAndStart = () => {
        if (ttsServiceRef.current.getIsSpeaking()) {
          console.log('[Voice Command] ⏳ TTS still speaking, waiting 200ms more...');
          setTimeout(checkAndStart, 200);
          return;
        }
        
        if (voiceServiceRef.current && stage === 'confirming' && !voiceServiceRef.current.getIsListening()) {
          console.log('[Voice Command] 🎤 Starting microphone (TTS confirmed silent)');
          audioFeedbackRef.current.playBeep('start');
          voiceServiceRef.current.startListening(listener);
        }
      };
      
      setTimeout(checkAndStart, delay);
    };

    // Create a reusable command listener function
    const createCommandListener = () => {
      console.log('[Voice Command] Creating command listener for confirming stage');
      return {
        onStart: () => {
          console.log('[Voice Command] 🎤 Command listener started');
        },
        onSoundStart: () => {
          // Don't log sound detection to reduce noise
        },
        onSpeechStart: () => {
          console.log('[Voice Command] 🗣️ Speech detected');
        },
        onPartialTranscript: (text: string) => {
          console.log('[Voice Command] 📝 Partial transcript:', text);
        },
        onFinalTranscript: (text: string) => {
          console.log('[Voice Command] ✅ Final transcript received:', text);
          const commandHandled = handleVoiceCommand(text);
          
          // If command not recognized, restart listening after delay (checking TTS first)
          if (!commandHandled && voiceServiceRef.current && stage === 'confirming') {
            console.log('[Voice Command] Command not recognized, will restart listener...');
            safeStartListening(createCommandListener(), 300);
          } else if (commandHandled) {
            console.log('[Voice Command] ✅ Command handled successfully');
          }
        },
        onAmplitudeUpdate: (amplitude: number) => {
          setVoiceAmplitude(amplitude);
        },
        onError: (error: Error) => {
          console.error('[Voice Command] ❌ Error in command listener:', error);
          // Restart listening on error if still in confirming (with TTS check)
          if (stage === 'confirming' && voiceServiceRef.current) {
            safeStartListening(createCommandListener(), 500);
          }
        },
        onEnd: () => {
          console.log('[Voice Command] 🛑 Command listener ended');
          // Restart listening if still in confirming stage (with TTS check)
          if (stage === 'confirming' && voiceServiceRef.current && !voiceServiceRef.current.getIsListening()) {
            safeStartListening(createCommandListener(), 300);
          }
        }
      };
    };

    // CRITICAL: Stop the main listener first to prevent it from processing commands as intents
    const stopMainListener = () => {
      if (voiceServiceRef.current && voiceServiceRef.current.getIsListening()) {
        console.log('[Voice Command] 🛑 Stopping main listener to switch to command listener');
        voiceServiceRef.current.stopListening();
      } else {
        console.log('[Voice Command] Main listener already stopped');
      }
    };

    // Stop the main listener immediately
    stopMainListener();
    
    // Start command listener only after TTS has completely finished
    // Use safeStartListening which checks TTS state before starting mic
    console.log('[Voice Command] 📢 Waiting for TTS to finish before starting command listener...');
    safeStartListening(createCommandListener(), 800); // 800ms delay to ensure TTS is done

    return () => {
      // Cleanup handled by voice service
    };
  }, [stage, isOpen]);

  // Handle mic orb tap - restart listening if needed
  const handleListeningTap = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (stage === 'listening' && !showFleetSelector && voiceServiceRef.current) {
      // If already listening, do nothing (listening starts automatically)
      // If not listening, restart
      if (!voiceServiceRef.current.getIsListening()) {
        setLiveTranscript('');
        setFinalTranscript('');
        setTranscriptProgress(0);
        voiceServiceRef.current.startListening({
          onStart: () => {
            // Play beep when microphone activates
            audioFeedbackRef.current.playBeep('start');
            // Stop any current TTS
            if (ttsServiceRef.current.getIsSpeaking()) {
              ttsServiceRef.current.stop();
            }
          },
          onPartialTranscript: (text) => {
            // Stop any current TTS when user starts speaking
            if (ttsServiceRef.current.getIsSpeaking()) {
              ttsServiceRef.current.stop();
            }
            
            setLiveTranscript(text);
            const wordCount = text.split(' ').filter(w => w.length > 0).length;
            if (wordCount > 0) {
              const estimatedProgress = Math.min((wordCount / 10) * 100, 90);
              setTranscriptProgress(estimatedProgress);
            }
            if (text.trim().length > 0 && stage === 'listening') {
      setStage('transcribing');
            }
          },
          onFinalTranscript: async (text) => {
            setFinalTranscript(text);
            setLiveTranscript('');
            setTranscriptProgress(100);
      setTimeout(() => {
        setStage('thinking');
              setTimeout(async () => {
                await processIntent(text);
              }, 1500);
            }, 500);
          },
          onAmplitudeUpdate: (amplitude) => {
            setVoiceAmplitude(amplitude);
          },
          onError: (error) => {
            console.error('Voice recognition error:', error);
            setErrorMessage(error.message);
            setStage('error');
            voiceServiceRef.current?.stopListening();
            audioFeedbackRef.current.playBeep('error');
          },
          onEnd: () => {
            if (!finalTranscript && liveTranscript) {
              setFinalTranscript(liveTranscript);
              setLiveTranscript('');
              setTranscriptProgress(100);
      setTimeout(() => {
                setStage('thinking');
                setTimeout(() => {
        const shouldShowOutOfScope = Math.random() < 0.20;
        if (shouldShowOutOfScope) {
          setStage('outOfScope');
        } else {
          setStage('confirming');
        }
                }, 1500);
              }, 500);
            }
          }
        });
      }
    }
  };

  /**
   * Process intent using NLU service and route to appropriate stage
   */
  const processIntent = async (transcript: string) => {
    try {
      const intentResult = await nluServiceRef.current.processIntent(transcript);
      setCurrentIntent(intentResult);

      // Route to appropriate stage based on intent
      if (intentResult.confidence < 0.6) {
        // Low confidence - show out of scope
        setStage('outOfScope');
        return;
      }

      switch (intentResult.intent) {
        case 'send_message':
          // Extract message content
          const message = intentResult.entities.message || transcript;
          setExtractedMessage(message);
          
          // Set fleet ID if extracted
          if (intentResult.entities.fleetId) {
            setSelectedFleetId(intentResult.entities.fleetId);
          }
          
          setStage('confirming');
          break;

        case 'check_eta':
          setStage('eta');
          break;

        case 'load_summary':
          setStage('loadSummary');
          break;

        case 'hos_status':
          setStage('hos');
          break;

        case 'weigh_station':
          setStage('weighStation');
          break;

        case 'certify_logs':
          setStage('certifyLogs');
          break;

        case 'out_of_scope':
        default:
          setStage('outOfScope');
          break;
      }
    } catch (error) {
      console.error('Error processing intent:', error);
      setErrorMessage('Failed to process your request. Please try again.');
      setStage('error');
      // Play error beep
      audioFeedbackRef.current.playBeep('error');
    }
  };

  /**
   * Speak response based on current stage
   */
  const speakStageResponse = async (stage: ConversationStage) => {
    if (!TTSService.isSupported()) {
      return; // TTS not supported, silently fail
    }

    try {
      switch (stage) {
        case 'loadSummary':
          await ttsServiceRef.current.speak(loadSummarySpeech);
          break;

        case 'eta':
          await ttsServiceRef.current.speak(etaSpeech);
          break;

        case 'hos':
          await ttsServiceRef.current.speak(hosSpeech);
          break;

        case 'confirming':
          const confirmText = extractedMessage 
            ? `Send message to Fleet ${selectedFleetId}: ${extractedMessage}. Say Send or Cancel.`
            : `Send message to Fleet ${selectedFleetId}. Say Send or Cancel.`;
          await ttsServiceRef.current.speak(confirmText);
          break;

        case 'sent':
          await ttsServiceRef.current.speak('Message sent successfully.');
          break;

        case 'outOfScope':
          await ttsServiceRef.current.speak(
            "I can't help with that yet. Here are the things I can help you with."
          );
          break;

        case 'error':
          if (errorMessage) {
            await ttsServiceRef.current.speak(errorMessage);
          }
          break;

        case 'timeout':
          await ttsServiceRef.current.speak(
            'No voice input detected. Please try again.'
          );
          break;

        case 'weighStation':
          await ttsServiceRef.current.speak(
            'The next weigh station is 47 miles away on I-80 Eastbound, Exit 312.'
          );
          break;

        case 'certifyLogs':
          await ttsServiceRef.current.speak(
            'Ready to certify your logs. Please confirm to proceed.'
          );
          break;
      }
    } catch (error) {
      console.error('TTS error:', error);
      // Fail silently - don't break the UI if TTS fails
    }
  };

  // Handle back/restart button - returns to listening state
  const handleBack = () => {
    if (voiceServiceRef.current) {
      voiceServiceRef.current.stopListening();
    }
    setStage('listening');
    setTranscriptProgress(0);
    setHasInteracted(false);
    setLiveTranscript('');
    setFinalTranscript('');
    setExtractedMessage('');
    setCurrentIntent(null);
  };

  const handleSend = async () => {
    try {
      console.log('[handleSend] Starting send process...');
      
      // Stop voice recognition first
      if (voiceServiceRef.current) {
        voiceServiceRef.current.stopListening();
      }
      
      // Stop TTS if speaking
      if (ttsServiceRef.current.getIsSpeaking()) {
        ttsServiceRef.current.stop();
      }
      
    setStage('sending');
      
      // Play success beep when message is sent
      try {
        await audioFeedbackRef.current.playBeep('success');
      } catch (beepError) {
        console.error('[handleSend] Error playing beep:', beepError);
        // Continue even if beep fails
      }
      
    setTimeout(() => {
        try {
      setStage('sent');
      setQuickActions(afterSendQuickActions);
      
      // Auto-dismiss after showing success - increased to 5 seconds for safety
      setTimeout(() => {
            try {
        onClose('sent');
            } catch (closeError) {
              console.error('[handleSend] Error closing:', closeError);
            }
      }, 5000);
        } catch (stageError) {
          console.error('[handleSend] Error setting stage:', stageError);
        }
    }, 1200);
    } catch (error) {
      console.error('[handleSend] Fatal error:', error);
      // Try to recover - set error stage
      try {
        setStage('error');
        setErrorMessage('Failed to send message. Please try again.');
      } catch (recoveryError) {
        console.error('[handleSend] Error during recovery:', recoveryError);
      }
    }
  };

  const handleChangeFleet = () => {
    setShowFleetSelector(true);
  };

  const handleSelectFleet = (fleetId: string) => {
    setSelectedFleetId(fleetId);
    setShowFleetSelector(false);
  };

  const handleCancel = () => {
    // Play cancel beep
    audioFeedbackRef.current.playBeep('cancel');
    // Stop TTS if speaking
    if (ttsServiceRef.current.getIsSpeaking()) {
      ttsServiceRef.current.stop();
    }
    onClose();
  };

  const handleRetry = () => {
    if (voiceServiceRef.current) {
      voiceServiceRef.current.stopListening();
    }
    setStage('listening');
    setErrorMessage('');
    setHasInteracted(false);
    setLiveTranscript('');
    setFinalTranscript('');
    setTranscriptProgress(0);
    setExtractedMessage('');
    setCurrentIntent(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-[200] overflow-hidden"
          style={{ height: '100dvh', width: '100dvw' }}
        >
          {/* Glass Overlay with Backdrop Blur - Shows underlying UI */}
          <motion.div
            initial={{
              scale: 0,
              x: tapPosition.x,
              y: tapPosition.y,
            }}
            animate={{
              scale: 30,
              x: 195,
              y: 400,
            }}
            exit={{
              scale: 0,
              x: tapPosition.x,
              y: tapPosition.y,
            }}
            transition={{
              duration: 0.9,
              ease: [0.32, 0.72, 0, 1],
            }}
            className="absolute left-0 top-0 w-[100px] h-[100px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background: 'rgba(8, 18, 32, 0.92)',
              backdropFilter: 'blur(40px) saturate(0.5) brightness(0.4)',
              willChange: 'transform',
            }}
          />

          {/* Base Canvas - Deep Dark Field with Depth */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(
                  ellipse at 50% 35%,
                  rgba(14, 35, 51, 0.9) 0%,
                  rgba(11, 26, 36, 0.92) 30%,
                  rgba(9, 20, 30, 0.95) 60%,
                  rgba(5, 16, 26, 0.97) 100%
                ),
                linear-gradient(
                  180deg,
                  rgba(14, 35, 51, 0.5) 0%,
                  rgba(11, 26, 36, 0.7) 50%,
                  rgba(9, 20, 30, 0.85) 100%
                )
              `,
              backdropFilter: 'blur(30px) saturate(0.5)',
            }}
          />

          {/* Simple Glowing Border with Shifting Gradient */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 pointer-events-none"
            style={{
              borderRadius: '60px',
            }}
          >
            {/* Animated gradient border */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0"
              style={{
                borderRadius: '60px',
                background: `
                  conic-gradient(
                    from 0deg,
                    rgba(94, 179, 224, 0.4),
                    rgba(114, 205, 244, 0.5),
                    rgba(149, 217, 247, 0.6),
                    rgba(114, 205, 244, 0.5),
                    rgba(94, 179, 224, 0.4)
                  )
                `,
                padding: '2px',
                WebkitMaskImage: 'radial-gradient(ellipse, transparent 0%, transparent calc(100% - 2px), black calc(100% - 2px))',
                maskImage: 'radial-gradient(ellipse, transparent 0%, transparent calc(100% - 2px), black calc(100% - 2px))',
                filter: 'blur(8px)',
              }}
            />
            
            {/* Soft outer glow */}
            <div
              className="absolute inset-0"
              style={{
                borderRadius: '60px',
                boxShadow: `
                  inset 0 0 60px rgba(94, 179, 224, 0.15),
                  0 0 80px rgba(94, 179, 224, 0.2)
                `,
              }}
            />
          </motion.div>

          {/* Glass Refraction Ripples - Distort Underlying UI */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`ripple-${i}`}
              initial={{
                scale: 0,
                opacity: 0,
                x: tapPosition.x,
                y: tapPosition.y,
              }}
              animate={{
                scale: [0, 18 + i * 3],
                opacity: [0, 0.28 - i * 0.035, 0.16 - i * 0.025, 0],
                x: 195,
                y: 400,
              }}
              transition={{
                duration: 2.2 + i * 0.15,
                delay: i * 0.08,
                ease: [0.32, 0.72, 0, 1],
              }}
              className="absolute left-0 top-0 w-[100px] h-[100px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
              style={{
                background: `radial-gradient(circle, 
                  rgba(94, 179, 224, ${0.18 - i * 0.02}) 0%, 
                  rgba(52, 152, 201, ${0.12 - i * 0.015}) 30%,
                  rgba(36, 116, 187, ${0.08 - i * 0.01}) 60%, 
                  transparent 100%)`,
                border: `1px solid rgba(94, 179, 224, ${0.2 - i * 0.025})`,
                boxShadow: `0 0 ${15 + i * 2}px rgba(94, 179, 224, ${0.12 - i * 0.015})`,
                backdropFilter: `blur(${3 + i}px)`,
                willChange: 'transform, opacity',
              }}
            />
          ))}

          {/* Subtle Caustic Light Effect */}
          <motion.div
            animate={{
              opacity: [0.06, 0.12, 0.06],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 40% 30%, rgba(94, 179, 224, 0.1) 0%, transparent 50%)',
              mixBlendMode: 'screen',
            }}
          />

          {/* Main Content Container */}
          <div className="absolute inset-0 flex flex-col items-center py-14 px-6 max-w-[390px] mx-auto">
            {/* Back Button - Show during transcribing and thinking stages */}
            {(stage === 'transcribing' || stage === 'thinking') && (
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                whileHover={{ scale: 1.05, x: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBack}
                className="absolute top-11 left-5 w-9 h-9 rounded-full flex items-center justify-center"
                style={{
                  background: 'rgba(15, 22, 33, 0.35)',
                  backdropFilter: 'blur(16px) saturate(120%)',
                  border: '1px solid rgba(94, 179, 224, 0.2)',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.35)',
                }}
              >
                <svg
                  className="w-[16px] h-[16px] text-white/80"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </motion.button>
            )}

            {/* Center - Glass Orb - Only show when listening (NOT sending) */}
            {stage === 'listening' && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ 
                  duration: 0.7,
                  delay: 0.5,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="flex flex-col items-center gap-5 relative"
                style={{ willChange: 'transform, opacity' }}
              >
              {/* Voice-Reactive Outer Rings - Only when listening */}
              {stage === 'listening' && [...Array(2)].map((_, i) => (
                <motion.div
                  key={`voice-ring-${i}`}
                  animate={{
                    scale: [1, 1.5 + voiceAmplitude * 0.5],
                    opacity: [0.3, 0],
                  }}
                  transition={{
                    duration: 1.4,
                    delay: i * 0.45,
                    repeat: Infinity,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="absolute w-[210px] h-[210px] rounded-full"
                  style={{
                    border: '2px solid rgba(94, 179, 224, 0.3)',
                    boxShadow: '0 0 20px rgba(94, 179, 224, 0.25)',
                    willChange: 'transform, opacity',
                  }}
                />
              ))}

              {/* Glass Orb Container - Hovering Between Layers - CLICKABLE */}
              <motion.div
                onClick={handleListeningTap}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  scale: stage === 'sending' 
                    ? [1, 1.08, 1.04, 1]
                    : [1, 1.012, 1],
                  y: stage === 'sending'
                    ? [0, -4, 0]
                    : [0, -2, 0],
                }}
                transition={{
                  duration: stage === 'sending' ? 0.7 : 3.5,
                  repeat: stage === 'sending' ? 0 : Infinity,
                  ease: stage === 'sending' ? [0.32, 0.72, 0, 1] : "easeInOut"
                }}
                className="relative w-[200px] h-[200px] rounded-full flex items-center justify-center cursor-pointer"
                style={{
                  background: stage === 'sending' 
                    ? 'radial-gradient(circle at 50% 50%, rgba(50, 70, 95, 0.55) 0%, rgba(30, 45, 65, 0.7) 100%)'
                    : 'radial-gradient(circle at 50% 50%, rgba(50, 70, 95, 0.45) 0%, rgba(30, 45, 65, 0.65) 100%)',
                  backdropFilter: 'blur(60px) saturate(130%)',
                  boxShadow: stage === 'sending'
                    ? '0 20px 60px rgba(36, 116, 187, 0.6), 0 8px 24px rgba(94, 179, 224, 0.5), inset 0 0 0 1.5px rgba(94, 179, 224, 0.4), 0 0 80px rgba(94, 179, 224, 0.3)'
                    : '0 20px 60px rgba(0,0,0,0.5), 0 8px 24px rgba(0,0,0,0.3), inset 0 0 0 1.5px rgba(94, 179, 224, 0.25), 0 0 60px rgba(94, 179, 224, 0.2)',
                  willChange: 'transform',
                }}
              >
                {/* Top Light Reflection */}
                <motion.div
                  animate={{
                    opacity: [0.4, 0.6, 0.4],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-0 inset-x-0 h-[45%] rounded-t-full pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse at 50% 20%, rgba(94, 179, 224, 0.4) 0%, rgba(94, 179, 224, 0.2) 40%, transparent 70%)',
                  }}
                />

                {/* Rotating Light Reflection - Chromatic dispersion effect */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 rounded-full pointer-events-none overflow-hidden"
                  style={{ willChange: 'transform' }}
                >
                  <div
                    className="absolute w-[60%] h-[120%] left-[20%] top-[-10%]"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, rgba(94, 179, 224, 0.35) 50%, transparent 100%)',
                      transform: 'rotate(-25deg)',
                      filter: 'blur(15px)',
                    }}
                  />
                </motion.div>

                {/* Liquid edge glow effect */}
                <motion.div
                  animate={{
                    opacity: [0.6, 0.9, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    boxShadow: 'inset 0 0 40px rgba(94, 179, 224, 0.2), inset 0 -20px 30px rgba(94, 179, 224, 0.15)',
                  }}
                />

                {/* Microphone Icon */}
                <motion.svg
                  animate={{
                    scale: [1, 1.04, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-[68px] h-[68px] text-white relative z-10"
                  style={{
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
                    willChange: 'transform',
                  }}
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 1C10.3431 1 9 2.34315 9 4V12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12V4C15 2.34315 13.6569 1 12 1Z"
                    fill="white"
                    opacity="0.95"
                  />
                  <path
                    d="M6 10C6 9.44772 5.55228 9 5 9C4.44772 9 4 9.44772 4 10C4 14.4183 7.58172 18 12 18C16.4183 18 20 14.4183 20 10C20 9.44772 19.5523 9 19 9C18.4477 9 18 9.44772 18 10C18 13.3137 15.3137 16 12 16C8.68629 16 6 13.3137 6 10Z"
                    fill="white"
                    opacity="0.95"
                  />
                  <path
                    d="M12 18C12.5523 18 13 18.4477 13 19V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V19C11 18.4477 11.4477 18 12 18Z"
                    fill="white"
                    opacity="0.95"
                  />
                </motion.svg>

                {/* Bottom Highlight - Dimmer */}
                <div 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[40%] rounded-full pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse at 50% 90%, rgba(94, 179, 224, 0.15) 0%, transparent 70%)',
                  }}
                />
              </motion.div>

              {/* Status Text & Voice Amplitude - Only show when listening */}
              {stage === 'listening' && (
                <>
                  <div className="h-[26px] relative">
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      className="text-white/90 absolute left-1/2 -translate-x-1/2 whitespace-nowrap italic"
                      style={{
                        fontSize: '16px',
                        fontWeight: '300',
                        fontFamily: 'Inter, SF Pro Display, -apple-system, system-ui, sans-serif',
                        letterSpacing: '0.01em',
                        textShadow: '0 2px 10px rgba(0,0,0,0.2)',
                      }}
                    >
                      Tap to speak or use quick actions below
                    </motion.p>
                  </div>

                  {/* Voice Amplitude Visualization - More bars */}
                  <div className="flex gap-[5px] items-center h-9 relative">
                    {[...Array(17)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          height: [10, 14 + voiceAmplitude * 16, 15, 12 + voiceAmplitude * 12, 10],
                          opacity: 0.8,
                        }}
                        transition={{
                          duration: 0.55,
                          delay: i * 0.035,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="w-[4px] rounded-full"
                        style={{
                          background: 'rgba(94, 179, 224, 0.85)',
                          boxShadow: '0 0 6px rgba(94, 179, 224, 0.4)',
                          willChange: 'height, opacity',
                        }}
                      />
                    ))}
                  </div>
                </>
              )}
            </motion.div>
            )}

            {/* TRANSCRIBING STAGE - Microphone Orb + Progressive Transcript */}
            {stage === 'transcribing' && (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ 
                  duration: 0.4,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="flex flex-col items-center gap-5 relative"
                style={{ willChange: 'transform, opacity' }}
              >
                {/* Voice-Reactive Outer Rings */}
                {[...Array(2)].map((_, i) => (
                  <motion.div
                    key={`voice-ring-trans-${i}`}
                    animate={{
                      scale: [1, 1.5 + voiceAmplitude * 0.5],
                      opacity: [0.3, 0],
                    }}
                    transition={{
                      duration: 1.4,
                      delay: i * 0.45,
                      repeat: Infinity,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    className="absolute w-[210px] h-[210px] rounded-full"
                    style={{
                      border: '2px solid rgba(94, 179, 224, 0.3)',
                      boxShadow: '0 0 20px rgba(94, 179, 224, 0.25)',
                      willChange: 'transform, opacity',
                    }}
                  />
                ))}

                {/* Glass Orb Container */}
                <motion.div
                  animate={{
                    scale: [1, 1.012, 1],
                    y: [0, -2, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative w-[200px] h-[200px] rounded-full flex items-center justify-center"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(50, 70, 95, 0.45) 0%, rgba(30, 45, 65, 0.65) 100%)',
                    backdropFilter: 'blur(60px) saturate(130%)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 8px 24px rgba(0,0,0,0.3), inset 0 0 0 1.5px rgba(94, 179, 224, 0.25), 0 0 60px rgba(94, 179, 224, 0.2)',
                    willChange: 'transform',
                  }}
                >
                  {/* Top Light Reflection */}
                  <motion.div
                    animate={{
                      opacity: [0.4, 0.6, 0.4],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute top-0 inset-x-0 h-[45%] rounded-t-full pointer-events-none"
                    style={{
                      background: 'radial-gradient(ellipse at 50% 20%, rgba(94, 179, 224, 0.4) 0%, rgba(94, 179, 224, 0.2) 40%, transparent 70%)',
                    }}
                  />

                  {/* Rotating Light Reflection */}
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-0 rounded-full pointer-events-none overflow-hidden"
                    style={{ willChange: 'transform' }}
                  >
                    <div
                      className="absolute w-[60%] h-[120%] left-[20%] top-[-10%]"
                      style={{
                        background: 'linear-gradient(90deg, transparent 0%, rgba(94, 179, 224, 0.35) 50%, transparent 100%)',
                        transform: 'rotate(-25deg)',
                        filter: 'blur(15px)',
                      }}
                    />
                  </motion.div>

                  {/* Liquid edge glow */}
                  <motion.div
                    animate={{
                      opacity: [0.6, 0.9, 0.6],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{
                      boxShadow: 'inset 0 0 40px rgba(94, 179, 224, 0.2), inset 0 -20px 30px rgba(94, 179, 224, 0.15)',
                    }}
                  />

                  {/* Microphone Icon */}
                  <motion.svg
                    animate={{
                      scale: [1, 1.04, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-[68px] h-[68px] text-white relative z-10"
                    style={{
                      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
                      willChange: 'transform',
                    }}
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 1C10.3431 1 9 2.34315 9 4V12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12V4C15 2.34315 13.6569 1 12 1Z"
                      fill="white"
                      opacity="0.95"
                    />
                    <path
                      d="M6 10C6 9.44772 5.55228 9 5 9C4.44772 9 4 9.44772 4 10C4 14.4183 7.58172 18 12 18C16.4183 18 20 14.4183 20 10C20 9.44772 19.5523 9 19 9C18.4477 9 18 9.44772 18 10C18 13.3137 15.3137 16 12 16C8.68629 16 6 13.3137 6 10Z"
                      fill="white"
                      opacity="0.95"
                    />
                    <path
                      d="M12 18C12.5523 18 13 18.4477 13 19V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V19C11 18.4477 11.4477 18 12 18Z"
                      fill="white"
                      opacity="0.95"
                    />
                  </motion.svg>

                  {/* Bottom Highlight */}
                  <div 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[40%] rounded-full pointer-events-none"
                    style={{
                      background: 'radial-gradient(ellipse at 50% 90%, rgba(94, 179, 224, 0.15) 0%, transparent 70%)',
                    }}
                  />
                </motion.div>

                {/* Progressive Transcript Text in Frosted Glass Pill */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="relative px-6 py-2.5 rounded-full max-w-[320px]"
                  style={{
                    background: 'rgba(15, 25, 35, 0.7)',
                    backdropFilter: 'blur(20px) saturate(120%)',
                    border: '1px solid rgba(94, 179, 224, 0.15)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.4), inset 0 0.5px 0 rgba(94, 179, 224, 0.1)',
                  }}
                >
                  <motion.p
                    key={transcriptProgress}
                    initial={{ opacity: 0.7 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1 }}
                    className="text-white/90 text-center"
                    style={{
                      fontSize: '15px',
                      fontWeight: '400',
                      fontFamily: 'Inter, SF Pro Display, -apple-system, system-ui, sans-serif',
                      letterSpacing: '-0.01em',
                      lineHeight: '1.3',
                    }}
                  >
                    {getProgressiveTranscript() || 'listening ...'}
                  </motion.p>
                </motion.div>

                {/* Voice Amplitude Visualization */}
                <div className="flex gap-[5px] items-center h-9 relative">
                  {[...Array(17)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        height: [10, 14 + voiceAmplitude * 16, 15, 12 + voiceAmplitude * 12, 10],
                        opacity: 0.8,
                      }}
                      transition={{
                        duration: 0.55,
                        delay: i * 0.035,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="w-[4px] rounded-full"
                      style={{
                        background: 'rgba(94, 179, 224, 0.85)',
                        boxShadow: '0 0 6px rgba(94, 179, 224, 0.4)',
                        willChange: 'height, opacity',
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {/* THINKING STAGE - Rotating Dotted Circles */}
            {stage === 'thinking' && (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ 
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="flex flex-col items-center gap-8 relative pt-12"
                style={{ willChange: 'transform, opacity' }}
              >
                {/* Thinking Text */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="text-white/90"
                  style={{
                    fontSize: '18px',
                    fontWeight: '400',
                    fontFamily: 'Inter, SF Pro Display, -apple-system, system-ui, sans-serif',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Got it. One moment...
                </motion.p>

                {/* Rotating Dotted Circles Container */}
                <div className="relative w-[180px] h-[180px] flex items-center justify-center">
                  {/* Circle 1 - Outer */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute w-[140px] h-[140px]"
                    style={{ willChange: 'transform' }}
                  >
                    <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
                      <circle
                        cx="70"
                        cy="70"
                        r="68"
                        stroke="rgba(94, 179, 224, 0.4)"
                        strokeWidth="2"
                        strokeDasharray="4 8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </motion.div>

                  {/* Circle 2 - Middle */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute w-[100px] h-[100px]"
                    style={{ willChange: 'transform' }}
                  >
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                      <circle
                        cx="50"
                        cy="50"
                        r="48"
                        stroke="rgba(94, 179, 224, 0.5)"
                        strokeWidth="2.5"
                        strokeDasharray="4 7"
                        strokeLinecap="round"
                      />
                    </svg>
                  </motion.div>

                  {/* Circle 3 - Inner */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute w-[60px] h-[60px]"
                    style={{ willChange: 'transform' }}
                  >
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                      <circle
                        cx="30"
                        cy="30"
                        r="28"
                        stroke="rgba(94, 179, 224, 0.6)"
                        strokeWidth="3"
                        strokeDasharray="3 6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </motion.div>

                  {/* Center Thinking Dots (4 dots in pattern) */}
                  <div className="absolute w-[24px] h-[24px] flex items-center justify-center">
                    {[0, 1, 2, 3].map((i) => {
                      const angle = (i * 90 * Math.PI) / 180;
                      const radius = 6;
                      const x = Math.cos(angle) * radius;
                      const y = Math.sin(angle) * radius;
                      
                      return (
                        <motion.div
                          key={i}
                          animate={{
                            opacity: [0.3, 1, 0.3],
                            scale: [0.8, 1.1, 0.8],
                          }}
                          transition={{
                            duration: 1.2,
                            delay: i * 0.15,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="absolute w-[4px] h-[4px] rounded-full"
                          style={{
                            background: 'rgba(94, 179, 224, 0.9)',
                            boxShadow: '0 0 6px rgba(94, 179, 224, 0.6)',
                            transform: `translate(${x}px, ${y}px)`,
                            willChange: 'opacity, transform',
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Transcript & Message Card - Understanding/Confirming/Sending/Sent Stages */}
            {/* Keep card visible throughout to maintain visual continuity */}
            <AnimatePresence mode="wait">
              {(stage === 'confirming' || stage === 'sending' || stage === 'sent') && (
                <motion.div
                  key="message-card"
                  initial={{ opacity: 0, y: 30, scale: 0.92 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.96 }}
                  transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                  className="w-full max-w-[340px] flex flex-col items-center gap-4 pt-4"
                >
                  {/* Heading Text - Only during confirming stage */}
                  <AnimatePresence>
                    {stage === 'confirming' && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                        className="text-center px-4"
                      >
                        <p 
                          className="text-white/95"
                          style={{
                            fontSize: '16px',
                            fontWeight: '400',
                            fontFamily: 'Roboto, Inter, SF Pro Display, -apple-system, system-ui, sans-serif',
                            letterSpacing: '0em',
                            lineHeight: '1.4',
                          }}
                        >
                          {extractedMessage 
                            ? `Send message to Fleet ID: '${extractedMessage}'. Say Send or Cancel.`
                            : `Send message to Fleet ID: ${selectedFleetId}. Say Send or Cancel.`
                          }
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Message Confirmation Card - Figma Design */}
                  <motion.div
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ 
                      y: 0, 
                      opacity: 1,
                      scale: stage === 'sending' ? [1, 0.98, 1] : 1,
                    }}
                    transition={{ 
                      duration: 0.6,
                      ease: [0.25, 0.1, 0.25, 1]
                    }}
                    className="w-full rounded-2xl overflow-hidden relative"
                    style={{
                      background: stage === 'sent' 
                        ? 'rgba(14, 46, 75, 0.85)' 
                        : '#0e2e4b',
                      border: stage === 'sent'
                        ? '1px solid rgba(126, 211, 33, 0.4)'
                        : '1px solid #2474bb',
                      boxShadow: stage === 'sent'
                        ? '0 8px 32px rgba(126, 211, 33, 0.2), 0 4px 16px rgba(0,0,0,0.3)'
                        : '0 8px 24px rgba(0,0,0,0.4), 0 4px 12px rgba(36, 116, 187, 0.15)',
                    }}
                  >
                    <div className="flex flex-col gap-6 p-4">
                      {/* Send To Section */}
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="flex items-center justify-between w-full"
                      >
                        <div className="flex flex-col gap-1">
                          <p 
                            className="text-white/70"
                            style={{
                              fontSize: '10px',
                              fontWeight: '400',
                              fontFamily: 'Roboto, sans-serif',
                            }}
                          >
                            Send To:
                          </p>
                          <p 
                            className="text-white"
                            style={{
                              fontSize: '16px',
                              fontWeight: '700',
                              fontFamily: 'Roboto, sans-serif',
                            }}
                          >
                            {selectedFleetId}
                          </p>
                        </div>
                        
                        {/* Change button for confirming/sending stages */}
                        {(stage === 'confirming' || stage === 'sending') && (
                          <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleChangeFleet();
                            }}
                            className="text-[#b8e6f9]"
                            style={{
                              fontSize: '16px',
                              fontWeight: '700',
                              fontFamily: 'Roboto, sans-serif',
                            }}
                          >
                            Change
                          </motion.button>
                        )}

                        {/* Green Circle-Check Icon for sent stage */}
                        {stage === 'sent' && (
                          <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ 
                              type: "spring",
                              stiffness: 400,
                              damping: 20,
                              delay: 0.1
                            }}
                            className="flex items-center justify-center"
                            style={{
                              filter: 'drop-shadow(0px 0px 4px rgba(0, 253, 64, 0.3))'
                            }}
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <circle
                                cx="8"
                                cy="8"
                                r="8"
                                fill="#00fd40"
                              />
                              <path
                                d="M5 8l2 2 4-4"
                                stroke="#0e2e4b"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </motion.div>
                        )}
                      </motion.div>

                      {/* Message Section */}
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="flex flex-col gap-2 w-full"
                      >
                        <p 
                          className="text-white/80"
                          style={{
                            fontSize: '16px',
                            fontWeight: '400',
                            fontFamily: 'Roboto, sans-serif',
                          }}
                        >
                          Message:
                        </p>
                        <div 
                          className="w-full rounded-lg px-3 py-3 relative"
                          style={{
                            background: '#0c2841',
                            border: '1px solid #1d5d96',
                          }}
                        >
                          <p 
                            className="text-[#e9f1f8]"
                            style={{
                              fontSize: '16px',
                              fontWeight: '400',
                              fontFamily: 'Roboto, sans-serif',
                              lineHeight: '1.4',
                            }}
                          >
                            {extractedMessage || finalTranscript || 'No message'}
                          </p>

                          {/* Sending Indicator Overlay */}
                          <AnimatePresence>
                            {stage === 'sending' && (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 flex items-center justify-center rounded-lg"
                                style={{
                                  background: 'rgba(12, 40, 65, 0.95)',
                                  backdropFilter: 'blur(4px)',
                                }}
                              >
                                <div className="flex gap-2">
                                  {[...Array(3)].map((_, i) => (
                                    <motion.div
                                      key={i}
                                      animate={{
                                        scale: [1, 1.3, 1],
                                        opacity: [0.5, 1, 0.5],
                                      }}
                                      transition={{
                                        duration: 0.8,
                                        delay: i * 0.15,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                      }}
                                      className="w-2 h-2 rounded-full bg-[#2474bb]"
                                      style={{
                                        boxShadow: '0 0 8px rgba(36, 116, 187, 0.6)',
                                      }}
                                    />
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>

                      {/* Action Buttons - Only show during confirming */}
                      <AnimatePresence>
                        {stage === 'confirming' && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5, scale: 0.98 }}
                            transition={{ 
                              duration: 0.4, 
                              delay: 0.25,
                              ease: [0.25, 0.1, 0.25, 1] 
                            }}
                            className="flex gap-4 w-full"
                          >
                            {/* Cancel Button */}
                            <motion.button
                              whileTap={{ scale: 0.97 }}
                              onClick={() => {
                                onClose();
                              }}
                              className="flex-1 rounded-full px-6 py-3"
                              style={{
                                background: '#0e2e4b',
                                border: '1px solid rgba(94, 179, 224, 0.3)',
                              }}
                            >
                              <p 
                                className="text-[#e9f1f8]"
                                style={{
                                  fontSize: '16px',
                                  fontWeight: '700',
                                  fontFamily: 'Roboto, sans-serif',
                                }}
                              >
                                Cancel
                              </p>
                            </motion.button>

                            {/* Send Button */}
                            <motion.button
                              whileTap={{ scale: 0.97 }}
                              onClick={handleSend}
                              className="flex-1 rounded-full px-6 py-3"
                              style={{
                                background: '#2474bb',
                                boxShadow: '0 4px 12px rgba(36, 116, 187, 0.3)',
                              }}
                            >
                              <p 
                                className="text-white"
                                style={{
                                  fontSize: '16px',
                                  fontWeight: '700',
                                  fontFamily: 'Roboto, sans-serif',
                                }}
                              >
                                Send
                              </p>
                            </motion.button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>

                  {/* Status Text - Below card for sending and sent stages */}
                  <AnimatePresence mode="wait">
                    {stage === 'sending' && (
                      <motion.p 
                        key="sending"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                        className="text-white/95 text-center px-4"
                        style={{
                          fontSize: '17px',
                          fontWeight: '400',
                          fontFamily: 'Roboto, Inter, SF Pro Display, -apple-system, system-ui, sans-serif',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        Sending your message to Dispatch…
                      </motion.p>
                    )}
                    {stage === 'sent' && (
                      <motion.p 
                        key="sent"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                        className="text-white/95 text-center px-4"
                        style={{
                          fontSize: '17px',
                          fontWeight: '400',
                          fontFamily: 'Roboto, Inter, SF Pro Display, -apple-system, system-ui, sans-serif',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        Message sent.
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}

              </AnimatePresence>

            {/* Spacer to push Quick Actions to bottom */}
            <div className="flex-1" />

            {/* Subtle Voice Listening Indicator - Shows during confirming */}
            {/* Mellow design matching the listening stage aesthetic */}
            {stage === 'confirming' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{ 
                  duration: 0.6,
                  ease: [0.32, 0.72, 0, 1]
                }}
                className="flex flex-col items-center justify-center gap-4 mb-6"
                style={{ willChange: 'transform, opacity' }}
              >
              {/* Subtle Text Hint */}
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-white/85 text-center"
                style={{
                  fontSize: '16px',
                  fontWeight: '400',
                  fontFamily: 'Inter, SF Pro Display, -apple-system, system-ui, sans-serif',
                  letterSpacing: '0.01em',
                  textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                }}
              >
                Say <span style={{ fontWeight: '600', color: 'rgba(184, 230, 249, 0.95)' }}>"Send"</span> or <span style={{ fontWeight: '600', color: 'rgba(255, 150, 150, 0.9)' }}>"Cancel"</span>
              </motion.p>

              {/* Subtle Ambient Glow Rings - Mellow */}
              {[...Array(2)].map((_, i) => (
                <motion.div
                  key={`ambient-ring-${i}`}
                  animate={{
                    scale: [1, 1.5],
                    opacity: [0.2, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    delay: i * 0.5,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                  className="absolute w-[90px] h-[90px] rounded-full"
                  style={{
                    border: '1.5px solid rgba(94, 179, 224, 0.4)',
                    willChange: 'transform, opacity',
                  }}
                />
              ))}

              {/* Glass Orb - Same size as listening (70px) */}
              <motion.div
                animate={{
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-[70px] h-[70px] rounded-full flex items-center justify-center"
                style={{
                  background: 'rgba(15, 22, 33, 0.4)',
                  backdropFilter: 'blur(20px) saturate(120%)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(94, 179, 224, 0.25)',
                  willChange: 'transform',
                }}
              >
                {/* Subtle top highlight */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-0 inset-x-0 h-[40%] rounded-t-full pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse at 50% 20%, rgba(94, 179, 224, 0.3) 0%, rgba(94, 179, 224, 0.15) 40%, transparent 70%)',
                  }}
                />

                {/* Subtle rotating shimmer */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 rounded-full pointer-events-none overflow-hidden"
                >
                  <div
                    className="absolute w-[50%] h-[110%] left-[25%] top-[-5%]"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, rgba(94, 179, 224, 0.25) 50%, transparent 100%)',
                      transform: 'rotate(-20deg)',
                      filter: 'blur(10px)',
                    }}
                  />
                </motion.div>

                {/* Voice Waveform Bars - Smaller and more subtle */}
                <div className="flex gap-[2.5px] items-center relative z-10">
                  {[...Array(7)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        height: [6, 12 + Math.sin(i * 0.5) * 4, 8, 10 + Math.cos(i * 0.5) * 3, 6],
                        opacity: [0.6, 0.85, 0.7, 0.85, 0.6],
                      }}
                      transition={{
                        duration: 0.65,
                        delay: i * 0.07,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="w-[2.5px] rounded-full"
                      style={{
                        background: 'rgba(94, 179, 224, 0.8)',
                        boxShadow: '0 0 4px rgba(94, 179, 224, 0.4)',
                        willChange: 'height, opacity',
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
            )}

            {/* Load Summary View */}
            {stage === 'loadSummary' && (
              <motion.div
                key="load-summary-view"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className="absolute top-0 left-0 right-0 flex flex-col items-center pt-14 px-6 w-full max-w-[390px] mx-auto"
              >
                {/* Close Button */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => onClose('loadSummary')}
                  className="absolute top-11 right-5 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    background: 'rgba(15, 22, 33, 0.6)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(94, 179, 224, 0.2)',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 1L13 13M1 13L13 1" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </motion.button>

                {/* User's Question */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="text-center w-full mb-4"
                >
                  <p
                    className="italic"
                    style={{
                      fontSize: '16px',
                      fontWeight: '300',
                      fontFamily: 'Roboto, Inter, SF Pro Display, -apple-system, system-ui, sans-serif',
                      letterSpacing: '0.01em',
                      lineHeight: '1.4',
                      color: 'rgba(255, 255, 255, 0.7)',
                    }}
                  >
                    "Tell me about my load"
                  </p>
                </motion.div>

                {/* Load Summary Widget using Figma import */}
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                  className="flex justify-center w-full"
                >
                  <Widgets />
                </motion.div>

              </motion.div>
            )}

            {/* ETA View */}
            {stage === 'eta' && (
              <motion.div
                key="eta-view"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className="absolute top-0 left-0 right-0 flex flex-col items-start pt-14 px-6 w-full max-w-[390px] mx-auto"
              >
                {/* Close Button */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => onClose('eta')}
                  className="absolute top-11 right-5 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    background: 'rgba(15, 22, 33, 0.6)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(94, 179, 224, 0.2)',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 1L13 13M1 13L13 1" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </motion.button>

                {/* User's Question */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="text-center w-full mb-6"
                >
                  <p
                    className="italic"
                    style={{
                      fontSize: '16px',
                      fontWeight: '300',
                      fontFamily: 'Roboto, Inter, SF Pro Display, -apple-system, system-ui, sans-serif',
                      letterSpacing: '0.01em',
                      lineHeight: '1.4',
                      color: 'rgba(255, 255, 255, 0.7)',
                    }}
                  >
                    "What's My ETA"
                  </p>
                </motion.div>

                {/* ETA Widget */}
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                  className="w-full max-w-[340px]"
                >
                  <ETAWidget 
                    title="Your ETA:"
                    time="7:30PM"
                    response="You should arrive at your destination in approximately 45 minutes, putting your estimated time of arrival at 7:30 PM."
                  />
                </motion.div>

                {/* Quick Actions for ETA */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="w-full flex flex-col gap-[9px] mt-6 mb-4"
                >
                  <p 
                    className="text-white/35 text-center mb-0"
                    style={{
                      fontSize: '10px',
                      fontWeight: '600',
                      fontFamily: 'Inter, SF Pro Display, -apple-system, system-ui, sans-serif',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Quick Actions
                  </p>
                  
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.985 }}
                    onClick={() => {
                      setStage('listening');
                      setQuickActions(initialQuickActions);
                    }}
                    className="px-4 py-[10px] rounded-full w-full"
                    style={{
                      background: 'rgba(15, 22, 33, 0.25)',
                      backdropFilter: 'blur(16px) saturate(120%)',
                      border: '1px solid rgba(94, 179, 224, 0.12)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.3), inset 0 0.5px 0 rgba(94, 179, 224, 0.08)',
                    }}
                  >
                    <span className="text-white/80 text-sm font-normal">Send My Current Location</span>
                  </motion.button>

                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.55 }}
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.985 }}
                    onClick={() => {
                      setStage('loadSummary');
                    }}
                    className="px-4 py-[10px] rounded-full w-full"
                    style={{
                      background: 'rgba(15, 22, 33, 0.25)',
                      backdropFilter: 'blur(16px) saturate(120%)',
                      border: '1px solid rgba(94, 179, 224, 0.12)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.3), inset 0 0.5px 0 rgba(94, 179, 224, 0.08)',
                    }}
                  >
                    <span className="text-white/80 text-sm font-normal">View Load Summary</span>
                  </motion.button>
                </motion.div>
              </motion.div>
            )}

            {/* Quick Actions - Show only when listening or sent */}
            {(stage === 'listening' || stage === 'sent') && (
              <motion.div
                key={`quick-actions-${stage}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ 
                  duration: 0.6,
                  delay: stage === 'sent' ? 0.6 : 0.5,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="w-full flex flex-col gap-[9px] mb-4"
                style={{ willChange: 'transform, opacity' }}
              >
                <p 
                  className="text-white/35 text-center mb-0"
                  style={{
                    fontSize: '10px',
                    fontWeight: '600',
                    fontFamily: 'Inter, SF Pro Display, -apple-system, system-ui, sans-serif',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  Quick Actions
                </p>
                
                <AnimatePresence mode="popLayout">
                  {quickActions.map((action, index) => (
                    <motion.button
                      key={action}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15, scale: 0.95 }}
                      whileHover={{ 
                        scale: 1.015,
                        y: -1,
                        backdropFilter: 'blur(20px) saturate(130%)',
                      }}
                      whileTap={{ scale: 0.985 }}
                      transition={{ 
                        delay: (stage === 'sent' ? 0.7 : 0.6) + index * 0.04,
                        duration: 0.4,
                        ease: [0.25, 0.1, 0.25, 1]
                      }}
                      className="relative px-4 py-[10px] rounded-full overflow-hidden"
                      style={{
                        background: 'rgba(15, 22, 33, 0.25)',
                        backdropFilter: 'blur(16px) saturate(120%)',
                        border: '1px solid rgba(94, 179, 224, 0.12)',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.3), inset 0 0.5px 0 rgba(94, 179, 224, 0.08)',
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        if (action === "Load Summary") {
                          setStage('loadSummary');
                        } else if (action === "Whats My ETA") {
                          setStage('eta');
                        } else if (action === "What's My HOS Status") {
                          setStage('hos');
                        } else if (action === "How far till the weigh-station") {
                          setStage('weighStation');
                        } else if (action === "Certify logs") {
                          setStage('certifyLogs');
                        } else {
                          setStage('listening');
                          setQuickActions(initialQuickActions);
                        }
                      }}
                    >
                      {/* Subtle shimmer effect */}
                      <motion.div
                        animate={{
                          x: ['-100%', '200%'],
                        }}
                        transition={{
                          duration: 4,
                          delay: index * 0.6,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: 'linear-gradient(90deg, transparent 0%, rgba(94, 179, 224, 0.06) 50%, transparent 100%)',
                          willChange: 'transform',
                        }}
                      />

                      <span 
                        className="relative text-white/80"
                        style={{
                          fontSize: '13px',
                          fontWeight: '500',
                          fontFamily: 'Inter, SF Pro Display, -apple-system, system-ui, sans-serif',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {action}
                      </span>
                    </motion.button>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}

            {/* HOS View */}
            {stage === 'hos' && (
              <motion.div
                key="hos-view"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className="absolute top-0 left-0 right-0 flex flex-col items-center pt-14 px-6 w-full max-w-[390px] mx-auto"
              >
                {/* Close Button */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => onClose('hos')}
                  className="absolute top-11 right-5 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    background: 'rgba(15, 22, 33, 0.6)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(94, 179, 224, 0.2)',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 1L13 13M1 13L13 1" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </motion.button>

                {/* User's Question */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="text-center w-full mb-4"
                >
                  <p
                    className="italic"
                    style={{
                      fontSize: '16px',
                      fontWeight: '300',
                      fontFamily: 'Roboto, Inter, SF Pro Display, -apple-system, system-ui, sans-serif',
                      letterSpacing: '0.01em',
                      lineHeight: '1.4',
                      color: 'rgba(255, 255, 255, 0.7)',
                    }}
                  >
                    "What's My HOS Status"
                  </p>
                </motion.div>

                {/* HOS Widget using Figma import */}
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                  className="flex justify-center w-full mb-6"
                >
                  <Hos />
                </motion.div>


              </motion.div>
            )}

            {/* OUT OF SCOPE VIEW - "I can't help with that yet" */}
            {stage === 'outOfScope' && (
              <motion.div
                key="out-of-scope-view"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className="absolute top-0 left-0 right-0 flex flex-col items-center pt-14 px-6 w-full max-w-[390px] mx-auto"
              >
                {/* Close Button */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => onClose('outOfScope')}
                  className="absolute top-11 right-5 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    background: 'rgba(15, 22, 33, 0.6)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(94, 179, 224, 0.2)',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 1L13 13M1 13L13 1" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </motion.button>

                {/* What User Asked */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="text-center w-full mb-4"
                >
                  <p
                    className="italic"
                    style={{
                      fontSize: '15px',
                      fontWeight: '300',
                      fontFamily: 'Roboto, Inter, SF Pro Display, -apple-system, system-ui, sans-serif',
                      letterSpacing: '0.01em',
                      lineHeight: '1.4',
                      color: 'rgba(255, 255, 255, 0.6)',
                    }}
                  >
                    "{finalTranscript || liveTranscript || 'No transcript available'}"
                  </p>
                </motion.div>

                {/* Main Response Card using HosPage styling */}
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                  className="w-full max-w-[340px] mb-6"
                >
                  <div
                    className="rounded-2xl px-6 py-6 relative"
                    style={{
                      background: '#0e2e4b',
                      border: '1px solid rgba(94, 179, 224, 0.3)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.4), 0 0 0 0.5px rgba(94, 179, 224, 0.15) inset',
                    }}
                  >
                    {/* Animated glow border */}
                    <motion.div
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      style={{
                        boxShadow: '0 0 30px rgba(94, 179, 224, 0.2) inset',
                      }}
                    />

                    <div className="flex flex-col gap-4 relative z-10">
                      {/* Main Heading */}
                      <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-white"
                        style={{
                          fontSize: '20px',
                          fontWeight: '700',
                          fontFamily: 'Roboto, sans-serif',
                          lineHeight: '1.3',
                        }}
                      >
                        I can't help with that yet
                      </motion.h2>

                      {/* Explanation */}
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-white/80"
                        style={{
                          fontSize: '15px',
                          fontWeight: '400',
                          fontFamily: 'Roboto, sans-serif',
                          lineHeight: '1.5',
                        }}
                      >
                        ...but I'm built to help with driving, loads, and fleet tasks.
                      </motion.p>
                    </div>
                  </div>
                </motion.div>

                {/* Try One of These Instead - Quick Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-full flex flex-col gap-[9px] mb-4"
                >
                  <p 
                    className="text-white/50 text-center mb-1"
                    style={{
                      fontSize: '13px',
                      fontWeight: '600',
                      fontFamily: 'Inter, SF Pro Display, -apple-system, system-ui, sans-serif',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Try one of these instead...
                  </p>
                  
                  {initialQuickActions.map((action, index) => (
                    <motion.button
                      key={action}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                      whileHover={{ scale: 1.015 }}
                      whileTap={{ scale: 0.985 }}
                      onClick={() => {
                        if (action === "Load Summary") {
                          setStage('loadSummary');
                        } else if (action === "Whats My ETA") {
                          setStage('eta');
                        } else if (action === "What's My HOS Status") {
                          setStage('hos');
                        } else if (action === "How far till the weigh-station") {
                          setStage('weighStation');
                        } else if (action === "Certify logs") {
                          setStage('certifyLogs');
                        }
                      }}
                      className="px-4 py-[10px] rounded-full w-full"
                      style={{
                        background: 'rgba(15, 22, 33, 0.25)',
                        backdropFilter: 'blur(16px) saturate(120%)',
                        border: '1px solid rgba(94, 179, 224, 0.12)',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.3), inset 0 0.5px 0 rgba(94, 179, 224, 0.08)',
                      }}
                    >
                      <span className="text-white/80 text-sm font-normal">{action}</span>
                    </motion.button>
                  ))}
                </motion.div>
              </motion.div>
            )}

            {/* WEIGH STATION VIEW */}
            {stage === 'weighStation' && (
              <motion.div
                key="weigh-station-view"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className="absolute top-0 left-0 right-0 flex flex-col items-center pt-14 px-6 w-full max-w-[390px] mx-auto"
              >
                {/* Close Button */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => onClose('weighStation')}
                  className="absolute top-11 right-5 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    background: 'rgba(15, 22, 33, 0.6)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(94, 179, 224, 0.2)',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 1L13 13M1 13L13 1" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </motion.button>

                {/* User's Question */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="text-center w-full mb-6"
                >
                  <p
                    className="italic"
                    style={{
                      fontSize: '16px',
                      fontWeight: '300',
                      fontFamily: 'Roboto, Inter, SF Pro Display, -apple-system, system-ui, sans-serif',
                      letterSpacing: '0.01em',
                      lineHeight: '1.4',
                      color: 'rgba(255, 255, 255, 0.7)',
                    }}
                  >
                    "How far till the weigh-station"
                  </p>
                </motion.div>

                {/* Weigh Station Widget */}
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                  className="w-full max-w-[340px]"
                >
                  <div
                    className="rounded-2xl px-6 py-6 relative"
                    style={{
                      background: '#0e2e4b',
                      border: '1px solid #2474bb',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.4), 0 4px 12px rgba(36, 116, 187, 0.15)',
                    }}
                  >
                    <div className="flex flex-col gap-4">
                      {/* Large Distance Display */}
                      <div className="text-center">
                        <p
                          className="text-white/60 mb-2"
                          style={{
                            fontSize: '12px',
                            fontWeight: '600',
                            fontFamily: 'Roboto, sans-serif',
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                          }}
                        >
                          Next Weigh Station
                        </p>
                        <motion.p
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                          className="text-white"
                          style={{
                            fontSize: '42px',
                            fontWeight: '700',
                            fontFamily: 'Roboto, sans-serif',
                            lineHeight: '1',
                          }}
                        >
                          47 <span style={{ fontSize: '24px', fontWeight: '400', color: 'rgba(255,255,255,0.7)' }}>Miles</span>
                        </motion.p>
                      </div>

                      {/* Location Details */}
                      <div 
                        className="rounded-lg px-4 py-3"
                        style={{
                          background: '#0c2841',
                          border: '1px solid #1d5d96',
                        }}
                      >
                        <p
                          className="text-white/90 mb-1"
                          style={{
                            fontSize: '15px',
                            fontWeight: '600',
                            fontFamily: 'Roboto, sans-serif',
                          }}
                        >
                          I-80 Eastbound, Exit 312
                        </p>
                        <p
                          className="text-white/60"
                          style={{
                            fontSize: '13px',
                            fontWeight: '400',
                            fontFamily: 'Roboto, sans-serif',
                          }}
                        >
                          ETA: ~43 minutes
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Quick Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="w-full flex flex-col gap-[9px] mt-6 mb-4"
                >
                  <p 
                    className="text-white/35 text-center mb-0"
                    style={{
                      fontSize: '10px',
                      fontWeight: '600',
                      fontFamily: 'Inter, SF Pro Display, -apple-system, system-ui, sans-serif',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Quick Actions
                  </p>
                  
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.985 }}
                    onClick={() => setStage('eta')}
                    className="px-4 py-[10px] rounded-full w-full"
                    style={{
                      background: 'rgba(15, 22, 33, 0.25)',
                      backdropFilter: 'blur(16px) saturate(120%)',
                      border: '1px solid rgba(94, 179, 224, 0.12)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.3), inset 0 0.5px 0 rgba(94, 179, 224, 0.08)',
                    }}
                  >
                    <span className="text-white/80 text-sm font-normal">Check My ETA</span>
                  </motion.button>

                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.55 }}
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.985 }}
                    onClick={() => setStage('loadSummary')}
                    className="px-4 py-[10px] rounded-full w-full"
                    style={{
                      background: 'rgba(15, 22, 33, 0.25)',
                      backdropFilter: 'blur(16px) saturate(120%)',
                      border: '1px solid rgba(94, 179, 224, 0.12)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.3), inset 0 0.5px 0 rgba(94, 179, 224, 0.08)',
                    }}
                  >
                    <span className="text-white/80 text-sm font-normal">View Load Summary</span>
                  </motion.button>
                </motion.div>
              </motion.div>
            )}

            {/* CERTIFY LOGS VIEW */}
            {stage === 'certifyLogs' && (
              <motion.div
                key="certify-logs-view"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className="absolute top-0 left-0 right-0 flex flex-col items-center justify-center pt-20 px-6 w-full max-w-[390px] mx-auto"
              >
                {/* Close Button */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => onClose('certifyLogs')}
                  className="absolute top-11 right-5 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    background: 'rgba(15, 22, 33, 0.6)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(94, 179, 224, 0.2)',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 1L13 13M1 13L13 1" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </motion.button>

                {/* Main Certification Card */}
                <motion.div
                  initial={{ y: 20, opacity: 0, scale: 0.95 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
                  className="w-full max-w-[340px] rounded-2xl px-6 py-8 mb-6"
                  style={{
                    background: '#0e2e4b',
                    border: '1px solid rgba(94, 179, 224, 0.3)',
                    boxShadow: '0 12px 32px rgba(0,0,0,0.5), 0 0 0 0.5px rgba(94, 179, 224, 0.15) inset',
                  }}
                >
                  <div className="flex flex-col gap-6 items-center text-center">
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3, type: "spring", stiffness: 300, damping: 20 }}
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{
                        background: 'rgba(36, 116, 187, 0.2)',
                        border: '2px solid rgba(94, 179, 224, 0.4)',
                      }}
                    >
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="rgba(184, 230, 249, 1)"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </motion.div>

                    {/* Heading */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h2
                        className="text-white mb-2"
                        style={{
                          fontSize: '22px',
                          fontWeight: '700',
                          fontFamily: 'Roboto, sans-serif',
                        }}
                      >
                        Certify Your Logs?
                      </h2>
                      <p
                        className="text-white/70"
                        style={{
                          fontSize: '14px',
                          fontWeight: '400',
                          fontFamily: 'Roboto, sans-serif',
                          lineHeight: '1.5',
                        }}
                      >
                        You're about to certify your logs for:
                      </p>
                    </motion.div>

                    {/* Time Period Info */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="w-full rounded-lg px-4 py-4"
                      style={{
                        background: '#0c2841',
                        border: '1px solid #1d5d96',
                      }}
                    >
                      <p
                        className="text-white/90 mb-1"
                        style={{
                          fontSize: '16px',
                          fontWeight: '600',
                          fontFamily: 'Roboto, sans-serif',
                        }}
                      >
                        Today, January 12, 2026
                      </p>
                      <p
                        className="text-white/60"
                        style={{
                          fontSize: '13px',
                          fontWeight: '400',
                          fontFamily: 'Roboto, sans-serif',
                        }}
                      >
                        00:00 - Current Time
                      </p>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="flex flex-col gap-3 w-full mt-2"
                    >
                      {/* Certify Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          // Show success and close
                          setTimeout(() => onClose('certifyLogs'), 1500);
                        }}
                        className="w-full rounded-full px-6 py-4"
                        style={{
                          background: '#2474bb',
                          boxShadow: '0 4px 16px rgba(36, 116, 187, 0.4)',
                        }}
                      >
                        <span
                          className="text-white"
                          style={{
                            fontSize: '17px',
                            fontWeight: '700',
                            fontFamily: 'Roboto, sans-serif',
                          }}
                        >
                          Certify Logs
                        </span>
                      </motion.button>

                      {/* Cancel Button */}
                      <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={() => onClose()}
                        className="w-full rounded-full px-6 py-3"
                        style={{
                          background: 'rgba(15, 22, 33, 0.4)',
                          border: '1px solid rgba(94, 179, 224, 0.2)',
                        }}
                      >
                        <span
                          className="text-white/80"
                          style={{
                            fontSize: '15px',
                            fontWeight: '600',
                            fontFamily: 'Roboto, sans-serif',
                          }}
                        >
                          Cancel
                        </span>
                      </motion.button>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* ERROR/TIMEOUT STATE */}
            {(stage === 'error' || stage === 'timeout') && (
              <motion.div
                key="error-view"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className="absolute top-0 left-0 right-0 flex flex-col items-center justify-center pt-32 px-6 w-full max-w-[390px] mx-auto"
              >
                {/* Error Icon */}
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: 0.1
                  }}
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                  style={{
                    background: 'rgba(255, 75, 75, 0.15)',
                    border: '2px solid rgba(255, 75, 75, 0.4)',
                    boxShadow: '0 0 30px rgba(255, 75, 75, 0.2)',
                  }}
                >
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="rgba(255, 100, 100, 0.9)"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </motion.div>

                {/* Error Message */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="text-center mb-8"
                >
                  <p
                    className="text-white/95 mb-2"
                    style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      fontFamily: 'Roboto, Inter, SF Pro Display, -apple-system, system-ui, sans-serif',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {stage === 'timeout' ? 'No Voice Detected' : 'Something Went Wrong'}
                  </p>
                  <p
                    className="text-white/70"
                    style={{
                      fontSize: '15px',
                      fontWeight: '400',
                      fontFamily: 'Roboto, Inter, SF Pro Display, -apple-system, system-ui, sans-serif',
                      lineHeight: '1.5',
                    }}
                  >
                    {errorMessage || 'Please try again or check your connection.'}
                  </p>
                </motion.div>

                {/* Retry Button */}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleRetry}
                  className="px-8 py-4 rounded-full w-full max-w-[280px]"
                  style={{
                    background: '#2474bb',
                    boxShadow: '0 4px 16px rgba(36, 116, 187, 0.4)',
                  }}
                >
                  <span
                    className="text-white"
                    style={{
                      fontSize: '16px',
                      fontWeight: '700',
                      fontFamily: 'Roboto, sans-serif',
                    }}
                  >
                    Try Again
                  </span>
                </motion.button>
              </motion.div>
            )}

            {/* FLEET SELECTOR MODAL */}
            <AnimatePresence>
              {showFleetSelector && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center px-6 z-50"
                  onClick={() => setShowFleetSelector(false)}
                >
                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0"
                    style={{
                      background: 'rgba(5, 16, 26, 0.85)',
                      backdropFilter: 'blur(12px)',
                    }}
                  />

                  {/* Fleet Selection Card */}
                  <motion.div
                    initial={{ scale: 0.9, y: 30 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 30 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative w-full max-w-[340px] rounded-3xl p-6"
                    style={{
                      background: 'rgba(14, 46, 75, 0.95)',
                      backdropFilter: 'blur(40px) saturate(120%)',
                      border: '1px solid rgba(94, 179, 224, 0.3)',
                      boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(94, 179, 224, 0.1) inset',
                    }}
                  >
                    {/* Header */}
                    <div className="text-center mb-6">
                      <p
                        className="text-white/95 mb-1"
                        style={{
                          fontSize: '20px',
                          fontWeight: '700',
                          fontFamily: 'Roboto, sans-serif',
                        }}
                      >
                        Select Fleet ID
                      </p>
                      <p
                        className="text-white/60"
                        style={{
                          fontSize: '13px',
                          fontWeight: '400',
                          fontFamily: 'Roboto, sans-serif',
                        }}
                      >
                        Tap or say the fleet name
                      </p>
                    </div>

                    {/* Large Fleet Buttons */}
                    <div className="flex flex-col gap-4 mb-4">
                      {FLEET_IDS.map((fleetId, index) => (
                        <motion.button
                          key={fleetId}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.08 }}
                          whileHover={{ scale: 1.02, x: 4 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleSelectFleet(fleetId)}
                          className="relative px-6 py-5 rounded-2xl text-left overflow-hidden"
                          style={{
                            background: selectedFleetId === fleetId 
                              ? 'rgba(36, 116, 187, 0.4)'
                              : 'rgba(15, 22, 33, 0.6)',
                            border: selectedFleetId === fleetId
                              ? '2px solid rgba(94, 179, 224, 0.6)'
                              : '2px solid rgba(94, 179, 224, 0.15)',
                            boxShadow: selectedFleetId === fleetId
                              ? '0 4px 20px rgba(36, 116, 187, 0.3), inset 0 1px 0 rgba(94, 179, 224, 0.2)'
                              : '0 2px 8px rgba(0,0,0,0.3)',
                          }}
                        >
                          {/* Shimmer effect */}
                          <motion.div
                            animate={{
                              x: ['-100%', '200%'],
                            }}
                            transition={{
                              duration: 3,
                              delay: index * 0.5,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                            className="absolute inset-0 pointer-events-none"
                            style={{
                              background: 'linear-gradient(90deg, transparent 0%, rgba(94, 179, 224, 0.1) 50%, transparent 100%)',
                            }}
                          />

                          <span
                            className="relative text-white"
                            style={{
                              fontSize: '22px',
                              fontWeight: '700',
                              fontFamily: 'Roboto, sans-serif',
                              letterSpacing: '0.5px',
                            }}
                          >
                            {fleetId}
                          </span>

                          {/* Selected indicator */}
                          {selectedFleetId === fleetId && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 500, damping: 25 }}
                              className="absolute right-5 top-1/2 -translate-y-1/2"
                            >
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="11" fill="rgba(94, 179, 224, 0.3)" />
                                <path
                                  d="M7 12l4 4 6-6"
                                  stroke="white"
                                  strokeWidth={2.5}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </motion.div>
                          )}
                        </motion.button>
                      ))}
                    </div>

                    {/* Cancel Button */}
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setShowFleetSelector(false)}
                      className="w-full py-3 rounded-full"
                      style={{
                        background: 'rgba(15, 22, 33, 0.4)',
                        border: '1px solid rgba(94, 179, 224, 0.15)',
                      }}
                    >
                      <span
                        className="text-white/80"
                        style={{
                          fontSize: '15px',
                          fontWeight: '600',
                          fontFamily: 'Roboto, sans-serif',
                        }}
                      >
                        Cancel
                      </span>
                    </motion.button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Close Button - Minimal Glass - Hide during special views */}
            {stage !== 'loadSummary' && stage !== 'eta' && stage !== 'hos' && stage !== 'error' && stage !== 'timeout' && stage !== 'outOfScope' && stage !== 'weighStation' && stage !== 'certifyLogs' && (
            <motion.button
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                scale: 1.08,
                backgroundColor: 'rgba(15, 22, 33, 0.35)',
              }}
              whileTap={{ scale: 0.92 }}
              transition={{ delay: 0.7, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={onClose}
              className="absolute top-11 right-5 w-9 h-9 rounded-full flex items-center justify-center"
              style={{
                background: 'rgba(15, 22, 33, 0.25)',
                backdropFilter: 'blur(16px) saturate(120%)',
                border: '1px solid rgba(94, 179, 224, 0.15)',
                boxShadow: '0 2px 10px rgba(0,0,0,0.35)',
              }}
            >
              <svg
                className="w-[14px] h-[14px] text-white/75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>
            )}
          </div>

          {/* Subtle Floating Particles - Ambient Light */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              initial={{ 
                x: 50 + Math.random() * 290,
                y: 700 + Math.random() * 150,
                opacity: 0,
              }}
              animate={{
                y: -250,
                x: [null, (50 + Math.random() * 290) + (Math.random() - 0.5) * 40],
                opacity: [0, 0.2, 0.35, 0.25, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                delay: i * 0.7,
                repeat: Infinity,
                ease: "easeOut"
              }}
              className="absolute w-[2px] h-[2px] rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(94, 179, 224, 0.7) 0%, transparent 70%)',
                boxShadow: '0 0 4px rgba(94, 179, 224, 0.5)',
                willChange: 'transform, opacity',
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}