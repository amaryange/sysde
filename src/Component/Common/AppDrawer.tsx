'use client';

import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react';
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

  const panelRef      = useRef<HTMLDivElement>(null);
  const backdropRef   = useRef<HTMLDivElement>(null);
  const isMobileRef   = useRef(false);
  const mountedRef    = useRef(false); // miroir de mounted sans closure stale
  const drag          = useRef<{ x: number; y: number; t: number } | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const rafRef        = useRef<{ r1?: number; r2?: number }>({});

  // ── Mobile detection ─────────────────────────────────────────────────────────

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    isMobileRef.current = mq.matches;
    setIsMobile(mq.matches);
    const h = (e: MediaQueryListEvent) => { isMobileRef.current = e.matches; setIsMobile(e.matches); };
    mq.addEventListener('change', h);
    return () => mq.removeEventListener('change', h);
  }, []);

  // ── Helpers DOM ──────────────────────────────────────────────────────────────

  const hiddenTransform = () => isMobileRef.current ? 'translateY(100%)' : 'translateX(100%)';

  const setDomState = (open: boolean) => {
    const panel    = panelRef.current;
    const backdrop = backdropRef.current;
    if (!panel) return;
    panel.style.transition = `transform ${DURATION}ms cubic-bezier(0.25,0.46,0.45,0.94)`;
    panel.style.transform  = open ? 'translate(0,0)' : hiddenTransform();
    if (backdrop) {
      backdrop.style.transition = `opacity ${DURATION}ms ease`;
      backdrop.style.opacity    = open ? '1' : '0';
    }
  };

  const cancelRafs = () => {
    if (rafRef.current.r1) cancelAnimationFrame(rafRef.current.r1);
    if (rafRef.current.r2) cancelAnimationFrame(rafRef.current.r2);
  };

  // Réinitialise la position cachée puis déclenche l'animation d'entrée.
  // Double rAF : le 1er commit la position cachée dans le navigateur,
  // le 2e démarre la transition depuis cette position peinte.
  const animateIn = () => {
    cancelRafs();
    const panel    = panelRef.current;
    const backdrop = backdropRef.current;
    if (!panel) return;
    panel.style.transition = 'none';
    panel.style.transform  = hiddenTransform();
    if (backdrop) { backdrop.style.transition = 'none'; backdrop.style.opacity = '0'; }
    rafRef.current.r1 = requestAnimationFrame(() => {
      rafRef.current.r2 = requestAnimationFrame(() => setDomState(true));
    });
  };

  // ── isOpen → mount / unmount avec animation ──────────────────────────────────

  useEffect(() => {
    clearTimeout(closeTimerRef.current);

    if (isOpen) {
      if (!mountedRef.current) {
        // Première ouverture : monter le DOM.
        // L'animation est déclenchée par useLayoutEffect + useEffect [mounted].
        mountedRef.current = true;
        setMounted(true);
      } else {
        // Déjà monté (ex : fermeture interrompue) — ré-animer depuis la position cachée.
        animateIn();
      }
    } else {
      setDomState(false);
      closeTimerRef.current = setTimeout(() => {
        mountedRef.current = false;
        setMounted(false);
      }, DURATION);
    }

    return () => clearTimeout(closeTimerRef.current);
  }, [isOpen]);

  // Avant le premier paint : cacher le panel pour éviter le flash de contenu.
  useLayoutEffect(() => {
    if (!mounted) return;
    const panel    = panelRef.current;
    const backdrop = backdropRef.current;
    if (!panel) return;
    panel.style.transition = 'none';
    panel.style.transform  = hiddenTransform();
    if (backdrop) { backdrop.style.transition = 'none'; backdrop.style.opacity = '0'; }
  }, [mounted]);

  // Après le premier paint : démarrer la transition d'entrée.
  // useEffect s'exécute après le paint, donc le navigateur a déjà
  // rendu la position cachée — setDomState peut partir directement.
  useEffect(() => {
    if (!mounted) return;
    cancelRafs();
    rafRef.current.r1 = requestAnimationFrame(() => setDomState(true));
    return cancelRafs;
  }, [mounted]);

  // ── Drag handlers ────────────────────────────────────────────────────────────

  const onDragStart = (e: React.PointerEvent) => {
    const panel = panelRef.current;
    if (!panel) return;
    drag.current = { x: e.clientX, y: e.clientY, t: Date.now() };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    panel.style.transition = 'none';
    const backdrop = backdropRef.current;
    if (backdrop) backdrop.style.transition = 'none';
  };

  const onDragMove = (e: React.PointerEvent) => {
    const panel = panelRef.current;
    if (!drag.current || !panel) return;
    const delta = isMobileRef.current
      ? Math.max(0, e.clientY - drag.current.y)
      : Math.max(0, e.clientX - drag.current.x);
    panel.style.transform = isMobileRef.current
      ? `translateY(${delta}px)`
      : `translateX(${delta}px)`;
    const backdrop = backdropRef.current;
    if (backdrop) {
      const maxD = isMobileRef.current ? window.innerHeight * 0.6 : width * 0.8;
      backdrop.style.opacity = String(Math.max(0, 1 - delta / maxD));
    }
  };

  const onDragEnd = (e: React.PointerEvent) => {
    if (!drag.current) return;
    const elapsed  = Date.now() - drag.current.t;
    const delta    = isMobileRef.current
      ? Math.max(0, e.clientY - drag.current.y)
      : Math.max(0, e.clientX - drag.current.x);
    const velocity = elapsed > 0 ? delta / elapsed : 0;
    drag.current   = null;

    if (delta > CLOSE_PX || velocity > CLOSE_VEL) {
      setDomState(false);
      setTimeout(() => toggle(), DURATION);
    } else {
      setDomState(true);
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
