import { HtmlContentTooltipType } from '@/Type/SideBarType';
import React, { Fragment, useState } from 'react';
import { Button, Tooltip } from 'reactstrap';

const HtmlContentTooltip = ({ item }: HtmlContentTooltipType) => {
  const [tooltip, setTooltip] = useState(false);
  const toggle = () => setTooltip(!tooltip);

  return (
    <Fragment>
      <Button color='primary' id={'Tooltip-' + item.id} onClick={toggle}>
        {item.btnText}
      </Button>
      <Tooltip placement={item.placement} isOpen={tooltip} target={'Tooltip-' + item.id}>
        {item.tooltip}
      </Tooltip>
    </Fragment>
  );
};

export default HtmlContentTooltip;
