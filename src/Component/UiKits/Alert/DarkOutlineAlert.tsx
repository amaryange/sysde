import React from 'react';
import { Alert, Card, CardBody, Col } from 'reactstrap';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { DarkOutlineAlertData } from '@/Data/UiKitsData/Alert/DarkOutlineAlert';
import { OutlineDarkAlerts } from '@/Constant';
import { DarkOutlineAlertDescription } from '@/Data/CardHeaderCommonData';

const DarkOutlineAlert = () => {
  return (
    <Col sm='12' xl='6'>
      <Card className='height-equal' style={{ minHeight: '708px' }}>
        <CardHeaderCommon title={OutlineDarkAlerts} description={DarkOutlineAlertDescription} />
        <CardBody>
          <Alert color='primary outline-2x'>{'This is a info alert—check it out!'}</Alert>
          {DarkOutlineAlertData.map((element, index) => (
            <Alert key={index} color={`${element.color} outline-2x`}>
              {element.text}
            </Alert>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default DarkOutlineAlert;
