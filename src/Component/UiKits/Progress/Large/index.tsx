import React from 'react';
import { Card, CardBody, Col, Progress } from 'reactstrap';

import { LargeProgressBars } from '../../../../Constant';
import { LargeData } from '@/Data/UiKitsData/ProgressBarData';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { LargeDescription } from '@/Data/CardHeaderCommonData';

const Large = () => {
  return (
    <Card>
      <CardHeaderCommon title={LargeProgressBars} description={LargeDescription} />
      <CardBody className='progress-showcase row'>
        <Col>
          <Progress color='primary' value='25' className='lg-progress-bar' />
          {LargeData.map((element, index) => (
            <Progress key={index} value={element.value} color={element.color} className='lg-progress-bar' />
          ))}
        </Col>
      </CardBody>
    </Card>
  );
};

export default Large;
