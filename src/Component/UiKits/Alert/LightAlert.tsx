import React from 'react';
import { Alert, Card, CardBody, Col } from 'reactstrap';
import { LightAlertData } from '@/Data/UiKitsData/Alert/LightAlertData';
import { LightAlerts } from '@/Constant';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const LightAlert = () => {
  return (
    <Col sm='12' xl='6'>
      <Card>
        <CardHeaderCommon title={LightAlerts} description={'Alerts are available for any length of text, as well as an optional dismiss button.'} />
        <CardBody>
          <Alert color='primary'>{'This is a info alert—check it out!'}</Alert>
          {LightAlertData.map((element, index) => (
            <Alert key={index} color={element.color}>
              {element.text}
            </Alert>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default LightAlert;
