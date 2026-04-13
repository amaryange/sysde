import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { OneColumnWidthCardData } from '@/Data/UiKitsData/Grid/ColumnWidthCardData';

const OneColumnWidthCard = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={'Setting one column width'} />
        <CardBody className='grid-showcase'>
          <p>{'Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column.'}</p>
          {OneColumnWidthCardData.map((element, index) => (
            <Row key={index}>
              {element.data.map((item, index) => (
                <Col key={index} className={item.name}>
                  <span>{item.text}</span>
                </Col>
              ))}
            </Row>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default OneColumnWidthCard;
