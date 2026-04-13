import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { Headings } from '../../../../Constant/index';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const FadedHeadingCard = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={Headings} description={'Use the included utility classNames to recreate the small secondary heading text.'} />
        <CardBody className='typography'>
          <h3>
            {'Fancy display heading'}
            <small className='text-muted'>{'With faded secondary text'}</small>
          </h3>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FadedHeadingCard;
