import React, { useState } from 'react';
import SweetAlert from 'sweetalert2';
import { AdvancedState } from '../../../Constant';
import { Col, Card, CardBody, Button } from 'reactstrap';

import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { AdvancedData } from '@/Data/BonusUiData/SweetAlertData';

const Advanced = () => {
  const [alert, setAlert] = useState(false);
  const DisplayAlert = (name: string) => {
    setAlert(true);

    if (name === 'advanceDanger') {
      SweetAlert.fire({
        title: 'Are you sure you want to do this?',
        cancelButtonText: 'Oh noez!',
        confirmButtonText: 'Aww yiss!',
        reverseButtons: true,
        showCancelButton: true,
      });
    }
    if (name === 'advanceInfo') {
      SweetAlert.fire({
        title: 'Write something here:',
        input: 'text',
      }).then((result) => {
        if (result.value) {
          SweetAlert.fire(`You typed: ${result.value}`);
        } else {
          SweetAlert.fire('You typed: null');
        }
      });
    }
    if (name === 'advanceWarning') {
      SweetAlert.fire({
        title: 'Are you sure you want to do this?',
        cancelButtonText: 'Oh noez!',
        confirmButtonText: 'Aww yiss!',
        reverseButtons: true,
        showCancelButton: true,
      });
    }
  };

  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={AdvancedState} />
        <CardBody className='btn-showcase'>
          {AdvancedData.map((item, i) => (
            <Button color={item.color} key={i} className={item.class} name={item.name} onClick={(e: any) => DisplayAlert(e.target.name)}>
              {item.title}
            </Button>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default Advanced;
