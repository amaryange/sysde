import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { BasicModal } from '../../../../Constant';
import BasicBtn from './BasicButton';
import GridModal from './GridButton';
import ScrollBtn from './ScrollButton';
import TooltipModal from './Tooltip&Popover';
import VerticalBtn from './VerticalButton/VerticalBtn';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const BasicModals = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={BasicModal} />
        <CardBody className='btn-showcase'>
          <BasicBtn />
          <ScrollBtn />
          <VerticalBtn />
          <TooltipModal />
          <GridModal />
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicModals;
