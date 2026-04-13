import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { HorizontalAlignment } from '@/Constant';
import { HorizontalAlignCardData } from '@/Data/UiKitsData/Grid/HorizontalAlignCardData';

const HorizontalAlignCard = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={HorizontalAlignment} />
        <CardBody className='grid-showcase grid-align'>
          <p>{'Use flexbox alignment utilities to vertically and horizontally align columns.'}</p>
          <Row className='justify-content-start'>
            <Col xs='4'>
              <span>{'One of two columns'}</span>
            </Col>
            <Col xs='4'>
              <span>{'One of two columns'}</span>
            </Col>
          </Row>
          {HorizontalAlignCardData.map((element, index) => (
            <Row key={index} className={element.name}>
              {element.children.map((item, index) => (
                <Col key={index} xs='4'>
                  <span>{item}</span>
                </Col>
              ))}
            </Row>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default HorizontalAlignCard;
