import { Row } from 'reactstrap';
import { Col } from 'react-bootstrap';
import { CommonRow2 } from '@/Type/SideBarType';
import { Billing, Getting, Shopping } from '@/Constant';

const CommonRow = (props: CommonRow2) => {
  return (
    <Row className={`u-steps ${props.RowClass} `}>
      <Col md='4' className='u-step'>
        <span className='u-step-icon icon wb-shopping-cart'></span>
        <div className='u-step-desc'>
          <span className='u-step-title'>{Shopping}</span>
        </div>
      </Col>
      <Col md='4' className='u-step current'>
        <span className='u-step-icon icon wb-pluse'></span>
        <div className='u-step-desc'>
          <span className='u-step-title'>{Billing}</span>
        </div>
      </Col>
      <Col md='4' className='u-step'>
        <span className='u-step-icon icon wb-time'></span>
        <div className='u-step-desc'>
          <span className='u-step-title'>{Getting}</span>
        </div>
      </Col>
    </Row>
  );
};

export default CommonRow;
