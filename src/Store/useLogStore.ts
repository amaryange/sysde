import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// ─── Types ────────────────────────────────────────────────────────────────────

export type LogAction  = 'LOGIN' | 'LOGOUT' | 'CREATE' | 'UPDATE' | 'DELETE';
export type LogEntity  = 'Operateur' | 'Poste' | 'Contrat' | 'Exercice' | 'Lot' | 'Utilisateur' | 'Session';

export interface LogEntry {
  id:          string;
  timestamp:   string;        // ISO
  user:        string;        // nom affiché
  action:      LogAction;
  entity:      LogEntity;
  description: string;        // phrase lisible
  details?:    string;        // champ optionnel (ex: code modifié)
}

interface LogStore {
  logs: LogEntry[];
  addLog: (entry: Omit<LogEntry, 'id' | 'timestamp'>) => void;
  clearLogs: () => void;
}

// ─── Store ────────────────────────────────────────────────────────────────────

export const useLogStore = create<LogStore>()(
  persist(
    (set) => ({
      logs: [],

      addLog: (entry) =>
        set((state) => ({
          logs: [
            {
              ...entry,
              id:        crypto.randomUUID(),
              timestamp: new Date().toISOString(),
            },
            ...state.logs,
          ].slice(0, 500), // cap à 500 entrées
        })),

      clearLogs: () => set({ logs: [] }),
    }),
    { name: 'sysde-logs' }
  )
);
