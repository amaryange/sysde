'use client';

import { useState } from 'react';
import { Eye, EyeOff, LogIn } from 'react-feather';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/Store/useAuthStore';
import { toast } from 'react-toastify';

const DEFAULT_USERS: Record<string, { password: string; name: string; role: string }> = {
  'Test123@gmail.com': { password: 'Test@123', name: 'Admin SAPH', role: 'admin' },
};

const LoginTab = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email,        setEmail       ] = useState('Test123@gmail.com');
  const [password,     setPassword    ] = useState('Test@123');
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
      router.push('/dashboard');
      return;
    }

    const found = DEFAULT_USERS[email];
    if (found && found.password === password) {
      login({ email, name: found.name, role: found.role, password });
      toast.success('Connexion réussie');
      router.push('/dashboard');
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
