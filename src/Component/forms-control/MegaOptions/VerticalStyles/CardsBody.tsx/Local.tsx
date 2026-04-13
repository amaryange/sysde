import { Free, Local } from '@/Constant';
import React from 'react';
import { Card, Col, Input, Label } from 'reactstrap';

const VerticalStyleLocal = () => {
  return (
    <Col sm='6'>
      <Card>
        <div className='p-20 d-flex'>
          <div className='radio radio-info me-3'>
            <Input id='radio5' type='radio' name='radio1' value='option1' />
            <Label htmlFor='radio5'></Label>
          </div>
          <div className='flex-grow-1'>
            <h6 className='mt-0 mega-title-badge'>
              {Local} <span className='badge badge-info pull-right digits'>{Free}</span>
            </h6>
            <p>{'Estimated 15 Day Shipping ( Duties end taxes may be due upon delivery )'}</p>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default VerticalStyleLocal;
