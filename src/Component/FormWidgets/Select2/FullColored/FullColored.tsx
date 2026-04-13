import { Fragment } from 'react';
import FullColorCommon from './common/FullColorCommon';
import { DangerSelect, InfoSelect, InverseSelect, PrimarySelect, SecondarySelect, SuccessSelect, WarningSelect } from '@/Constant';

const FullColored = () => {
  return (
    <Fragment>
      <FullColorCommon label={PrimarySelect} className='form-control-primary-fill' />
      <FullColorCommon label={SecondarySelect} className='form-control-secondary-fill' />
      <FullColorCommon label={SuccessSelect} className='form-control-success-fill' />
      <FullColorCommon label={InfoSelect} className='form-control-info-fill' />
      <FullColorCommon label={WarningSelect} className='form-control-warning-fill' />
      <FullColorCommon label={DangerSelect} className='form-control-Danger-fill' />
      <FullColorCommon label={InverseSelect} className='form-control-inverse-fill' />
    </Fragment>
  );
};
export default FullColored;
