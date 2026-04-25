import { ReactNode } from 'react';
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap';
import { Button } from 'reactstrap';

type Props = {
  isOpen: boolean;
  toggle: () => void;
  title: ReactNode;
  children: ReactNode;
  /** Contenu personnalisé du pied — prend le dessus sur onSave/onCancel */
  footer?: ReactNode;
  /** Raccourci : génère un pied Save/Cancel standard */
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
  const resolvedFooter = footer ?? (
    onSave || onCancel ? (
      <div className='d-flex gap-2'>
        {onSave   && <Button color='primary' onClick={onSave}>{saveLabel}</Button>}
        {onCancel && <Button color='light'   onClick={onCancel}>{cancelLabel}</Button>}
      </div>
    ) : null
  );

  return (
    <Offcanvas direction='end' isOpen={isOpen} toggle={toggle} style={{ width }}>
      <OffcanvasHeader toggle={toggle}>{title}</OffcanvasHeader>
      <OffcanvasBody className='d-flex flex-column' style={{ overflowY: 'auto' }}>
        <div className='flex-grow-1'>{children}</div>
        {resolvedFooter && (
          <div className='pt-3 border-top mt-3'>{resolvedFooter}</div>
        )}
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default AppDrawer;
