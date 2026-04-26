'use client';

import { Modal, ModalBody, Button } from 'reactstrap';
import { Trash2 } from 'react-feather';

type Props = {
  isOpen:    boolean;
  message:   string;
  onConfirm: () => void;
  onCancel:  () => void;
};

const ConfirmDelete = ({ isOpen, message, onConfirm, onCancel }: Props) => (
  <Modal isOpen={isOpen} toggle={onCancel} centered size='sm'>
    <ModalBody className='text-center py-4 px-4'>
      <div className='d-flex justify-content-center mb-3'>
        <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(220,53,69,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Trash2 size={24} className='text-danger' />
        </div>
      </div>
      <h6 className='fw-semibold mb-2'>Confirmer la suppression</h6>
      <p className='text-muted small mb-4'>{message}</p>
      <div className='d-flex gap-2 justify-content-center'>
        <Button color='light' onClick={onCancel}>Annuler</Button>
        <Button color='danger' onClick={onConfirm}>Supprimer</Button>
      </div>
    </ModalBody>
  </Modal>
);

export default ConfirmDelete;
