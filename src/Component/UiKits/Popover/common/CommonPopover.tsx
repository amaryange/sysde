import { CommonPopoverType } from '@/Type/SideBarType';
import React, { useState } from 'react';
import { Button, Popover, PopoverBody, PopoverHeader } from 'reactstrap';

const CommonPopover = ({ item }: CommonPopoverType) => {
  const [popover, setPopover] = useState(false);
  const Toggle = () => setPopover(!popover);
  return (
    <>
      <Button color={item.btnColor} className='example-popover' id={`${'Popover-' + item.id}`}>
        {item.btnText}
      </Button>
      <Popover placement={item.placement} isOpen={popover} target={'Popover-' + item.id} toggle={Toggle} offset={item.offset} trigger={item.trigger}>
        <PopoverHeader>{item.PopoverHeader}</PopoverHeader>
        <PopoverBody>{item.PopoverBody}</PopoverBody>
      </Popover>
    </>
  );
};

export default CommonPopover;
