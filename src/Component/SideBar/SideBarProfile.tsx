import { useAuthStore } from '../../Store/useAuthStore';
import Link from 'next/link';
import { Settings } from 'react-feather';

const getInitials = (name?: string | null): string => {
  if (!name) return '?';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const avatarStyle: React.CSSProperties = {
  width: 90,
  height: 90,
  borderRadius: '50%',
  overflow: 'hidden',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  flexShrink: 0,
};

const SideBarProfile = () => {
  const user = useAuthStore((s) => s.user);

  return (
    <div className='sidebar-user text-center'>
      <Link className='setting-primary' href='/reglages'>
        <Settings />
      </Link>
      {user?.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={user.image}
          alt='Profile'
          style={{ width: 90, height: 90, borderRadius: '50%', objectFit: 'cover', display: 'inline-block' }}
        />
      ) : (
        <div
          style={{
            ...avatarStyle,
            background: 'var(--theme-default, #7366ff)',
            fontSize: 28,
            fontWeight: 700,
            color: '#fff',
            letterSpacing: 1,
          }}
        >
          {getInitials(user?.name)}
        </div>
      )}
      <h6 className='mt-3 f-14 f-w-600'>{user?.name || 'Admin'}</h6>
      <p className='mb-0 font-roboto'>{user?.role === 'admin' ? 'Administrateur' : user?.role}</p>
    </div>
  );
};

export default SideBarProfile;
