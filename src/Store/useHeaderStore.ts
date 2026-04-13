import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface HeaderState {
  backGroundChange: string;
  headerToggle: boolean;
  logoToggle: boolean;
  toggleSidebar: () => void;
  toggleHeader: () => void;
  toggleLogo: () => void;
  setLightTheme: () => void;
  setDarkSidebarTheme: () => void;
  setDarkTheme: () => void;
}

export const useHeaderStore = create<HeaderState>()(
  persist(
  (set) => ({
  backGroundChange: 'light-only',
  headerToggle: false,
  logoToggle: false,

  toggleSidebar: () => {
    const sidebar = document.getElementById('page-main-header');
    const nav     = document.getElementById('page-main-nav');
    const isOpen  = sidebar?.classList.contains('close_icon');
    if (isOpen) {
      sidebar?.classList.remove('close_icon');
      nav?.classList.remove('close_icon');
    } else {
      sidebar?.classList.add('close_icon');
      nav?.classList.add('close_icon');
    }
  },

  toggleHeader: () => set((s) => ({ headerToggle: !s.headerToggle })),

  toggleLogo: () => set((s) => ({ logoToggle: !s.logoToggle })),

  setLightTheme: () => {
    document.body.className = 'light-only';
    set({ logoToggle: false, backGroundChange: 'light-only' });
  },

  setDarkSidebarTheme: () => {
    document.body.className = 'dark-sidebar';
    set({ logoToggle: true, backGroundChange: 'dark-sidebar' });
  },

  setDarkTheme: () => {
    document.body.className = 'dark-only';
    set({ logoToggle: true, backGroundChange: 'dark-only' });
  },
}),
  { name: 'sysde-header', partialize: (s) => ({ backGroundChange: s.backGroundChange, logoToggle: s.logoToggle }) }
));
