import React from 'react';
import { Breadcrumb, Container, Row } from 'reactstrap';
import RowCreateCallback from './RowCreatingCallback';
import StockResult from './StockResult';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';

const AdvanceInIt = () => {
  return (
    <>
      <Breadcrumbs parent='Data Tables' title='Advanced Data Tables' mainTitle='Advanced Data Tables' />
      <Container fluid>
        <Row>
          <StockResult />
          <RowCreateCallback />
        </Row>
      </Container>
    </>
  );
};

export default AdvanceInIt;
