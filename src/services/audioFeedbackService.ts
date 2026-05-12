/**
 * Audio Feedback Service
 * Simplified for iOS PWA stability - uses a single AudioContext
 */

export type AudioFeedbackType = 'start' | 'success' | 'error' | 'cancel';

// Single shared AudioContext
let audioContext: AudioContext | null = null;
let lastPlayTime = 0;

export class AudioFeedbackService {
  private isIOS: boolean;

  constructor() {
    this.isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  }

  private getContext(): AudioContext | null {
    try {
      if (!audioContext || audioContext.state === 'closed') {
        audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      return audioContext;
    } catch (e) {
      console.warn('[Audio] Failed to get context:', e);
      return null;
    }
  }

  async playBeep(type: AudioFeedbackType = 'start'): Promise<void> {
    // Throttle to prevent spam
    const now = Date.now();
    if (now - lastPlayTime < 300) return;
    lastPlayTime = now;

    const ctx = this.getContext();
    if (!ctx) return;

    try {
      // Resume if suspended (required for iOS after user interaction)
      if (ctx.state === 'suspended') {
        await ctx.resume();
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const volume = this.isIOS ? 0.1 : 0.15;
      const now = ctx.currentTime;

      switch (type) {
        case 'start':
          osc.frequency.setValueAtTime(600, now);
          osc.frequency.exponentialRampToValueAtTime(800, now + 0.15);
          gain.gain.setValueAtTime(0, now);
          gain.gain.linearRampToValueAtTime(volume, now + 0.03);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
          osc.start(now);
          osc.stop(now + 0.16);
          break;

        case 'success':
          osc.frequency.setValueAtTime(523, now);
          gain.gain.setValueAtTime(0, now);
          gain.gain.linearRampToValueAtTime(volume, now + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
          osc.start(now);
          osc.stop(now + 0.11);
          
          // Second tone
          const osc2 = ctx.createOscillator();
          const gain2 = ctx.createGain();
          osc2.connect(gain2);
          gain2.connect(ctx.destination);
          osc2.frequency.value = 659;
          gain2.gain.setValueAtTime(0, now + 0.08);
          gain2.gain.linearRampToValueAtTime(volume, now + 0.1);
          gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
          osc2.start(now + 0.08);
          osc2.stop(now + 0.19);
          break;

        case 'error':
          osc.frequency.setValueAtTime(400, now);
          osc.frequency.exponentialRampToValueAtTime(300, now + 0.2);
          gain.gain.setValueAtTime(0, now);
          gain.gain.linearRampToValueAtTime(volume, now + 0.03);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
          osc.start(now);
          osc.stop(now + 0.21);
          break;

        case 'cancel':
          osc.frequency.value = 450;
          gain.gain.setValueAtTime(0, now);
          gain.gain.linearRampToValueAtTime(volume * 0.8, now + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
          osc.start(now);
          osc.stop(now + 0.11);
          break;
      }

      osc.type = 'sine';
    } catch (e) {
      console.warn('[Audio] Play error:', e);
    }
  }

  cleanup(): void {
    // Don't close shared context
  }
}
