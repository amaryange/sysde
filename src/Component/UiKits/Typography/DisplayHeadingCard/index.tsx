import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { DisplayHeadings } from '../../../../Constant/index';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { DisplayHeadingCardDescription } from '@/Data/CardHeaderCommonData';

const DisplayHeadingCard = () => {
  const displayId = [1, 2, 3, 4];
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={DisplayHeadings} description={DisplayHeadingCardDescription} />
        <CardBody className='typography'>
          {displayId.map((item, index) => (
            <h1 key={index} className={`display-${item}`}>{`Display ${item}`}</h1>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default DisplayHeadingCard;
