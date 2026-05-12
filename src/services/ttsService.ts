/**
 * Text-to-Speech Service
 * With extensive logging for debugging iOS issues
 */

export interface TTSOptions {
  rate?: number;
  pitch?: number;
  volume?: number;
  voice?: SpeechSynthesisVoice;
  lang?: string;
}

export class TTSService {
  private synthesis: SpeechSynthesis;
  private isSpeaking: boolean = false;
  private isIOS: boolean;
  private hasUserInteraction: boolean = false;

  constructor() {
    this.synthesis = window.speechSynthesis;
    this.isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    
    console.log('[TTS] Initialized, isIOS:', this.isIOS);
    console.log('[TTS] Supported:', TTSService.isSupported());
    
    // Pre-load voices
    this.synthesis.getVoices();
    this.synthesis.onvoiceschanged = () => {
      console.log('[TTS] Voices loaded:', this.synthesis.getVoices().length);
    };
  }

  static isSupported(): boolean {
    return 'speechSynthesis' in window;
  }

  // Call this on user interaction to unlock audio on iOS
  unlock(): void {
    if (this.hasUserInteraction) return;
    
    console.log('[TTS] Unlocking audio...');
    this.hasUserInteraction = true;
    
    // Speak empty string to unlock
    const utterance = new SpeechSynthesisUtterance('');
    utterance.volume = 0;
    try {
      this.synthesis.speak(utterance);
      this.synthesis.cancel();
      console.log('[TTS] Audio unlocked');
    } catch (e) {
      console.log('[TTS] Unlock failed:', e);
    }
  }

  getVoices(): SpeechSynthesisVoice[] {
    return this.synthesis.getVoices();
  }

  private getBestVoice(): SpeechSynthesisVoice | null {
    const voices = this.getVoices();
    console.log('[TTS] Available voices:', voices.length);
    
    if (voices.length === 0) {
      console.warn('[TTS] No voices available!');
      return null;
    }
    
    // Preferred voices
    const preferredNames = ['Samantha', 'Karen', 'Daniel', 'Alex', 'Google US English'];
    
    for (const name of preferredNames) {
      const voice = voices.find(v => v.name.includes(name) && v.lang.startsWith('en'));
      if (voice) {
        console.log('[TTS] Selected voice:', voice.name);
        return voice;
      }
    }
    
    // Fallback
    const englishVoice = voices.find(v => v.lang.startsWith('en'));
    if (englishVoice) {
      console.log('[TTS] Fallback voice:', englishVoice.name);
      return englishVoice;
    }
    
    console.log('[TTS] Using first available voice:', voices[0]?.name);
    return voices[0] || null;
  }

  speak(text: string, options: TTSOptions = {}): Promise<void> {
    return new Promise((resolve) => {
      console.log('[TTS] speak() called with:', text?.substring(0, 50) + '...');
      
      if (!TTSService.isSupported()) {
        console.error('[TTS] Not supported!');
        resolve();
        return;
      }

      if (!text?.trim()) {
        console.log('[TTS] Empty text, skipping');
        resolve();
        return;
      }

      // Cancel any ongoing speech first
      console.log('[TTS] Cancelling previous speech...');
      this.synthesis.cancel();

      // Create utterance
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = options.rate ?? (this.isIOS ? 0.9 : 0.95);
      utterance.pitch = options.pitch ?? 1.0;
      utterance.volume = options.volume ?? 1.0;
      utterance.lang = options.lang ?? 'en-US';

      // Set voice
      const voice = this.getBestVoice();
      if (voice) {
        utterance.voice = voice;
      }

      this.isSpeaking = true;
      console.log('[TTS] Starting to speak...');

      utterance.onstart = () => {
        console.log('[TTS] ✅ Speech started!');
        this.isSpeaking = true;
      };

      utterance.onend = () => {
        console.log('[TTS] Speech ended normally');
        this.isSpeaking = false;
        resolve();
      };

      utterance.onerror = (e) => {
        console.error('[TTS] Speech error:', e.error);
        this.isSpeaking = false;
        resolve();
      };

      // Actually speak
      try {
        this.synthesis.speak(utterance);
        console.log('[TTS] speak() called on synthesis');
        
        // iOS workaround - keep synthesis alive
        if (this.isIOS) {
          const keepAlive = setInterval(() => {
            if (!this.isSpeaking) {
              clearInterval(keepAlive);
              return;
            }
            if (this.synthesis.paused) {
              console.log('[TTS] Resuming paused speech...');
              this.synthesis.resume();
            }
          }, 250);

          // Timeout fallback - if nothing happens in 10 seconds, resolve anyway
          setTimeout(() => {
            if (this.isSpeaking) {
              console.log('[TTS] Timeout - forcing resolve');
              this.isSpeaking = false;
              clearInterval(keepAlive);
              resolve();
            }
          }, 10000);
        }
      } catch (e) {
        console.error('[TTS] Exception during speak:', e);
        this.isSpeaking = false;
        resolve();
      }
    });
  }

  stop(): void {
    console.log('[TTS] stop() called');
    try {
      this.synthesis.cancel();
    } catch (e) {}
    this.isSpeaking = false;
  }

  getIsSpeaking(): boolean {
    // Check both our flag and the actual synthesis state
    const actualSpeaking = this.synthesis.speaking;
    if (actualSpeaking !== this.isSpeaking) {
      console.log('[TTS] State mismatch - flag:', this.isSpeaking, 'actual:', actualSpeaking);
    }
    return this.isSpeaking || actualSpeaking;
  }

  pause(): void {
    try { this.synthesis.pause(); } catch (e) {}
  }

  resume(): void {
    try { this.synthesis.resume(); } catch (e) {}
  }
}
