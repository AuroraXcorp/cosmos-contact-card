// Pleasant UI sound effects using Web Audio API
const audioCtx = () => new (window.AudioContext || (window as any).webkitAudioContext)();

let ctx: AudioContext | null = null;
const getCtx = () => {
  if (!ctx) ctx = audioCtx();
  return ctx;
};

export const playTone = (freq: number, duration = 0.12, vol = 0.08, type: OscillatorType = "sine") => {
  try {
    const c = getCtx();
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, c.currentTime);
    gain.gain.setValueAtTime(0, c.currentTime);
    gain.gain.linearRampToValueAtTime(vol, c.currentTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + duration);
    osc.connect(gain);
    gain.connect(c.destination);
    osc.start(c.currentTime);
    osc.stop(c.currentTime + duration);
  } catch {}
};

export const playFocusSound = () => {
  playTone(880, 0.1, 0.06);
  setTimeout(() => playTone(1100, 0.08, 0.04), 60);
};

export const playClickSound = () => {
  playTone(660, 0.06, 0.07);
  setTimeout(() => playTone(990, 0.1, 0.05), 50);
  setTimeout(() => playTone(1320, 0.15, 0.03), 100);
};

export const playSubmitSound = () => {
  playTone(523, 0.1, 0.07);
  setTimeout(() => playTone(659, 0.1, 0.06), 80);
  setTimeout(() => playTone(784, 0.12, 0.05), 160);
  setTimeout(() => playTone(1047, 0.2, 0.04), 240);
};
