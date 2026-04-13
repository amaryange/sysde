import React from 'react';
import { Container, Row } from 'reactstrap';
import ZeroConfiguration from './ZeroConfigTables';
import StateSaving from './StateSaving';
import ScrollVerticalDynamicHeight from './ScrollVerticalDynamicHeight';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';

const BasicInIt = () => {
  return (
    <>
      <Breadcrumbs parent='Data Table' title='Basic Data Tables' mainTitle='Basic Data Tables' />
      <Container fluid>
        <Row>
          <ZeroConfiguration />
          <StateSaving />
          <ScrollVerticalDynamicHeight />
        </Row>
      </Container>
    </>
  );
};

export default BasicInIt;
