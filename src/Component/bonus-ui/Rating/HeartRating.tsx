//@ts-nocheck
import React, { useState } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { HeartRating } from '@/Constant';
import Rating from 'react-rating';

const HeartRatingClass = () => {
  const [heart, setHeart] = useState(0);
  return (
    <Col md="6">
      <Card>
        <CardHeaderCommon title={HeartRating} />
        <CardBody>
          <Row className='rating'>
            <Col className='d-flex align-items-center gap-5'>
              <Rating initialRating={heart} emptySymbol='fa fa-heart-o fa-2x' fullSymbol='fa fa-heart fa-2x' onClick={(rate: number) => setHeart(rate)} />
              <h6 className='mb-0 text-end'>
                {'You Rated'} : {heart}
              </h6>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HeartRatingClass;
