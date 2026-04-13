import { LargerShadow } from '@/Constant';
import { Fragment } from 'react';
import { Col } from 'reactstrap';

const LargeShadows = () => {
  return (
    <Fragment>
      <Col xs='12'>
        <h6 className='sub-title '>{LargerShadow}</h6>
      </Col>
      <Col sm='4'>
        <div className='shadow-lg p-25 shadow-showcase text-center'>
          <h5 className='m-0 f-18'>{LargerShadow}</h5>
        </div>
      </Col>
      <Col sm='4'>
        <div className='shadow-lg p-25 shadow-showcase text-center'>
          <h4 className='m-0 f-18'>{LargerShadow}</h4>
        </div>
      </Col>
      <Col sm='4'>
        <div className='shadow-lg p-25 shadow-showcase text-center'>
          <h3 className='m-0 f-18'>{LargerShadow}</h3>
        </div>
      </Col>
    </Fragment>
  );
};

export default LargeShadows;
