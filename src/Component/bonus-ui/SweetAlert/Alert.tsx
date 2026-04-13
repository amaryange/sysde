import React, { useState } from 'react';
import SweetAlert from 'sweetalert2';
import { AlertState } from '../../../Constant';
import { Col, Card, CardBody, Button } from 'reactstrap';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { SweetAlertData } from '@/Data/BonusUiData/SweetAlertData';

const Alert = () => {
  const [alert, setAlert] = useState(false);

  const DisplayAlert = (name: string) => {
    setAlert(true);

    if (name === 'alertSuccess') {
      SweetAlert.fire({ title: 'Good job!', text: 'You clicked the button!', icon: 'success' });
    }
    if (name === 'alertDanger') {
      SweetAlert.fire({ title: 'Good job!', text: 'You clicked the button!', icon: 'error' });
    }
    if (name === 'alertInfo') {
      SweetAlert.fire({ title: 'Good job!', text: 'You clicked the button!', icon: 'info' });
    }
    if (name === 'alertWarning') {
      SweetAlert.fire({ title: 'Good job!', text: 'You clicked the button!', icon: 'warning' });
    }
  };

  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={AlertState} />
        <CardBody className='btn-showcase'>
          {SweetAlertData.map((item, index) => (
            <Button key={index} color={item.color} className={item.class} onClick={() => DisplayAlert(item.name)}>
              {item.title}
            </Button>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default Alert;
