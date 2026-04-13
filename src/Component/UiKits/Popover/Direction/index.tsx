import React, { useState } from 'react';
import { Button, Card, CardBody, Col, Popover, PopoverBody, PopoverHeader } from 'reactstrap';

import CommonPopover from '../common/CommonPopover';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { DirectionData } from '@/Data/UiKitsData/popover';
import { Direction } from '@/Constant';

const Directions = () => {
  const [popover, setPopover] = useState(false);
  const Toggle = () => setPopover(!popover);

  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={Direction} description='lorem ipsum dolor sit amet, consectetur adipisicing elit' />
        <CardBody className='btn-showcase'>
          <Button color='primary' className='example-popover' id='Popover-4'>
            Popover on top
          </Button>
          <Popover placement='top' isOpen={popover} target='Popover-4' toggle={Toggle}>
            <PopoverHeader>Popover title</PopoverHeader>
            <PopoverBody>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</PopoverBody>
          </Popover>
          {DirectionData.map((popover) => (
            <CommonPopover key={popover.id} item={popover} />
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default Directions;
