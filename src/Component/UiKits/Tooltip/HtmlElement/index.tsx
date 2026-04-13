import React, { useState } from 'react';
import { Button, Card, CardBody, Col, Tooltip } from 'reactstrap';
import HtmlContentTooltip from './HtmlContentTooltip';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { ToolTipDirectionsData } from '@/Data/UiKitsData/Tooltip';
import { HTMLElements } from '@/Constant';

const HtmlElement = () => {
  const [tooltip, setTooltip] = useState(false);
  const toggle = () => setTooltip(!tooltip);
  const tooltips = (
    <>
      {'Tooltip'} <b>with</b> <code>HTML</code>
    </>
  );

  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={HTMLElements} />
        <CardBody className='btn-showcase'>
          <Button color='primary' id='Tooltip-5' onClick={toggle}>
            Click me
          </Button>
          <Tooltip placement='top' isOpen={tooltip} target='Tooltip-5'>
            {tooltips}
          </Tooltip>
          {ToolTipDirectionsData.map((item) => (
            <HtmlContentTooltip key={item.id} item={item} />
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default HtmlElement;
