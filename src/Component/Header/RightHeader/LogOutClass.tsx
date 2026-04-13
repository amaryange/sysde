import { useAuthStore } from '../../../Store/useAuthStore';
import { LogOut } from 'react-feather';
import { Button } from 'reactstrap';
import { useRouter } from 'next/navigation';

const LogOutClass = () => {
  const logout = useAuthStore((s) => s.logout);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/auth/login');
  };

  return (
    <Button onClick={handleLogout} color='primary-light' style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', fontSize: '15px' }}>
      <LogOut size={18} />
      Déconnexion
    </Button>
  );
};

export default LogOutClass;
