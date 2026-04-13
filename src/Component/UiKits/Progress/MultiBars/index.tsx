import React from 'react';
import { Card, CardBody, Col, Progress } from 'reactstrap';
import { MultipleBars } from '../../../../Constant';
import { MultiBarsData } from '@/Data/UiKitsData/ProgressBarData';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const MultiBars = () => {
  return (
    <Card>
      <CardHeaderCommon title={MultipleBars} description="'Include multiple progress bars in a progress component if you need.'" />
      <CardBody className='progress-showcase row'>
        <Col>
          {MultiBarsData.map((element, index) => (
            <Progress key={index} multi={true}>
              {element.data.map((element, index) => (
                <Progress key={index} bar={true} color={element.color} value={element.value} />
              ))}
            </Progress>
          ))}
        </Col>
      </CardBody>
    </Card>
  );
};

export default MultiBars;
