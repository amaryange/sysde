import React from 'react';
import { Alert, Card, CardBody, Col } from 'reactstrap';
import { OutlineAlertData } from '@/Data/UiKitsData/Alert';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { ThemeColorAlertDescription } from '@/Data/CardHeaderCommonData';

const ThemeColorAlert = () => {
  return (
    <Col sm='12' xl='6'>
      <Card>
        <CardHeaderCommon title='Theme Color Alerts' description={ThemeColorAlertDescription} />
        <CardBody>
          <Alert color='primary dark'>{'This is a info alert—check it out!'}</Alert>
          {OutlineAlertData.map((element, index) => (
            <Alert key={index} color={`${element.color} dark`}>
              {element.text}
            </Alert>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default ThemeColorAlert;
