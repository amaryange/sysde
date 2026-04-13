import React, { Fragment, useState } from 'react';
import { Button, Tooltip } from 'reactstrap';
import { OffsetTooltipType } from '@/Type/SideBarType';

const OffsetTooltip = ({ item }: OffsetTooltipType) => {
  const [tooltip, setTooltip] = useState(false);
  const toggle = () => setTooltip(!tooltip);
  const tooltips = (
    <>
      {'Tooltip'} <b>with</b> <code>HTML</code>
    </>
  );
  return (
    <Fragment>
      <Button color='primary' id={'Tooltip-' + item.id} onClick={toggle}>
        {item.btnText}
      </Button>
      <Tooltip placement={item.placement} isOpen={tooltip} target={'Tooltip-' + item.id} toggle={toggle} offset={item.offset}>
        {tooltips}
      </Tooltip>
    </Fragment>
  );
};

export default OffsetTooltip;
