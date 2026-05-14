'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { Button } from 'reactstrap';

const DURATION  = 300;
const CLOSE_PX  = 100;
const CLOSE_VEL = 0.4;

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
  const [mounted,  setMounted ] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const panelRef    = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const closeTimer  = useRef<ReturnType<typeof setTimeout>>();
  const drag        = useRef<{ x: number; y: number; t: number } | null>(null);
  const isMobileRef = useRef(false);

  // ── Mobile detection ─────────────────────────────────────────────────────────

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    isMobileRef.current = mq.matches;
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => {
      isMobileRef.current = e.matches;
      setIsMobile(e.matches);
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // ── Animation helpers (DOM direct, pas de re-render) ────────────────────────

  const hiddenTransform = () => isMobileRef.current ? 'translateY(100%)' : 'translateX(100%)';

  const animateTo = (target: 'open' | 'closed') => {
    const panel    = panelRef.current;
    const backdrop = backdropRef.current;
    if (!panel) return;
    panel.style.transition    = `transform ${DURATION}ms cubic-bezier(0.25,0.46,0.45,0.94)`;
    panel.style.transform     = target === 'open' ? 'translate(0,0)' : hiddenTransform();
    if (backdrop) {
      backdrop.style.transition = `opacity ${DURATION}ms ease`;
      backdrop.style.opacity    = target === 'open' ? '1' : '0';
    }
  };

  // ── Mount / unmount avec animations ─────────────────────────────────────────

  useEffect(() => {
    clearTimeout(closeTimer.current);

    if (isOpen) {
      setMounted(true);
      // useEffect s'exécute après le paint — le panel est déjà rendu à
      // hiddenTransform(). On peut déclencher la transition directement.
    } else {
      // Déclencher l'animation de sortie sur le DOM avant de démonter
      animateTo('closed');
      closeTimer.current = setTimeout(() => setMounted(false), DURATION);
    }

    return () => clearTimeout(closeTimer.current);
  }, [isOpen]);

  // Après le mount, définir la position initiale puis animer l'entrée
  useEffect(() => {
    if (!mounted) return;
    const panel    = panelRef.current;
    const backdrop = backdropRef.current;
    if (!panel) return;
    // Poser la position de départ sans transition (avant le premier paint)
    panel.style.transition    = 'none';
    panel.style.transform     = hiddenTransform();
    if (backdrop) {
      backdrop.style.transition = 'none';
      backdrop.style.opacity    = '0';
    }
    // Déclencher la transition d'entrée après le paint initial
    const id = requestAnimationFrame(() => animateTo('open'));
    return () => cancelAnimationFrame(id);
  }, [mounted]);

  // ── Drag handlers (écriture directe sur le DOM, 0 re-render) ────────────────

  const onDragStart = (e: React.PointerEvent) => {
    const panel    = panelRef.current;
    const backdrop = backdropRef.current;
    if (!panel) return;
    drag.current = { x: e.clientX, y: e.clientY, t: Date.now() };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    // Désactiver la transition pendant le drag
    panel.style.transition = 'none';
    if (backdrop) backdrop.style.transition = 'none';
  };

  const onDragMove = (e: React.PointerEvent) => {
    const panel    = panelRef.current;
    const backdrop = backdropRef.current;
    if (!drag.current || !panel) return;
    const delta = isMobileRef.current
      ? Math.max(0, e.clientY - drag.current.y)
      : Math.max(0, e.clientX - drag.current.x);
    panel.style.transform = isMobileRef.current
      ? `translateY(${delta}px)`
      : `translateX(${delta}px)`;
    if (backdrop) {
      const maxD = isMobileRef.current ? window.innerHeight * 0.6 : width * 0.8;
      backdrop.style.opacity = String(Math.max(0, 1 - delta / maxD));
    }
  };

  const onDragEnd = (e: React.PointerEvent) => {
    if (!drag.current) return;
    const elapsed = Date.now() - drag.current.t;
    const delta   = isMobileRef.current
      ? Math.max(0, e.clientY - drag.current.y)
      : Math.max(0, e.clientX - drag.current.x);
    const velocity = elapsed > 0 ? delta / elapsed : 0;
    drag.current = null;

    if (delta > CLOSE_PX || velocity > CLOSE_VEL) {
      // Animer depuis la position actuelle du drag jusqu'à hors écran, puis toggle
      animateTo('closed');
      setTimeout(() => toggle(), DURATION);
    } else {
      // Revenir en position ouverte
      animateTo('open');
    }
  };

  const dragHandle = {
    onPointerDown:   onDragStart,
    onPointerMove:   onDragMove,
    onPointerUp:     onDragEnd,
    onPointerCancel: onDragEnd,
  };

  // ── Render ───────────────────────────────────────────────────────────────────

  const resolvedFooter = footer ?? (
    (onSave || onCancel) ? (
      <div className='d-flex gap-2'>
        {onSave   && <Button color='primary' onClick={onSave}>{saveLabel}</Button>}
        {onCancel && <Button color='light'   onClick={onCancel}>{cancelLabel}</Button>}
      </div>
    ) : null
  );

  if (!mounted) return null;

  // transform absent du style React — géré exclusivement via panelRef
  // pour éviter qu'un re-render n'écrase la position posée par animateTo()
  const panelStyle: React.CSSProperties = isMobile
    ? {
        position: 'fixed',
        left: 0, right: 0, bottom: 0,
        maxHeight: '90dvh',
        backgroundColor: '#fff',
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
        zIndex: 1045,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '-4px 0 24px rgba(0,0,0,0.12)',
      };

  return (
    <>
      {/* opacity géré exclusivement via backdropRef pour éviter les conflits re-render */}
      <div
        ref={backdropRef}
        onClick={toggle}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          opacity: 0,
          zIndex: 1040,
        }}
      />

      <div ref={panelRef} style={panelStyle}>

        {!isMobile && (
          <div
            {...dragHandle}
            style={{
              position: 'absolute',
              left: -20, top: '50%',
              transform: 'translateY(-50%)',
              width: 20, height: 56,
              backgroundColor: '#fff',
              borderRadius: '8px 0 0 8px',
              boxShadow: '-2px 2px 8px rgba(0,0,0,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'grab', touchAction: 'none', userSelect: 'none',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {[0, 1, 2].map((i) => (
                <div key={i} style={{ width: 3, height: 3, borderRadius: '50%', backgroundColor: '#9ca3af' }} />
              ))}
            </div>
          </div>
        )}

        {isMobile && (
          <div
            {...dragHandle}
            style={{
              display: 'flex', justifyContent: 'center',
              padding: '10px 0 4px',
              cursor: 'grab', touchAction: 'none', userSelect: 'none',
            }}
          >
            <div style={{ width: 36, height: 4, borderRadius: 2, background: '#d1d5db' }} />
          </div>
        )}

        <div
          {...dragHandle}
          className='d-flex align-items-center justify-content-between'
          style={{
            padding: '0.85rem 1.25rem',
            borderBottom: '1px solid #dee2e6',
            flexShrink: 0,
            cursor: 'grab', touchAction: 'none', userSelect: 'none',
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

        <div style={{ flex: 1, overflowY: 'auto', padding: '1.25rem' }}>
          {children}
        </div>

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
