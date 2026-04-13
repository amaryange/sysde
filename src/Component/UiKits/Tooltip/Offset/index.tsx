import React, { useState } from 'react';
import { Button, Card, CardBody, Col, Tooltip } from 'reactstrap';
import OffsetTooltip from './OffsetsTooltip';
import { OffsetToTooltipData } from '@/Data/UiKitsData/Tooltip';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { Offsets } from '@/Constant';

const Offset = () => {
  const [tooltip, setTooltip] = useState(false);
  const toggle = () => setTooltip(!tooltip);

  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={Offsets} />
        <CardBody className='btn-showcase'>
          <Button color='primary' id='Tooltip-9' onClick={toggle}>
            20px 20px
          </Button>
          <Tooltip placement='top' isOpen={tooltip} target='Tooltip-9' toggle={toggle} offset={[20, 20]}>
            {'Tooltip title'}
          </Tooltip>
          {OffsetToTooltipData.map((item) => (
            <OffsetTooltip key={item.id} item={item} />
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default Offset;
