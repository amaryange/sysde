import React, { useState } from 'react';
import { Button, Card, CardBody, Col, Popover, PopoverBody, PopoverHeader } from 'reactstrap';
import CommonPopover from '../common/CommonPopover';
import { HtmlContentsData } from '@/Data/UiKitsData/popover';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { HTMLContent } from '@/Constant';

const HtmlContents = () => {
  const [popover, setPopover] = useState(false);
  const Toggle = () => setPopover(!popover);
  const Popoverbody = (
    <>
      {'Just add'} <code>{"data-html='true'"}</code>
      {'attribute and you can purse'}
      <span style={{ marginLeft: '3px', marginRight: '3px' }}>
        <b>{'html'}</b>
      </span>
      {'code'}
    </>
  );
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={HTMLContent} description={'lorem ipsum dolor sit amet, consectetur adipisicing elit'} />
        <CardBody className='btn-showcase'>
          <Button color='primary' className='example-popover' id='Popover-8'>
            Popover on top
          </Button>
          <Popover placement='top' isOpen={popover} target='Popover-8' toggle={Toggle}>
            <PopoverHeader>Popover title</PopoverHeader>
            <PopoverBody>{Popoverbody}</PopoverBody>
          </Popover>
          {HtmlContentsData.map((popover) => {
            return <CommonPopover key={popover.id} item={popover} />;
          })}
        </CardBody>
      </Card>
    </Col>
  );
};

export default HtmlContents;
