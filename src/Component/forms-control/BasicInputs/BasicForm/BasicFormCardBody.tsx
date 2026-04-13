import { useForm } from 'react-hook-form';
import { CardBody, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import BasicFormCardFooter from './BasicFormCardFooter';
import CommonSelectBox from '../../Common/CommonSelectBox';
import CommonMultipleSelectBox from '../../Common/CommonMultipleSelectBox';
import { EmailAddress, ExampleTextarea, Password } from '@/Constant';

const BasicFormCardBody = () => {
  const { handleSubmit } = useForm();
  const onSubmit = () => {};
  return (
    <Form className='theme-form' onSubmit={handleSubmit(onSubmit)}>
      <CardBody>
        <Row>
          <Col>
            <FormGroup>
              <Label className='mb-2'>{EmailAddress}</Label>
              <Input type='email' placeholder='name@example.com' />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label className='mb-2'>{Password}</Label>
              <Input type='password' placeholder='Password' />
            </FormGroup>
          </Col>
        </Row>
        <CommonSelectBox inputClassName='digits' defaultValue='1' />
        <CommonMultipleSelectBox inputClassName='digits' defaultValue='1' />
        <Row>
          <Col>
            <Label>{ExampleTextarea}</Label>
            <Input type='textarea' rows='3' />
          </Col>
        </Row>
      </CardBody>
      <BasicFormCardFooter />
    </Form>
  );
};
export default BasicFormCardBody;
