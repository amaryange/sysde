import { NoShadow } from '@/Constant';
import { Fragment } from 'react';
import { Col } from 'reactstrap';

const NoShadows = () => {
  return (
    <Fragment>
      <Col xs={12}>
        <h6 className='sub-title '>{NoShadow}</h6>
      </Col>
      <Col sm='4'>
        <div className='shadow-none shadow-showcase p-25 text-center'>
          <h5 className='m-0 f-18'>{NoShadow}</h5>
        </div>
      </Col>
      <Col sm='4'>
        <div className='shadow-none shadow-showcase p-25 text-center'>
          <h5 className='m-0 f-18'>{NoShadow}</h5>
        </div>
      </Col>
      <Col sm='4'>
        <div className='shadow-none shadow-showcase p-25 text-center'>
          <h5 className='m-0 f-18'>{NoShadow}</h5>
        </div>
      </Col>
    </Fragment>
  );
};

export default NoShadows;
