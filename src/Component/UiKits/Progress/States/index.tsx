import React from 'react';
import { Card, CardBody, Col, Progress } from 'reactstrap';
import { ProgressBarsStates } from '../../../../Constant';
import { StatesData } from '@/Data/UiKitsData/ProgressBarData';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const States = () => {
  return (
    <Card>
      <CardHeaderCommon title={ProgressBarsStates} description={'Use state utility classes to change the appearance of individual progress bars.'} />
      <CardBody className='progress-showcase row'>
        <Col>
          <Progress color='primary' value='25' />
          {StatesData.map((element, index) => (
            <Progress key={index} value={element.value} color={element.color} />
          ))}
        </Col>
      </CardBody>
    </Card>
  );
};

export default States;
