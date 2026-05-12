/**
 * Voice Service - Handles microphone access and speech recognition
 * Simplified for iOS PWA stability
 */

export interface VoiceRecognitionCallbacks {
  onPartialTranscript?: (text: string) => void;
  onFinalTranscript?: (text: string) => void;
  onAmplitudeUpdate?: (amplitude: number) => void;
  onError?: (error: Error) => void;
  onStart?: () => void;
  onEnd?: () => void;
  onSoundStart?: () => void;
  onSpeechStart?: () => void;
}

export class VoiceService {
  private recognition: SpeechRecognition | null = null;
  private callbacks: VoiceRecognitionCallbacks = {};
  private isListening: boolean = false;
  private isIOS: boolean;
  private permissionGranted: boolean = false;

  constructor() {
    this.isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  }

  static isSupported(): boolean {
    return 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;
  }

  async initialize(): Promise<void> {
    if (!VoiceService.isSupported()) {
      throw new Error('Speech recognition is not supported in this browser.');
    }

    // Request microphone permission
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach(track => track.stop());
      this.permissionGranted = true;
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
          throw new Error('Microphone access denied. Please enable microphone permissions.');
        }
      }
      throw new Error('Failed to access microphone.');
    }

    this.createRecognition();
  }

  private createRecognition(): void {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    this.recognition = new SpeechRecognition();
    this.recognition.continuous = false; // More stable on iOS
    this.recognition.interimResults = true;
    this.recognition.lang = 'en-US';
    this.recognition.maxAlternatives = 1;

    this.recognition.onstart = () => {
      this.isListening = true;
      this.callbacks.onStart?.();
    };

    this.recognition.onsoundstart = () => {
      this.callbacks.onSoundStart?.();
    };

    this.recognition.onspeechstart = () => {
      this.callbacks.onSpeechStart?.();
    };

    this.recognition.onresult = (event: SpeechRecognitionEvent) => {
      let interimTranscript = '';
      let finalTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript + ' ';
        } else {
          interimTranscript += transcript;
        }
      }

      if (interimTranscript) {
        this.callbacks.onPartialTranscript?.(interimTranscript.trim());
        // Simulate amplitude for visual feedback
        this.callbacks.onAmplitudeUpdate?.(0.5 + Math.random() * 0.3);
      }

      if (finalTranscript) {
        this.callbacks.onFinalTranscript?.(finalTranscript.trim());
        this.callbacks.onAmplitudeUpdate?.(0);
      }
    };

    this.recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      console.log('[Voice] Recognition error:', event.error);
      
      // Don't treat these as fatal errors
      if (event.error === 'no-speech' || event.error === 'aborted') {
        return;
      }

      if (event.error === 'not-allowed') {
        this.callbacks.onError?.(new Error('Microphone permission denied.'));
        return;
      }

      // For other errors, just log but don't crash
      console.warn('[Voice] Error:', event.error);
    };

    this.recognition.onend = () => {
      this.isListening = false;
      this.callbacks.onAmplitudeUpdate?.(0);
      this.callbacks.onEnd?.();
    };
  }

  startListening(callbacks: VoiceRecognitionCallbacks): void {
    this.callbacks = callbacks;

    // Recreate recognition each time for stability
    this.createRecognition();

    if (!this.recognition) {
      callbacks.onError?.(new Error('Voice service not initialized.'));
      return;
    }

    try {
      this.recognition.start();
    } catch (error) {
      console.warn('[Voice] Start error:', error);
      // Try recreating and starting again
      setTimeout(() => {
        try {
          this.createRecognition();
          this.recognition?.start();
        } catch (e) {
          console.error('[Voice] Retry failed:', e);
        }
      }, 100);
    }
  }

  stopListening(): void {
    if (this.recognition) {
      try {
        this.recognition.stop();
      } catch (e) {
        // Ignore
      }
    }
    this.isListening = false;
    this.callbacks.onAmplitudeUpdate?.(0);
  }

  getIsListening(): boolean {
    return this.isListening;
  }

  cleanup(): void {
    this.stopListening();
    this.callbacks = {};
    this.recognition = null;
  }
}
