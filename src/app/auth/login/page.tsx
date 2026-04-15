'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/Store/useAuthStore';
import LoginTab from '@/Component/Auth/Tabs/LoginTab';
import { AssetsImagePath } from '@/Constant';

const LoginPage = () => {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const user            = useAuthStore((s) => s.user);
  const router          = useRouter();

  useEffect(() => {
    if (isAuthenticated && user?.role === 'admin') router.push('/dashboard');
  }, [isAuthenticated, user, router]);

  if (isAuthenticated) return null;

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'inherit' }}>

      {/* ── Panneau gauche : branding ─────────────────────────────── */}
      <div style={{
        flex: '0 0 42%',
        background: 'linear-gradient(160deg, #1a4a40 0%, #24695c 60%, #2d8c77 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '48px 40px',
        position: 'relative',
        overflow: 'hidden',
      }}
        className='login-brand-panel'
      >
        {/* Cercles décoratifs */}
        <div style={{
          position: 'absolute', width: 320, height: 320,
          borderRadius: '50%', border: '1px solid rgba(255,255,255,0.08)',
          top: -80, left: -80,
        }} />
        <div style={{
          position: 'absolute', width: 200, height: 200,
          borderRadius: '50%', border: '1px solid rgba(255,255,255,0.06)',
          bottom: 40, right: -60,
        }} />

        {/* Contenu */}
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', width: '100%' }}>
          <Image
            src={`${AssetsImagePath}/logo.png`}
            alt='SYSDE'
            width={600}
            height={200}
            style={{ objectFit: 'contain', marginBottom: 32, display: 'block', margin: '0 auto 32px' }}
            unoptimized
          />

          <h1 style={{ color: '#fff', fontSize: 28, fontWeight: 700, margin: '0 0 10px', letterSpacing: '-0.3px' }}>
            SYSDE
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 14, lineHeight: 1.6, margin: '0 0 36px' }}>
            Système de Suivi du Déploiement des Encadreurs
          </p>

          {/* Badges info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, maxWidth: 220, margin: '0 auto' }}>
            {[
              { icon: '📍', text: 'Suivi géographique des postes' },
              { icon: '👷', text: 'Gestion des encadreurs' },
              { icon: '📋', text: 'Contrats & exercices' },
            ].map(({ icon, text }) => (
              <div key={text} style={{
                display: 'flex', alignItems: 'center', gap: 6,
                background: 'rgba(255,255,255,0.08)',
                borderRadius: 6, padding: '5px 10px',
                color: 'rgba(255,255,255,0.85)', fontSize: 11,
              }}>
                <span style={{ fontSize: 12 }}>{icon}</span>
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* Version */}
        <div style={{
          position: 'absolute', bottom: 20, left: 0, right: 0,
          textAlign: 'center', color: 'rgba(255,255,255,0.35)', fontSize: 11,
        }}>
          FIRCA — v1.0
        </div>
      </div>

      {/* ── Panneau droit : formulaire ───────────────────────────── */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f8fafb',
        padding: '32px 24px',
      }}>
        <div style={{ width: '100%', maxWidth: 400 }}>

          <div style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#111827', margin: '0 0 6px' }}>
              Bienvenue
            </h2>
            <p style={{ color: '#6b7280', fontSize: 14, margin: 0 }}>
              Connectez-vous à votre espace de gestion
            </p>
          </div>

          <div style={{
            background: '#fff',
            borderRadius: 14,
            padding: '32px 28px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
            border: '1px solid #e5e7eb',
          }}>
            <LoginTab />
          </div>

          <p style={{ textAlign: 'center', color: '#9ca3af', fontSize: 12, marginTop: 24 }}>
            Accès réservé au personnel autorisé
          </p>
        </div>
      </div>

      {/* Responsive : cacher le panneau gauche sur mobile */}
      <style>{`
        @media (max-width: 768px) {
          .login-brand-panel { display: none !important; }
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
