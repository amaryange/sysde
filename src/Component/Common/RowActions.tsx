'use client';

import { Button, UncontrolledTooltip } from 'reactstrap';
import { Eye, Edit2, Trash2 } from 'react-feather';

type Props = {
  prefix: string;
  id: number | string;
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
};

const btn: React.CSSProperties = {
  minWidth: 30,
  minHeight: 30,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
};

const RowActions = ({ prefix, id, onView, onEdit, onDelete }: Props) => (
  <div className='d-flex align-items-center justify-content-end gap-1'>
    {onView && (
      <>
        <Button id={`${prefix}-view-${id}`} color='light' size='sm' style={btn} onClick={onView}>
          <Eye size={14} />
        </Button>
        <UncontrolledTooltip target={`${prefix}-view-${id}`}>Consulter</UncontrolledTooltip>
      </>
    )}
    {onEdit && (
      <>
        <Button id={`${prefix}-edit-${id}`} color='light' size='sm' style={btn} onClick={onEdit}>
          <Edit2 size={14} />
        </Button>
        <UncontrolledTooltip target={`${prefix}-edit-${id}`}>Modifier</UncontrolledTooltip>
      </>
    )}
    {onDelete && (
      <>
        <Button id={`${prefix}-del-${id}`} color='light' size='sm' style={btn} onClick={onDelete}>
          <Trash2 size={14} className='text-danger' />
        </Button>
        <UncontrolledTooltip target={`${prefix}-del-${id}`}>Supprimer</UncontrolledTooltip>
      </>
    )}
  </div>
);

export default RowActions;
