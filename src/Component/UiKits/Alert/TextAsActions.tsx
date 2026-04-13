import React, { useState } from 'react';
import { Alert, Button, Card, CardBody, Col } from 'reactstrap';
import CommonAlert from './Common/CommonAlert';
import { TextAsActionsData } from '@/Data/UiKitsData/Alert/TextAsActions';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { TextAsAction } from '@/Constant';
import { TextAsActionsDescription } from '@/Data/CardHeaderCommonData';

const TextAsActions = () => {
  const [Open, setOpen] = useState(true);
  const Toggle = () => setOpen(!Open);

  return (
    <Col sm='12' xl='6'>
      <Card className='height-equal' style={{ minHeight: '708px' }}>
        <CardHeaderCommon title={TextAsAction} description={TextAsActionsDescription} />
        <CardBody>
          <Alert className='alert-dismissible' color='primary inverse' isOpen={Open} target='Alert-1'>
            <Button close color='default' id='Alert-1' onClick={Toggle}></Button>
            <i className='icon-timer'></i>
            <p>
              Your time Over after <b>5</b> miniute
            </p>
          </Alert>
          {TextAsActionsData.map((data,i) => (
            <CommonAlert key={i} item={data} />
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default TextAsActions;
