import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';

import ModalButton from './common/ModalButton';
import { VaryingModalContent } from '@/Constant';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const VaryingContent = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={VaryingModalContent} />
        <CardBody className='btn-showcase'>
          <ModalButton btnText='Open modal for @mdo' defaultVal='@fat' />
          <ModalButton btnText='Open modal for @fat' defaultVal='@Mat' />
          <ModalButton btnText='Open modal for @getbootstrap' defaultVal='@getbootstrap' />
        </CardBody>
      </Card>
    </Col>
  );
};

export default VaryingContent;
