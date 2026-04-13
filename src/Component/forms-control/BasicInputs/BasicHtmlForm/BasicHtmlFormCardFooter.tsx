import React from 'react';
import { Button, CardFooter } from 'reactstrap';
import { Col } from 'react-bootstrap';
import { Cancel, Submit } from '@/Constant';

const BasicHtmlFormCardFooter = () => {
  return (
    <CardFooter>
      <Col sm='9' className=' offset-sm-3'>
        <Button color='primary' type='submit' className='me-2'>
          {Submit}
        </Button>
        <Button color='light' type='reset'>
          {Cancel}
        </Button>
      </Col>
    </CardFooter>
  );
};

export default BasicHtmlFormCardFooter;
