import { CommonTooltipType } from '@/Type/SideBarType';
import React, { Fragment, useState } from 'react';
import { Button, Tooltip } from 'reactstrap';

const CommonTooltip = ({ item }: CommonTooltipType) => {
  const [tooltip, setTooltip] = useState(false);
  const toggle = () => setTooltip(!tooltip);

  return (
    <Fragment>
      <Button color='primary' id={'Tooltip-' + item.id}>
        {item.tooltip}
      </Button>
      <Tooltip placement={item.placement} isOpen={tooltip} target={'Tooltip-' + item.id} toggle={toggle}>
        {item.tooltip}
      </Tooltip>
    </Fragment>
  );
};

export default CommonTooltip;
