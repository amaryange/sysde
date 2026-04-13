import React from 'react';
import { Card, CardBody, Col, Progress } from 'reactstrap';
import { CustomHeightProgressBars } from '../../../../Constant';
import { CustomData } from '@/Data/UiKitsData/ProgressBarData';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { CustomDescription } from '@/Data/CardHeaderCommonData';

const Custom = () => {
  return (
    <Card>
      <CardHeaderCommon title={CustomHeightProgressBars} description={CustomDescription} />
      <CardBody className='progress-showcase row'>
        <Col>
          <Progress color='primary' value='25' className='xs-progress-bar' />
          {CustomData.map((element, index) => (
            <Progress key={index} value={element.value} color={element.color} className={element.name} />
          ))}
        </Col>
      </CardBody>
    </Card>
  );
};

export default Custom;
