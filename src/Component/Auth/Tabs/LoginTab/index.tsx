'use client';

import { useState } from 'react';
import { Eye, EyeOff, LogIn } from 'react-feather';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/Store/useAuthStore';
import { toast } from 'react-toastify';

const DEFAULT_USERS: Record<string, { password: string; name: string; role: string; operateur?: string }> = {
  // ── Admins (FIRCA / APROMAC — non-encadreurs, voient tout) ─────────────────
  'Test123@gmail.com': { password: 'Test@123',     name: 'Super Admin',    role: 'admin'                        },
  'admin@firca.ci':    { password: 'Firca@2024',   name: 'Admin FIRCA',    role: 'admin',  operateur: 'FIRCA'   },
  'admin@apromac.ci':  { password: 'Apromac@2024', name: 'Admin APROMAC',  role: 'admin',  operateur: 'APROMAC' },

  // ── SAPH (op-1) ─────────────────────────────────────────────────────────────
  'cd@saph.ci': { password: 'Cd@2024', name: 'Chef Département SAPH',     role: 'chef_departement', operateur: 'SAPH' },
  'cs@saph.ci': { password: 'Cs@2024', name: 'Chef Secteur SAPH',         role: 'chef_secteur',     operateur: 'SAPH' },
  'cf@saph.ci': { password: 'Cf@2024', name: 'Contrôleur Formation SAPH', role: 'CF',               operateur: 'SAPH' },
  'co@saph.ci': { password: 'Co@2024', name: 'Contrôleur Ordinaire SAPH', role: 'CO',               operateur: 'SAPH' },
  'fs@saph.ci': { password: 'Fs@2024', name: 'Formateur Saigné SAPH',     role: 'FS',               operateur: 'SAPH' },
  'mo@saph.ci': { password: 'Mo@2024', name: 'Moniteur SAPH',             role: 'MO',               operateur: 'SAPH' },
  'es@saph.ci': { password: 'Es@2024', name: 'Équipe Spéciale SAPH',      role: 'ES',               operateur: 'SAPH' },
  'se@saph.ci': { password: 'Se@2024', name: 'Secrétaire SAPH',           role: 'SE',               operateur: 'SAPH' },
  'su@saph.ci': { password: 'Su@2024', name: 'Superviseur SAPH',          role: 'SU',               operateur: 'SAPH' },
  'di@saph.ci': { password: 'Di@2024', name: 'Directeur SAPH',            role: 'DI',               operateur: 'SAPH' },

  // ── PALMCI (op-2) ───────────────────────────────────────────────────────────
  'cd@palmci.ci': { password: 'Cd@2024', name: 'Chef Département PALMCI',     role: 'chef_departement', operateur: 'PALMCI' },
  'cs@palmci.ci': { password: 'Cs@2024', name: 'Chef Secteur PALMCI',         role: 'chef_secteur',     operateur: 'PALMCI' },
  'cf@palmci.ci': { password: 'Cf@2024', name: 'Contrôleur Formation PALMCI', role: 'CF',               operateur: 'PALMCI' },
  'co@palmci.ci': { password: 'Co@2024', name: 'Contrôleur Ordinaire PALMCI', role: 'CO',               operateur: 'PALMCI' },
  'fs@palmci.ci': { password: 'Fs@2024', name: 'Formateur Saigné PALMCI',     role: 'FS',               operateur: 'PALMCI' },
  'mo@palmci.ci': { password: 'Mo@2024', name: 'Moniteur PALMCI',             role: 'MO',               operateur: 'PALMCI' },
  'es@palmci.ci': { password: 'Es@2024', name: 'Équipe Spéciale PALMCI',      role: 'ES',               operateur: 'PALMCI' },
  'se@palmci.ci': { password: 'Se@2024', name: 'Secrétaire PALMCI',           role: 'SE',               operateur: 'PALMCI' },
  'su@palmci.ci': { password: 'Su@2024', name: 'Superviseur PALMCI',          role: 'SU',               operateur: 'PALMCI' },
  'di@palmci.ci': { password: 'Di@2024', name: 'Directeur PALMCI',            role: 'DI',               operateur: 'PALMCI' },

  // ── SOGB (op-3) ─────────────────────────────────────────────────────────────
  'cd@sogb.ci': { password: 'Cd@2024', name: 'Chef Département SOGB',     role: 'chef_departement', operateur: 'SOGB' },
  'cs@sogb.ci': { password: 'Cs@2024', name: 'Chef Secteur SOGB',         role: 'chef_secteur',     operateur: 'SOGB' },
  'cf@sogb.ci': { password: 'Cf@2024', name: 'Contrôleur Formation SOGB', role: 'CF',               operateur: 'SOGB' },
  'co@sogb.ci': { password: 'Co@2024', name: 'Contrôleur Ordinaire SOGB', role: 'CO',               operateur: 'SOGB' },
  'fs@sogb.ci': { password: 'Fs@2024', name: 'Formateur Saigné SOGB',     role: 'FS',               operateur: 'SOGB' },
  'mo@sogb.ci': { password: 'Mo@2024', name: 'Moniteur SOGB',             role: 'MO',               operateur: 'SOGB' },
  'es@sogb.ci': { password: 'Es@2024', name: 'Équipe Spéciale SOGB',      role: 'ES',               operateur: 'SOGB' },
  'se@sogb.ci': { password: 'Se@2024', name: 'Secrétaire SOGB',           role: 'SE',               operateur: 'SOGB' },
  'su@sogb.ci': { password: 'Su@2024', name: 'Superviseur SOGB',          role: 'SU',               operateur: 'SOGB' },
  'di@sogb.ci': { password: 'Di@2024', name: 'Directeur SOGB',            role: 'DI',               operateur: 'SOGB' },
};

const ROLE_HOME: Record<string, string> = {
  admin:            '/dashboard',
  chef_departement: '/cd/dashboard',
  chef_secteur:     '/cs/dashboard',
  CF:               '/collab/dashboard',
  CO:               '/collab/dashboard',
  FS:               '/collab/dashboard',
  MO:               '/collab/dashboard',
  ES:               '/collab/dashboard',
  SE:               '/collab/dashboard',
  SU:               '/collab/dashboard',
  DI:               '/collab/dashboard',
  collaborateur:    '/collab/dashboard',
};

const LoginTab = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email,        setEmail       ] = useState('admin@apromac.ci');
  const [password,     setPassword    ] = useState('Apromac@2024');
  const [loading,      setLoading     ] = useState(false);
  const router = useRouter();
  const login  = useAuthStore((s) => s.login);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 400)); // micro-délai UX

    const stored = useAuthStore.getState().user;
    if (stored?.email === email && stored?.password === password) {
      login({ ...stored });
      toast.success('Connexion réussie');
      router.push(ROLE_HOME[stored.role] ?? '/dashboard');
      return;
    }

    const found = DEFAULT_USERS[email];
    if (found && found.password === password) {
      login({ email, name: found.name, role: found.role, password, operateur: found.operateur });
      toast.success('Connexion réussie');
      router.push(ROLE_HOME[found?.role ?? ''] ?? '/dashboard');
    } else {
      toast.error('Identifiants incorrects');
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>

      {/* Email */}
      <div style={{ marginBottom: 20 }}>
        <label style={labelStyle} htmlFor='login-email'>Adresse e-mail</label>
        <input
          id='login-email'
          type='email'
          required
          autoComplete='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          placeholder='exemple@domaine.com'
        />
      </div>

      {/* Mot de passe */}
      <div style={{ marginBottom: 28 }}>
        <label style={labelStyle} htmlFor='login-password'>Mot de passe</label>
        <div style={{ position: 'relative' }}>
          <input
            id='login-password'
            type={showPassword ? 'text' : 'password'}
            required
            autoComplete='current-password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ ...inputStyle, paddingRight: 44 }}
            placeholder='••••••••'
          />
          <button
            type='button'
            onClick={() => setShowPassword((v) => !v)}
            style={{
              position: 'absolute',
              right: 12,
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#888',
              display: 'flex',
              alignItems: 'center',
              padding: 0,
            }}
            tabIndex={-1}
            aria-label={showPassword ? 'Masquer' : 'Afficher'}
          >
            {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
          </button>
        </div>
      </div>

      {/* Bouton */}
      <button
        type='submit'
        disabled={loading}
        style={{
          width: '100%',
          padding: '12px 0',
          background: loading ? '#5a9e8f' : '#24695c',
          color: '#fff',
          border: 'none',
          borderRadius: 8,
          fontSize: 15,
          fontWeight: 600,
          cursor: loading ? 'not-allowed' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          transition: 'background 0.2s',
        }}
      >
        {loading ? (
          <>
            <span
              style={{
                width: 16, height: 16,
                border: '2px solid rgba(255,255,255,0.4)',
                borderTopColor: '#fff',
                borderRadius: '50%',
                display: 'inline-block',
                animation: 'spin 0.7s linear infinite',
              }}
            />
            Connexion…
          </>
        ) : (
          <>
            <LogIn size={17} />
            Se connecter
          </>
        )}
      </button>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </form>
  );
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  marginBottom: 6,
  fontSize: 13,
  fontWeight: 600,
  color: '#374151',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px 14px',
  border: '1.5px solid #d1d5db',
  borderRadius: 8,
  fontSize: 14,
  color: '#111',
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
  boxSizing: 'border-box',
};

export default LoginTab;
