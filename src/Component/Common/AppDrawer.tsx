'use client';

import { ReactNode, useEffect, useState } from 'react';
import { Button } from 'reactstrap';

const DURATION = 300;

type Props = {
  isOpen: boolean;
  toggle: () => void;
  title: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  onSave?: () => void;
  onCancel?: () => void;
  saveLabel?: string;
  cancelLabel?: string;
  width?: number;
};

const AppDrawer = ({
  isOpen,
  toggle,
  title,
  children,
  footer,
  onSave,
  onCancel,
  saveLabel   = 'Enregistrer',
  cancelLabel = 'Annuler',
  width = 480,
}: Props) => {
  const [mounted, setMounted] = useState(isOpen);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      // double rAF : laisse le navigateur peindre le state initial (translateX 100%)
      // avant de déclencher la transition vers translateX(0)
      const id = requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
      return () => cancelAnimationFrame(id);
    } else {
      setVisible(false);
      const t = setTimeout(() => setMounted(false), DURATION);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  if (!mounted) return null;

  const resolvedFooter = footer ?? (
    (onSave || onCancel) ? (
      <div className='d-flex gap-2'>
        {onSave   && <Button color='primary' onClick={onSave}>{saveLabel}</Button>}
        {onCancel && <Button color='light'   onClick={onCancel}>{cancelLabel}</Button>}
      </div>
    ) : null
  );

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={toggle}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          opacity: visible ? 1 : 0,
          transition: `opacity ${DURATION}ms ease`,
          zIndex: 1040,
        }}
      />

      {/* Panneau */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width,
          backgroundColor: '#fff',
          transform: visible ? 'translateX(0)' : 'translateX(100%)',
          transition: `transform ${DURATION}ms ease`,
          zIndex: 1045,
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '-4px 0 24px rgba(0,0,0,0.12)',
        }}
      >
        {/* Header */}
        <div
          className='d-flex align-items-center justify-content-between'
          style={{ padding: '1rem 1.25rem', borderBottom: '1px solid #dee2e6', flexShrink: 0 }}
        >
          <span className='fw-semibold fs-6'>{title}</span>
          <button type='button' className='btn-close' onClick={toggle} aria-label='Fermer' />
        </div>

        {/* Body */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.25rem' }}>
          {children}
        </div>

        {/* Footer */}
        {resolvedFooter && (
          <div style={{ padding: '0.75rem 1.25rem', borderTop: '1px solid #dee2e6', flexShrink: 0 }}>
            {resolvedFooter}
          </div>
        )}
      </div>
    </>
  );
};

export default AppDrawer;
