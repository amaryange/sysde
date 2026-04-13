import { Row } from 'reactstrap';
import { Col } from 'react-bootstrap';
import { AccountInformation, BillingInformation, Confirmation } from '@/Constant';

const CommonRow = ({ RowClass }: { RowClass: string }) => {
  return (
    <Row className={RowClass}>
      <Col xs='4' className='u-pearl done '>
        <span className='u-pearl-number'>1</span>
        <span className='u-pearl-title'>{AccountInformation}</span>
      </Col>
      <Col xs='4' className='u-pearl current '>
        <span className='u-pearl-number'>2</span>
        <span className='u-pearl-title'>{BillingInformation}</span>
      </Col>
      <Col xs='4' className='u-pearl '>
        <span className='u-pearl-number'>3</span>
        <span className='u-pearl-title'>{Confirmation}</span>
      </Col>
    </Row>
  );
};

export default CommonRow;
