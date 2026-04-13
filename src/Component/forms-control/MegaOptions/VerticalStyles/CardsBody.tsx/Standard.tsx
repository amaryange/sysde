import { Standard } from '@/Constant';
import React from 'react';
import { Card, Col, Input, Label } from 'reactstrap';

const VerticalStyleStandard = () => {
  return (
    <Col sm='6'>
      <Card>
        <div className='p-20 d-flex'>
          <div className='radio radio-success me-3'>
            <Input id='radio25' type='radio' name='radio1' value='option1' />
            <Label htmlFor='radio25'></Label>
          </div>
          <div className='flex-grow-1'>
            <h6 className='mt-0 mega-title-badge'>
              {Standard}
              <span className='badge badge-secondary pull-right digits'>{'80 INR'}</span>
            </h6>
            <p>{'Estimated 3 Day Shipping ( Duties end taxes may be due upon delivery )'}</p>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default VerticalStyleStandard;
