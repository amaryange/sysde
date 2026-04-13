import React, { useState } from 'react';
import { Button, Card, CardBody, Col, Tooltip } from 'reactstrap';
import { BasicTooltip, HoverMe, PopoverTitle } from '../../../../Constant';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const Basic = () => {
  const [basicToolTip, setBasicToolTip] = useState(false);
  const toggle = () => setBasicToolTip(!basicToolTip);
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={BasicTooltip} />
        <CardBody className='btn-showcase'>
          <Button color='primary' id='TooltipExample'>
            {HoverMe}
          </Button>
          <Tooltip placement='top' isOpen={basicToolTip} target='TooltipExample' toggle={toggle}>
            {PopoverTitle}
          </Tooltip>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Basic;
