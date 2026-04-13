import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import ConfigDB from '@/config/ThemeConfig';

interface ThemeState {
  sideBarType: string;
  layoutType: string;
  backgroundColor1: string;
  backgroundColor2: string;
  setSideBarType: (type: string) => void;
  setLayoutType: (type: string) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      sideBarType: 'compact-wrapper',
      layoutType: '',
      backgroundColor1: ConfigDB.data.color.primary_color,
      backgroundColor2: ConfigDB.data.color.secondary_color,
      setSideBarType: (type) => set({ sideBarType: type }),
      setLayoutType: (type) => set({ layoutType: type }),
    }),
    { name: 'sysde-theme' }
  )
);
