import React, { useState } from 'react';
import { Button, Card, CardBody, Col, Popover, PopoverBody, PopoverHeader } from 'reactstrap';
import CommonPopover from '../common/CommonPopover';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { BasicPopoverData } from '@/Data/UiKitsData/popover';
import { BasicExamples } from '@/Constant';

const Basic = () => {
  const [popover, setPopover] = useState(false);
  const Toggle = () => setPopover(!popover);

  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={BasicExamples} description={'lorem ipsum dolor sit amet, consectetur adipisicing elit'} />
        <CardBody className='btn-showcase'>
          <Button color='primary' className='example-popover' id='Popover-1'>
            Click to toggle popover
          </Button>
          <Popover placement='right' isOpen={popover} target='Popover-1' toggle={Toggle}>
            <PopoverHeader>Popover title</PopoverHeader>
            <PopoverBody>And heres some amazing content. Its very engaging. Right?</PopoverBody>
          </Popover>
          {BasicPopoverData.map((popover) => (
            <CommonPopover key={popover.id} item={popover} />
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default Basic;
