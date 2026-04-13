import { Fast } from '@/Constant';
import React from 'react';
import { Card, Col, Input, Label } from 'reactstrap';

const VerTicalStyleFast = () => {
  return (
    <Col sm='6'>
      <Card>
        <div className='p-20 d-flex'>
          <div className='radio radio-secondary me-3'>
            <Input id='radio24' type='radio' name='radio1' value='option1' />
            <Label htmlFor='radio24'></Label>
          </div>
          <div className='flex-grow-1'>
            <h6 className='mt-0 mega-title-badge'>
              {Fast}
              <span className='badge badge-primary pull-right digits'>{'50 INR'}</span>
            </h6>
            <p>{'Estimated 1 Day Shipping ( Duties end tax may be due delivery )'}</p>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default VerTicalStyleFast;
