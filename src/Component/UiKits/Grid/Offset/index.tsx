import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { Offsets } from '../../../../Constant';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { OffSetData } from '@/Data/UiKitsData/Grid/OffSetData';

const OffsetCard = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={Offsets} />
        <CardBody className='grid-showcase'>
          <p>
            {'Move columns to the right using'} <code>{'.offset-md-*'}</code> {'classes. These classes increase the left margin of a column by'} <code>{'*'}</code> {'columns. For example,'} <code>{'.offset-md-4'}</code> {'moves'} <code>{'.col-md-4'}</code> {'over four columns.'}
          </p>
          {OffSetData.map((element, index) => (
            <Row key={index}>
              {element.data.map((item, index) => (
                <Col key={index} className={item.name ? item.name : ''} md={item.mdClass}>
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

export default OffsetCard;
