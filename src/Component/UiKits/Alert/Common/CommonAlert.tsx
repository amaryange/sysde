import { CommonAlertType } from '@/Type/SideBarType';
import React, { Fragment, useState } from 'react';
import { Alert, Button } from 'reactstrap';

const CommonAlert = ({ item, btnText }: CommonAlertType) => {
  const [Open, setOpen] = useState(true);
  const Toggle = () => setOpen(!Open);
  return btnText ? (
    <Alert className='alert-dismissible' color={item.alertColor} isOpen={Open} target={`Alert- + ${item.id}`}>
      {item.icon}
      <p>
        {'Your time Over after'} <b>{'5'}</b> {'minute'}
        <Button close color='transperant' id='Alert-1' onClick={Toggle}>
          {<span className={item.divCls}>{'dismiss'}</span>}
        </Button>
      </p>
    </Alert>
  ) : (
    <Alert className='alert-dismissible' color={item.alertColor} isOpen={Open} target={`Alert- + ${item.id}`} closeButton={true} id={`Alert- + ${item.id}`} onClick={Toggle} divCls={item.divCls}>
      {item.icon}
      <p>
        {item.alertText}
        <Button close color='transperant' id='Alert-1' onClick={Toggle}></Button>
      </p>
    </Alert>
  );
};

export default CommonAlert;
