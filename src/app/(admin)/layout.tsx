'use client';

import Header from '@/Component/Header/Header';
import SideBarSection from '@/Component/SideBar';
import { useThemeStore } from '../../Store/useThemeStore';
import { useHeaderStore } from '../../Store/useHeaderStore';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useAuthStore } from '../../Store/useAuthStore';
import { useRouter } from 'next/navigation';
import { ToastContainer } from 'react-toastify';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const sideBarType    = useThemeStore((s) => s.sideBarType);
  const backGround     = useHeaderStore((s) => s.backGroundChange);
  const pathname       = useSearchParams();
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const user           = useAuthStore((s) => s.user);
  const router         = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth/login');
    } else if (user?.role !== 'admin') {
      router.push('/auth/forbidden');
    }
  }, [isAuthenticated, user, router]);

  useEffect(() => {
    document.body.className = backGround;
  }, [backGround]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992 || sideBarType !== 'horizontal-wrapper') {
        document.getElementById('page-wrapper')?.classList.remove('horizontal-wrapper');
        document.getElementById('page-wrapper')?.classList.add('compact-wrapper');
      } else {
        document.getElementById('page-wrapper')?.classList.add('horizontal-wrapper');
        document.getElementById('page-wrapper')?.classList.remove('compact-wrapper');
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [sideBarType]);

  if (!isAuthenticated || user?.role !== 'admin') return null;

  return (
    <div id='mainLayout' className={backGround}>
      <div className={`page-wrapper ${sideBarType} ${pathname.get('layout') ?? ''}`} id='page-wrapper'>
        <Header />
        <div className='page-body-wrapper horizontal-menu'>
          <SideBarSection />
          <div className='page-body'>{children}</div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
