import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { NestingColumn } from '../../../../Constant';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const NestingColCard = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={NestingColumn} />
        <CardBody className='grid-showcase'>
          <p>{'Use flexbox alignment utilities to vertically and horizontally align columns.'}</p>
          <Row>
            <Col sm='9'>
              <span>{'Level 1: .col-sm-9'}</span>
              <Row>
                <Col xs='8' sm='6'>
                  <span>{'Level 2: .col-8 .col-sm-6'}</span>
                </Col>
                <Col xs='4' sm='6'>
                  <span>{'Level 2: .col-4 .col-sm-6'}</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NestingColCard;
