import Breadcrumbs from '@/CommonComponents/BreadCrumb';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import React from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import Tickets from './Tickets';
import TicketTable from './TicketTable';

const SupportTicketContainer = () => {
  return (
    <>
      <Breadcrumbs parent='Support Ticket' title='Support Ticket' mainTitle='Support Ticket' />
      <Container fluid>
        <Row>
          <Col sm='12'>
            <Card>
              <CardHeaderCommon title='Support Ticket List' description={'List of ticket opend by customers'} />
              <CardBody>
                <Tickets />
                <TicketTable />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SupportTicketContainer;
