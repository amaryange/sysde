'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { Button } from 'reactstrap';

const DURATION   = 300;
const CLOSE_PX   = 120;  // pixels avant fermeture automatique
const CLOSE_VEL  = 0.45; // px/ms — glisser rapide ferme même avant le seuil

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
  const [mounted,  setMounted ] = useState(isOpen);
  const [visible,  setVisible ] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [delta,    setDelta   ] = useState(0);
  const drag = useRef<{ x: number; y: number; t: number } | null>(null);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      const id = requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
      return () => cancelAnimationFrame(id);
    } else {
      setVisible(false);
      const t = setTimeout(() => setMounted(false), DURATION);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  if (!mounted) return null;

  // ── Drag handlers ────────────────────────────────────────────────────────────

  const onDragStart = (e: React.PointerEvent) => {
    drag.current = { x: e.clientX, y: e.clientY, t: Date.now() };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onDragMove = (e: React.PointerEvent) => {
    if (!drag.current) return;
    const d = isMobile
      ? Math.max(0, e.clientY - drag.current.y)  // bas seulement
      : Math.max(0, e.clientX - drag.current.x); // droite seulement
    setDelta(d);
  };

  const onDragEnd = () => {
    if (!drag.current) return;
    const elapsed  = Date.now() - drag.current.t;
    const velocity = elapsed > 0 ? delta / elapsed : 0;
    drag.current = null;
    setDelta(0);
    if (delta > CLOSE_PX || velocity > CLOSE_VEL) toggle();
  };

  const isDragging = delta > 0;

  // ── Styles ───────────────────────────────────────────────────────────────────

  const backdropOpacity = visible
    ? isDragging
      ? Math.max(0, 1 - delta / (isMobile ? window.innerHeight * 0.6 : width * 0.8))
      : 1
    : 0;

  const safeTransform = (() => {
    if (isMobile) return visible ? `translateY(${delta}px)` : 'translateY(100%)';
    return visible ? `translateX(${delta}px)` : 'translateX(100%)';
  })();

  const panelStyle: React.CSSProperties = isMobile
    ? {
        position: 'fixed',
        left: 0, right: 0, bottom: 0,
        maxHeight: '90dvh',
        backgroundColor: '#fff',
        transform: safeTransform,
        transition: isDragging ? 'none' : `transform ${DURATION}ms ease`,
        zIndex: 1045,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 -4px 24px rgba(0,0,0,0.14)',
        borderRadius: '16px 16px 0 0',
      }
    : {
        position: 'fixed',
        top: 0, right: 0, bottom: 0,
        width,
        backgroundColor: '#fff',
        transform: safeTransform,
        transition: isDragging ? 'none' : `transform ${DURATION}ms ease`,
        zIndex: 1045,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '-4px 0 24px rgba(0,0,0,0.12)',
      };

  const dragHandle = {
    onPointerDown : onDragStart,
    onPointerMove : onDragMove,
    onPointerUp   : onDragEnd,
    onPointerCancel: onDragEnd,
  };

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
          opacity: backdropOpacity,
          transition: isDragging ? 'none' : `opacity ${DURATION}ms ease`,
          zIndex: 1040,
        }}
      />

      {/* Panel */}
      <div style={panelStyle}>

        {/* Grip handle (desktop) — dépasse du bord gauche, miroir de la pill mobile */}
        {!isMobile && (
          <div
            {...dragHandle}
            style={{
              position: 'absolute',
              left: -20,
              top: '50%',
              transform: 'translateY(-50%)',
              width: 20,
              height: 56,
              backgroundColor: '#fff',
              borderRadius: '8px 0 0 8px',
              boxShadow: '-2px 2px 8px rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: isDragging ? 'grabbing' : 'grab',
              touchAction: 'none',
              userSelect: 'none',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  style={{ width: 3, height: 3, borderRadius: '50%', backgroundColor: '#9ca3af' }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Pill (mobile) — zone de drag principale */}
        {isMobile && (
          <div
            {...dragHandle}
            style={{
              display: 'flex',
              justifyContent: 'center',
              padding: '10px 0 4px',
              cursor: 'grab',
              touchAction: 'none',
              userSelect: 'none',
            }}
          >
            <div style={{ width: 36, height: 4, borderRadius: 2, background: '#d1d5db' }} />
          </div>
        )}

        {/* Header — zone de drag sur desktop ET mobile */}
        <div
          {...dragHandle}
          className='d-flex align-items-center justify-content-between'
          style={{
            padding: '0.85rem 1.25rem',
            borderBottom: '1px solid #dee2e6',
            flexShrink: 0,
            cursor: 'grab',
            touchAction: 'none',
            userSelect: 'none',
          }}
        >
          <span className='fw-semibold fs-6'>{title}</span>
          <button
            type='button'
            className='btn-close'
            aria-label='Fermer'
            onClick={(e) => { e.stopPropagation(); toggle(); }}
            onPointerDown={(e) => e.stopPropagation()}
            style={{ cursor: 'pointer' }}
          />
        </div>

        {/* Contenu scrollable */}
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
