import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface AuthUser {
  email: string;
  name?: string;
  image?: string;
  role: string;
  password?: string; // conservé pour l'auth côté client
}

interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
  login: (user: AuthUser) => void;
  logout: () => void;
  updateProfile: (updates: Partial<Pick<AuthUser, 'name' | 'email'>>) => void;
  updatePassword: (newPassword: string) => void;
  updateImage: (image: string | null) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (user) => set({ user, isAuthenticated: true }),
      logout: () => set({ user: null, isAuthenticated: false }),
      updateProfile: (updates) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...updates } : null,
        })),
      updatePassword: (newPassword) =>
        set((state) => ({
          user: state.user ? { ...state.user, password: newPassword } : null,
        })),
      updateImage: (image) =>
        set((state) => ({
          user: state.user ? { ...state.user, image: image ?? undefined } : null,
        })),
    }),
    { name: 'sysde-auth' }
  )
);
