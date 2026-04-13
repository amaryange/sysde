import { CardHeaderComponentType } from '@/Type/SideBarType';
import React, { Fragment } from 'react';

const CardHeaderComponent = ({ title, subtitle, settingIcon }: CardHeaderComponentType) => {
  return (
    <div className='header-top d-sm-flex align-items-center'>
      <h5>{title}</h5>
      <div className='center-content'>
        <p className='d-flex align-items-center'>
          <i className='toprightarrow-primary fa fa-arrow-up me-2'></i>
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default CardHeaderComponent;
