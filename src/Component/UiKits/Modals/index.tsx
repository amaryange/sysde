import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import BasicModals from './Basic';
import SizesModals from './Sizes';
import StaticModal from './Staic';
import VaryingContent from './VaryingContent';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';

const Modals = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle='Modal' parent='Ui Kits' title='Modal' />
      <Container fluid={true}>
        <Row>
          <StaticModal />
          <BasicModals />
          <VaryingContent />
          <SizesModals />
        </Row>
      </Container>
    </Fragment>
  );
};

export default Modals;
