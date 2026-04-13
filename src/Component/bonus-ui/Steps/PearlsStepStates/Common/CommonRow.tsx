import { AccountInformation, BillingInformation, Confirmation } from '@/Constant';
import { CommonRowTypes } from '@/Type/SideBarType';
import { Row, Col } from 'reactstrap';

const CommonRow = (props: CommonRowTypes) => {
  return (
    <Row className='mb-5'>
      <Col xs='4' className={` u-pearl ${props.div1}`}>
        <div className='u-pearl-icon'>1</div>
        <span className='u-pearl-title'>{AccountInformation}</span>
      </Col>
      <Col xs='4' className={` u-pearl ${props.div2}`}>
        <div className='u-pearl-icon'>2</div>
        <span className='u-pearl-title'>{BillingInformation}</span>
      </Col>
      <Col xs='4' className={` u-pearl ${props.div3}`}>
        <div className='u-pearl-icon'>3</div>
        <span className='u-pearl-title'>{Confirmation}</span>
      </Col>
    </Row>
  );
};

export default CommonRow;
