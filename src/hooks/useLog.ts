import { useAuthStore } from '@/Store/useAuthStore';
import { useLogStore, type LogAction, type LogEntity } from '@/Store/useLogStore';

/**
 * Hook utilitaire — journalise une action en injectant automatiquement
 * le nom de l'utilisateur connecté.
 *
 * Usage :
 *   const log = useLog();
 *   log('CREATE', 'Poste', 'Création du poste CS-ABG-001', 'CS-ABG-001');
 */
export const useLog = () => {
  const addLog  = useLogStore((s) => s.addLog);
  const user    = useAuthStore((s) => s.user);
  const userName = user?.name ?? 'Inconnu';

  return (
    action:      LogAction,
    entity:      LogEntity,
    description: string,
    details?:    string
  ) => {
    addLog({ user: userName, action, entity, description, details });
  };
};
