import { AccountInformation, BillingInformation, Confirmation } from '@/Constant';
import { CardBody, Row, Col } from 'reactstrap';

const PearlCardBody = () => {
  return (
    <CardBody>
      <Row>
        <Col xs='4' className='u-pearl done'>
          <div className='u-pearl-icon'>
            <i className='icon-shopping-cart'></i>
          </div>
          <span className='u-pearl-title'>{AccountInformation}</span>
        </Col>
        <Col xs='4' className='u-pearl current '>
          <div className='u-pearl-icon'>
            <i className='icon-write'></i>
          </div>
          <span className='u-pearl-title'>{BillingInformation}</span>
        </Col>
        <Col xs='4' className='u-pearl '>
          <div className='u-pearl-icon'>
            <i className='icon-check'></i>
          </div>
          <span className='u-pearl-title'>{Confirmation}</span>
        </Col>
      </Row>
    </CardBody>
  );
};

export default PearlCardBody;
