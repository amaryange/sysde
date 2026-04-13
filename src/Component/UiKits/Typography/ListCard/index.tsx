import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { ListingTypography } from '../../../../Constant/index';
import OrderList from './OrderList';
import OrderListBold from './OrderListBold';
import IcoIconList from './IcoIconList';
import UnOrderList from './UnOrderList';
import FontAwesomeList from './FontAwesomeList';
import ThemFyList from './ThemFyList';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const ListCard = () => {
  return (
    <Col sm='12 listing'>
      <Card>
        <CardHeaderCommon title={ListingTypography} />
        <CardBody>
          <Row>
            <UnOrderList />
            <OrderList />
            <OrderListBold />
            <FontAwesomeList />
            <IcoIconList />
            <ThemFyList />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ListCard;
