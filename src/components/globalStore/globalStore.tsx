import create from 'zustand';

interface ColorMode {
  selectedMode: boolean | string;
  setSelectedMode: (mode: boolean) => void;
}

export const modeStore = create<ColorMode>(set => ({
  selectedMode: sessionStorage.getItem('ColorMode')
    ? JSON.parse(sessionStorage.getItem('ColorMode') || '')
    : true,
  setSelectedMode: mode => set(() => ({ selectedMode: mode })),
}));
