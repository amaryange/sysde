import React, { useState } from 'react';
import { Alert, Button, Card, CardBody, CardHeader, Col } from 'reactstrap';
import CommonAlert from './Common/CommonAlert';
import { AlertWithIconsData } from '@/Data/UiKitsData/Alert/AlertWithIconsData';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { AlertWithIcon } from '@/Constant';
import { Clock } from 'react-feather';

const AlertWithIcons = () => {
  const [Open, setOpen] = useState(true);
  const Toggle = () => setOpen(!Open);

  return (
    <Col sm='12' xl='6'>
      <Card className='height-equal' style={{ minHeight: '708px' }}>
        <CardHeaderCommon title={AlertWithIcon} description={'Just add Any icon before text'} />
        <CardBody>
          <Alert className='alert-dismissible' color='primary dark' isOpen={Open} target='Alert-1'>
            <Button close color='default' id='Alert-1' onClick={Toggle}></Button>
            {<Clock />}
            <p>
              <strong></strong>You can check in on some of those fields below.
            </p>
          </Alert>
          {AlertWithIconsData.map((data,i) => (
            <CommonAlert key={i} item={data} />
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default AlertWithIcons;
