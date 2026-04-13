import React, { useState } from 'react';
import { Alert, Button, Card, CardBody, Col } from 'reactstrap';
import CommonAlert from './Common/CommonAlert';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { IconInverseData } from '@/Data/UiKitsData/Alert/IconInverse';
import { AlertWithIconInverse, Minute, YourTimeOverAfter } from '@/Constant';

const IconInverse = () => {
  const [Open, setOpen] = useState(true);
  const Toggle = () => setOpen(!Open);

  return (
    <Col sm='12' xl='6'>
      <Card className='height-equal' style={{ minHeight: '708px' }}>
        <CardHeaderCommon title={AlertWithIconInverse} description={'Just add Any icon before text'} />

        <CardBody>
          <Alert className='alert-dismissible' color='primary inverse' isOpen={Open} target='Alert-1'>
            <Button close color='default' id='Alert-1' onClick={Toggle}></Button>
            <i className='icon-timer'></i>
            <p>
              {YourTimeOverAfter}
              <b>5</b> {Minute}
            </p>
          </Alert>
          {IconInverseData.map((data,i) => (
            <CommonAlert key={i} item={data} />
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default IconInverse;
