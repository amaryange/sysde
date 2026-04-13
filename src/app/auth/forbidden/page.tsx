'use client';

import { ShieldOff } from 'react-feather';
import { Button } from 'reactstrap';
import { useAuthStore } from '../../../Store/useAuthStore';
import { useRouter } from 'next/navigation';

const ForbiddenPage = () => {
  const logout = useAuthStore((s) => s.logout);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/auth/login');
  };

  return (
    <div className='d-flex flex-column align-items-center justify-content-center vh-100 gap-3'>
      <ShieldOff size={48} className='text-danger' />
      <h4>Accès refusé</h4>
      <p className='text-muted'>Vous n'avez pas les droits nécessaires pour accéder à cette page.</p>
      <Button color='primary' onClick={handleLogout}>Se déconnecter</Button>
    </div>
  );
};

export default ForbiddenPage;
