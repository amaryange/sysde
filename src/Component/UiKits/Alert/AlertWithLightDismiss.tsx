import React, { useState } from 'react';
import { Alert, Button, Card, CardBody, Col } from 'reactstrap';
import CommonAlert from './Common/CommonAlert';
import { AlertWithLightDismissData } from '@/Data/UiKitsData/Alert/AlertWithLightDismiss';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { Dismissing } from '@/Constant';

const AlertWithLightDismiss = () => {
  const [Open, setOpen] = useState(true);
  const Toggle = () => setOpen(!Open);

  return (
    <Col sm='12' xl='6'>
      <Card className='height-equal' style={{ minHeight: '708px' }}>
        <CardHeaderCommon title={Dismissing} description='To animate alerts when dismissing them, be sure to add the .fade and .show classes.' />
        <CardBody>
          <Alert className='alert-dismissible' color='primary' isOpen={Open} target='Alert-1'>
            <Button close color='default' id='Alert-1' onClick={Toggle}></Button>
            <p>
              <strong>Holy ! </strong>You can check in on some of those fields below.
            </p>
          </Alert>
          {AlertWithLightDismissData.map((element,i) => (
            <CommonAlert key={i} item={element} />
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default AlertWithLightDismiss;
