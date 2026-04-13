import React from 'react';
import { Card, CardBody, Col, Progress } from 'reactstrap';
import { ProgressBarsAnimated } from '../../../../Constant';
import { AnimatedData } from '@/Data/UiKitsData/ProgressBarData';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { AnimatedDescription } from '@/Data/CardHeaderCommonData';

const Animated = () => {
  return (
    <Card>
      <CardHeaderCommon title={ProgressBarsAnimated} description={AnimatedDescription} />
      <CardBody className='progress-showcase row'>
        <Col>
          <Progress color='primary' value='10' animated={true} />
          {AnimatedData.map((element, index) => (
            <Progress key={index} color={element.color} value={element.value} animated={true} />
          ))}
        </Col>
      </CardBody>
    </Card>
  );
};

export default Animated;
