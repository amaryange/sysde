import React from 'react';
import { Card, CardBody, Col, Progress } from 'reactstrap';
import { BasicProgressBars } from '../../../../Constant';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { BasicData } from '@/Data/UiKitsData/ProgressBarData';
const Basic = () => {
  return (
    <Card>
      <CardHeaderCommon title={BasicProgressBars} description={'Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.'} />
      <CardBody className='progress-showcase row'>
        <Col>
          <Progress value='0' />
          {BasicData.map((element, index) => (
            <Progress key={index} color={element.color} value={element.value} />
          ))}
        </Col>
      </CardBody>
    </Card>
  );
};

export default Basic;
