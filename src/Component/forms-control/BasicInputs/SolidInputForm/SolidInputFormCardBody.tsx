import { Row, Col, CardBody, Form, FormGroup, Label, Input } from 'reactstrap';
import SolidInputFormCardFooter from './SolidInputFormCardFooter';
import CommonSelectBox from '../../Common/CommonSelectBox';
import CommonMultipleSelectBox from '../../Common/CommonMultipleSelectBox';
import { Disabled, EmailAddress, ExampleTextarea, Password } from '@/Constant';

const SolidInputFormCardBody = () => {
  return (
    <Form className='theme-form'>
      <CardBody>
        <Row>
          <Col>
            <FormGroup>
              <Label>{EmailAddress}</Label>
              <Input type='email' placeholder='name@example.com' />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>{Password}</Label>
              <Input type='password' placeholder='Password' />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>{Disabled}</Label>
              <Input type='text' disabled placeholder='Disabled' />
            </FormGroup>
          </Col>
        </Row>
        <CommonSelectBox inputClassName='digits' />
        <CommonMultipleSelectBox inputClassName='digits' />
        <Row>
          <Col>
            <FormGroup className='mb-0'>
              <Label>{ExampleTextarea}</Label>
              <Input type='textarea' rows='3' />
            </FormGroup>
          </Col>
        </Row>
      </CardBody>
      <SolidInputFormCardFooter />
    </Form>
  );
};
export default SolidInputFormCardBody;
