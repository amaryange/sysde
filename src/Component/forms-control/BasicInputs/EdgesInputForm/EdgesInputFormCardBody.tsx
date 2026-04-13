import { Row, Col, CardBody, Form, FormGroup, Label, Input } from 'reactstrap';
import EdgesInputFormCardFooter from './EdgesInputFormCardFooter';
import CommonSelectBox from '../../Common/CommonSelectBox';
import CommonMultipleSelectBox from '../../Common/CommonMultipleSelectBox';
import { EmailAddress, ExampleTextarea, Password } from '@/Constant';

const EdgesInputFormCardBody = () => {
  return (
    <Form className='theme-form'>
      <CardBody>
        <Row>
          <Col>
            <FormGroup>
              <Label>{EmailAddress}</Label>
              <Input className='btn-pill' type='email' placeholder='name@example.com' />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>{Password}</Label>
              <Input className='btn-pill' type='password' placeholder='Password' />
            </FormGroup>
          </Col>
        </Row>
        <CommonSelectBox inputId='exampleFormControlSelect7' inputClassName='btn-pill digits' />
        <CommonMultipleSelectBox inputClassName='btn-pill digits' />
        <Row>
          <Col>
            <FormGroup className='mb-0'>
              <Label htmlFor='exampleFormControlTextarea9'>{ExampleTextarea}</Label>
              <Input type='textarea' className='btn-pill' rows='3' />
            </FormGroup>
          </Col>
        </Row>
      </CardBody>
      <EdgesInputFormCardFooter />
    </Form>
  );
};
export default EdgesInputFormCardBody;
