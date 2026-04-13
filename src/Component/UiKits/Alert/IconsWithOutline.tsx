import React, { useState } from 'react';
import { Alert, Button, Card, CardBody, Col } from 'reactstrap';
import CommonAlert from './Common/CommonAlert';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { AlertWithIcon } from '@/Constant';
import { IconsWithOutlineData } from '@/Data/UiKitsData/Alert/IconsWithOutLineData';

const IconsWithOutline = () => {
  const [Open, setOpen] = useState(true);
  const Toggle = () => setOpen(!Open);

  return (
    <Col sm='12' xl='6'>
      <Card className='height-equal' style={{ minHeight: '708px' }}>
        <CardHeaderCommon title={AlertWithIcon} description={'Just add Any icon before text'} />
        <CardBody>
          <Alert className='alert-dismissible' color='primary outline' isOpen={Open} target='Alert-1'>
            <Button close color='default' id='Alert-1' onClick={Toggle}></Button>
            <p>
              <strong>Holy ! </strong>You can check in on some of those fields below.
            </p>
          </Alert>
          {IconsWithOutlineData.map((data,i) => (
            <CommonAlert key={i} item={data} />
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default IconsWithOutline;
