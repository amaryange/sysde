import { Fragment } from 'react';
import CommonSelect2 from './common/CommonSelect2';
import { DangerSelect, InfoSelect, InverseSelect, PrimarySelect, SecondarySelect, SuccessSelect, WarningSelect } from '@/Constant';

const OutlineColor = () => {
  return (
    <Fragment>
      <CommonSelect2 tittle={PrimarySelect} className='form-control-primary btn-square' />
      <CommonSelect2 tittle={SecondarySelect} className='form-control-secondary btn-square' />
      <CommonSelect2 tittle={SuccessSelect} className='form-control-success btn-square' />
      <CommonSelect2 tittle={InfoSelect} className=' form-control-info btn-square' />
      <CommonSelect2 tittle={WarningSelect} className='form-control-warning btn-square' />
      <CommonSelect2 tittle={DangerSelect} className='form-control-danger btn-square' />
      <CommonSelect2 tittle={InverseSelect} className='form-control-inverse btn-square' />
    </Fragment>
  );
};
export default OutlineColor;
