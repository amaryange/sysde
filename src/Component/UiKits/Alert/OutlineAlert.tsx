import React from 'react';
import { Alert, Card, CardBody, CardHeader, Col } from 'reactstrap';
import { OutlineAlertData } from '@/Data/UiKitsData/Alert';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { OutlineAlerts } from '@/Constant';
import { OutlineAlertDescription } from '@/Data/CardHeaderCommonData';

const OutlineAlert = () => {
  return (
    <Col sm='12' xl='6'>
      <Card className='height-equal' style={{ minHeight: '708px' }}>
        <CardHeaderCommon title={OutlineAlerts} description={OutlineAlertDescription} />
        <CardBody>
          <Alert color='primary outline'>{'This is a info alert—check it out!'}</Alert>
          {OutlineAlertData.map((element) => (
            <Alert color={`${element.color} outline`}>{element.text}</Alert>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default OutlineAlert;
