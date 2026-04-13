import { Row, Col, CardBody, Form, FormGroup, Label, Input } from 'reactstrap';
import FlateInputFormCardFooter from './FlateInputFormCardFooter';
import CommonSelectBox from '../../Common/CommonSelectBox';
import CommonMultipleSelectBox from '../../Common/CommonMultipleSelectBox';
import { EmailAddress, ExampleTextarea, Password } from '@/Constant';

const FlateInputFormCardBody = () => {
  return (
    <Form className='theme-form'>
      <CardBody>
        <Row>
          <Col>
            <FormGroup>
              <Label>{EmailAddress}</Label>
              <Input className='btn-square' type='email' placeholder='name@example.com' />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>{Password}</Label>
              <Input className='btn-square' type='password' placeholder='Password' />
            </FormGroup>
          </Col>
        </Row>
        <CommonSelectBox inputClassName='btn-square digits' />
        <CommonMultipleSelectBox inputClassName='btn-square digits' />
        <Row>
          <Col>
            <FormGroup className='mb-0'>
              <Label>{ExampleTextarea}</Label>
              <Input type='textarea' className='btn-square' rows='3' />
            </FormGroup>
          </Col>
        </Row>
      </CardBody>
      <FlateInputFormCardFooter />
    </Form>
  );
};
export default FlateInputFormCardBody;
