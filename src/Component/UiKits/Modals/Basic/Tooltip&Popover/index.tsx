import React, { Fragment, useState } from 'react';
import { Button, Tooltip } from 'reactstrap';
import CommonModal from '../../common/modal';
import { Javascript, ModalTitle, TooltipsAndPopovers } from '@/Constant';

const TooltipModal = () => {
  const [toolTipPopover, setToolTipPopover] = useState(false);
  const ToolTipPopoverModalToggle = () => setToolTipPopover(!toolTipPopover);
  const [tooltipBtn, setTooltipBtn] = useState(false);
  const toggleBtn = () => setTooltipBtn(!tooltipBtn);
  const [tooltipLink, setTooltipLink] = useState(false);
  const toggleLink = () => setTooltipLink(!tooltipLink);
  return (
    <Fragment>
      <Button color='primary' onClick={ToolTipPopoverModalToggle}>
        {TooltipsAndPopovers}
      </Button>
      <CommonModal isOpen={toolTipPopover} title={ModalTitle} toggler={ToolTipPopoverModalToggle}>
        <h5>{'Popover in a modal'}</h5>
        <p>
          {'This'}{' '}
          <button className='btn btn-primary popover-test' id='TooltipButtonExample'>
            {'button'}
          </button>{' '}
          {'triggers a popover on click.'}
        </p>
        <Tooltip placement='right' isOpen={tooltipBtn} target='TooltipButtonExample' toggle={toggleBtn}>
          This is button
        </Tooltip>
        <hr />
        <h5>{'Tooltips in a modal'}</h5>
        <p>
          <a className='tooltip-test' href={Javascript} id='TooltipLinkExample'>
            {'that link'}
          </a>{' '}
          {'have tooltips on hover.'}
        </p>
        <Tooltip placement='right' isOpen={tooltipLink} target='TooltipLinkExample' toggle={toggleLink}>
          This is Link
        </Tooltip>
      </CommonModal>
    </Fragment>
  );
};

export default TooltipModal;
