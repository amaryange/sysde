import { Row, Col, CardBody, Form, FormGroup, Label, Input } from 'reactstrap';
import RaiseInputFormCardFooter from './RaiseInputFormCardFooter';
import CommonSelectBox from '../../Common/CommonSelectBox';
import CommonMultipleSelectBox from '../../Common/CommonMultipleSelectBox';
import { EmailAddress, ExampleTextarea, Password } from '@/Constant';

const RaiseInputFormCardBody = () => {
  return (
    <Form className='theme-form'>
      <CardBody>
        <Row>
          <Col>
            <FormGroup>
              <Label>{EmailAddress}</Label>
              <Input className='input-air-primary' type='email' placeholder='name@example.com' />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>{Password}</Label>
              <Input className='input-air-primary' type='password' placeholder='Password' />
            </FormGroup>
          </Col>
        </Row>
        <CommonSelectBox inputClassName='input-air-primary digits' />
        <CommonMultipleSelectBox inputClassName='input-air-primary digits' />
        <Row>
          <Col>
            <FormGroup className='mb-0'>
              <Label>{ExampleTextarea}</Label>
              <Input type='textarea' className='input-air-primary' rows='3' />
            </FormGroup>
          </Col>
        </Row>
      </CardBody>
      <RaiseInputFormCardFooter />
    </Form>
  );
};
export default RaiseInputFormCardBody;
