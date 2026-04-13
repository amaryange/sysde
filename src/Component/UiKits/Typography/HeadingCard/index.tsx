import { Headings } from '@/Constant';
import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import HeadingTag from './HeadingTag';
import SubHeadings from './SubHeading';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { HeadingCardDescription } from '@/Data/CardHeaderCommonData';

const HeadingCard = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={Headings} description={HeadingCardDescription} />
        <CardBody className='typography'>
          <Row>
            <Col sm='12' xl='6'>
              <HeadingTag />
            </Col>
            <Col sm='12' xl='6'>
              <SubHeadings />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HeadingCard;
