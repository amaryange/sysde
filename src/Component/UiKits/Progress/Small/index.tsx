import React from 'react';
import { Card, CardBody, Col, Progress } from 'reactstrap';
import { SmallProgressBars } from '../../../../Constant';
import { SmallData } from '@/Data/UiKitsData/ProgressBarData';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { SmallDescription } from '@/Data/CardHeaderCommonData';

const Small = () => {
  return (
    <Card>
      <CardHeaderCommon title={SmallProgressBars} description={SmallDescription} />
      <CardBody className='progress-showcase row'>
        <Col>
          {SmallData.map((element, index) => (
            <Progress key={index} value={element.value} color={element.color} className='sm-progress-bar' />
          ))}
        </Col>
      </CardBody>
    </Card>
  );
};

export default Small;
