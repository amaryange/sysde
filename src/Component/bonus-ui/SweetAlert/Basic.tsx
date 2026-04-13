import React, { Fragment, useState } from 'react';
import { Col, Card, CardBody, Button } from 'reactstrap';
import SweetAlert from 'sweetalert2';
import { BasicSweetAlertData } from '@/Data/BonusUiData/SweetAlertData';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { BasicExamples } from '@/Constant';

const BasicComponent = () => {
  const [alert, setAlert] = useState(false);
  const DisplayAlert = (name: string) => {
    setAlert(true);
    if (name === 'basic') {
      SweetAlert.fire({ title: 'Hello world!' });
    }
    if (name === 'basicTitleAlert') {
      SweetAlert.fire({ title: 'Heres the title!', text: '...and heres the text!' });
    }
    if (name === 'basicSuccessAlert') {
      SweetAlert.fire({
        title: 'Good job!',
        text: 'You clicked the button!',
        icon: 'info',
      });
    }
    if (name === 'basicInfoAlert') {
      SweetAlert.fire({
        title: 'Click on either the button or outside the modal.',
      }).then((result: any) => {
        if (result.value) {
          SweetAlert.fire(`The returned value is: ${result.value}`);
        } else {
          SweetAlert.fire('The returned value is: null');
        }
      });
    }
    if (name === 'basicWarningAlert') {
      SweetAlert.fire({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover this imaginary file!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Ok',
        cancelButtonText: 'cancel',
        reverseButtons: true,
      }).then((result: any) => {
        if (result.value) {
          SweetAlert.fire('Deleted!', 'Your file has been deleted.', 'success');
        } else {
          SweetAlert.fire('Your imaginary file is safe!');
        }
      });
    }
  };

  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={BasicExamples} />
        <CardBody className='btn-showcase'>
          {BasicSweetAlertData.map((item, index) => (
            <Button key={index} color={item.color} className={item.class} name={item.name} onClick={(e: any) => DisplayAlert(e.target.name)}>
              {item.title}
            </Button>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicComponent;
