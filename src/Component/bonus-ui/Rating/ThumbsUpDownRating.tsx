//@ts-nocheck
import React, { Fragment, useState } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import Rating from 'react-rating';
import { ThumbsUpDownRating } from '../../../Constant';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const ThumbsUpDownRatingClass = () => {
  const [thumbs, setThumbs] = useState(0);
  return (
    <Col md="6">
      <Card>
        <CardHeaderCommon title={ThumbsUpDownRating} />
        <CardBody>
          <Row className='rating'>
            <Col className='d-flex align-items-center gap-5'>
              <Rating initialRating={thumbs} emptySymbol='fa fa-thumbs-down fa-2x' fullSymbol='fa fa-thumbs-up fa-2x' onHover={(rate) => setThumbs(rate)} />
              <h6 className='mb-0 text-end'>
                {'You Rated'} : {thumbs}
              </h6>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ThumbsUpDownRatingClass;
