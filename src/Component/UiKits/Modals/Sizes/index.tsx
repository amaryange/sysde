import React, { useState } from 'react';
import { Button, Card, CardBody, Col } from 'reactstrap';
import CommonModal from '../common/modal';
import { LargeModal, SizesModal, SmallModal } from '@/Constant';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const SizesModals = () => {
  const [Large, setLarge] = useState(false);
  const [Small, setSmall] = useState(false);
  const LargeModalToggle = () => setLarge(!Large);
  const SmallModalToggle = () => setSmall(!Small);
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={SizesModal} />
        <CardBody className='btn-showcase'>
          <Button color='primary' onClick={LargeModalToggle}>
            {LargeModal}
          </Button>
          <CommonModal isOpen={Large} title={LargeModal} toggler={LargeModalToggle} size='lg'>
            ...
          </CommonModal>
          <Button color='primary' onClick={SmallModalToggle}>
            {SizesModal}
          </Button>
          <CommonModal isOpen={Small} title={SmallModal} toggler={SmallModalToggle} size='sm'>
            ...
          </CommonModal>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SizesModals;
