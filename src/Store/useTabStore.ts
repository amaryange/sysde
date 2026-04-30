import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface TabState {
  parametresTab: string;
  tachesTab:     string;
  setParametresTab: (tab: string) => void;
  setTachesTab:     (tab: string) => void;
}

export const useTabStore = create<TabState>()(
  persist(
    (set) => ({
      parametresTab:    'operateur',
      tachesTab:        'utilisateur',
      setParametresTab: (tab) => set({ parametresTab: tab }),
      setTachesTab:     (tab) => set({ tachesTab: tab }),
    }),
    { name: 'sysde-tabs' }
  )
);
