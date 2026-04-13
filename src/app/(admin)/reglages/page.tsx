'use client';

import { useRef, useState } from 'react';
import { Card, CardBody, Form, FormGroup, Label, Input, Button, Row, Col, Alert } from 'reactstrap';
import { Eye, EyeOff, Camera, Trash2 } from 'react-feather';
import Image from 'next/image';
import { useAuthStore } from '@/Store/useAuthStore';

/* ------------------------------------------------------------------ */
/* Champ mot de passe avec toggle show/hide                             */
/* ------------------------------------------------------------------ */
const PasswordInput = ({ id, value, onChange, placeholder }: {
  id: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) => {
  const [show, setShow] = useState(false);
  return (
    <div className='input-group'>
      <Input
        id={id}
        type={show ? 'text' : 'password'}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      <button
        type='button'
        className='btn btn-outline-secondary'
        onClick={() => setShow((s) => !s)}
        tabIndex={-1}
      >
        {show ? <EyeOff size={15} /> : <Eye size={15} />}
      </button>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */
const getInitials = (name?: string | null): string => {
  if (!name) return '?';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const ReglagesPage = () => {
  const user           = useAuthStore((s) => s.user);
  const updateProfile  = useAuthStore((s) => s.updateProfile);
  const updatePassword = useAuthStore((s) => s.updatePassword);
  const updateImage    = useAuthStore((s) => s.updateImage);

  /* Photo */
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [photoMsg, setPhotoMsg] = useState<{ type: 'success' | 'danger'; text: string } | null>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setPhotoMsg({ type: 'danger', text: 'Veuillez sélectionner une image.' });
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      setPhotoMsg({ type: 'danger', text: 'Image trop lourde (max 2 Mo).' });
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      updateImage(reader.result as string);
      flash(setPhotoMsg, { type: 'success', text: 'Photo de profil mise à jour.' });
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  const handleRemovePhoto = () => {
    updateImage(null);
    flash(setPhotoMsg, { type: 'success', text: 'Photo supprimée.' });
  };

  /* Info */
  const [name,    setName   ] = useState(user?.name  ?? '');
  const [email,   setEmail  ] = useState(user?.email ?? '');
  const [infoMsg, setInfoMsg] = useState<{ type: 'success' | 'danger'; text: string } | null>(null);

  /* Mot de passe */
  const [currentPwd, setCurrentPwd] = useState('');
  const [newPwd,     setNewPwd    ] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [pwdMsg,     setPwdMsg    ] = useState<{ type: 'success' | 'danger'; text: string } | null>(null);

  const flash = (
    set: (v: { type: 'success' | 'danger'; text: string } | null) => void,
    msg: { type: 'success' | 'danger'; text: string }
  ) => { set(msg); setTimeout(() => set(null), 3000); };

  const handleSaveInfo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      flash(setInfoMsg, { type: 'danger', text: "Le nom et l'email sont requis." });
      return;
    }
    updateProfile({ name: name.trim(), email: email.trim() });
    flash(setInfoMsg, { type: 'success', text: 'Informations mises à jour.' });
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?.password) {
      flash(setPwdMsg, { type: 'danger', text: 'Impossible de vérifier le mot de passe actuel.' });
      return;
    }
    if (currentPwd !== user.password) {
      flash(setPwdMsg, { type: 'danger', text: 'Mot de passe actuel incorrect.' });
      return;
    }
    if (newPwd.length < 6) {
      flash(setPwdMsg, { type: 'danger', text: 'Le nouveau mot de passe doit contenir au moins 6 caractères.' });
      return;
    }
    if (newPwd !== confirmPwd) {
      flash(setPwdMsg, { type: 'danger', text: 'Les mots de passe ne correspondent pas.' });
      return;
    }
    updatePassword(newPwd);
    setCurrentPwd(''); setNewPwd(''); setConfirmPwd('');
    flash(setPwdMsg, { type: 'success', text: 'Mot de passe mis à jour.' });
  };

  return (
    <div className='container-fluid p-4'>
      <h4 className='mb-4'>Réglages</h4>
      <Row className='g-4'>

        {/* Photo de profil */}
        <Col xs='12'>
          <Card>
            <CardBody>
              <h6 className='mb-3 f-w-600'>Photo de profil</h6>
              <div className='d-flex align-items-center gap-4 flex-wrap'>
                {user?.image ? (
                  <Image
                    src={user.image}
                    alt='Photo de profil'
                    width={90}
                    height={90}
                    className='rounded-circle'
                    style={{ objectFit: 'cover' }}
                    unoptimized
                  />
                ) : (
                  <div
                    style={{
                      width: 90,
                      height: 90,
                      borderRadius: '50%',
                      background: 'var(--theme-default, #7366ff)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 28,
                      fontWeight: 700,
                      color: '#fff',
                      flexShrink: 0,
                    }}
                  >
                    {getInitials(user?.name)}
                  </div>
                )}
                <div className='d-flex flex-column gap-2'>
                  <input
                    ref={fileInputRef}
                    type='file'
                    accept='image/*'
                    className='d-none'
                    onChange={handlePhotoChange}
                  />
                  <Button color='primary' size='sm' onClick={() => fileInputRef.current?.click()}>
                    <Camera size={14} className='me-1' />
                    {user?.image ? 'Changer la photo' : 'Ajouter une photo'}
                  </Button>
                  {user?.image && (
                    <Button color='danger' outline size='sm' onClick={handleRemovePhoto}>
                      <Trash2 size={14} className='me-1' />
                      Supprimer
                    </Button>
                  )}
                  <small className='text-muted'>JPG, PNG, GIF — max 2 Mo</small>
                </div>
              </div>
              {photoMsg && <Alert color={photoMsg.type} className='py-2 mt-3 mb-0'>{photoMsg.text}</Alert>}
            </CardBody>
          </Card>
        </Col>

        {/* Informations du compte */}
        <Col lg='6'>
          <Card className='h-100'>
            <CardBody>
              <h6 className='mb-3 f-w-600'>Informations du compte</h6>
              <Form onSubmit={handleSaveInfo}>
                <FormGroup>
                  <Label for='reg-name'>Nom affiché</Label>
                  <Input
                    id='reg-name'
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Votre nom'
                  />
                </FormGroup>
                <FormGroup>
                  <Label for='reg-email'>Adresse e-mail</Label>
                  <Input
                    id='reg-email'
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='votre@email.com'
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Rôle</Label>
                  <Input type='text' value={user?.role ?? ''} disabled style={{ opacity: 0.6, cursor: 'not-allowed' }} />
                </FormGroup>
                {infoMsg && <Alert color={infoMsg.type} className='py-2'>{infoMsg.text}</Alert>}
                <Button color='primary' type='submit'>Enregistrer</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>

        {/* Changement de mot de passe */}
        <Col lg='6'>
          <Card className='h-100'>
            <CardBody>
              <h6 className='mb-3 f-w-600'>Changer le mot de passe</h6>
              <Form onSubmit={handleChangePassword}>
                <FormGroup>
                  <Label for='pwd-current'>Mot de passe actuel</Label>
                  <PasswordInput id='pwd-current' value={currentPwd} onChange={setCurrentPwd} placeholder='••••••••' />
                </FormGroup>
                <FormGroup>
                  <Label for='pwd-new'>Nouveau mot de passe</Label>
                  <PasswordInput id='pwd-new' value={newPwd} onChange={setNewPwd} placeholder='••••••••' />
                  <small className='text-muted'>Minimum 6 caractères.</small>
                </FormGroup>
                <FormGroup>
                  <Label for='pwd-confirm'>Confirmer le mot de passe</Label>
                  <PasswordInput id='pwd-confirm' value={confirmPwd} onChange={setConfirmPwd} placeholder='••••••••' />
                </FormGroup>
                {pwdMsg && <Alert color={pwdMsg.type} className='py-2'>{pwdMsg.text}</Alert>}
                <Button color='primary' type='submit'>Mettre à jour</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>

      </Row>
    </div>
  );
};

export default ReglagesPage;
