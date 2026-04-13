import React from 'react';
import { Card, CardBody, Col, Progress } from 'reactstrap';
import { ProgressBarsStriped } from '../../../../Constant';
import { StripedData } from '@/Data/UiKitsData/ProgressBarData';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { StripedDescription } from '@/Data/CardHeaderCommonData';

const Striped = () => {
  return (
    <Card>
      <CardHeaderCommon title={ProgressBarsStriped} description={StripedDescription} />
      <CardBody className='progress-showcase row'>
        <Col>
          <Progress color='primary' value='10' striped={true} />
          {StripedData.map((element, index) => (
            <Progress key={index} color={element.color} value={element.value} striped={true} />
          ))}
        </Col>
      </CardBody>
    </Card>
  );
};

export default Striped;
