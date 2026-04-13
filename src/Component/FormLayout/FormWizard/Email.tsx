import { ConfirmPassword, EmailAddress, Next, Password, Previous } from '@/Constant';
import { EmailTypes } from '@/Type/SideBarType';
import { Row, Col, Form, Label, Input, Button } from 'reactstrap';

const Emails = (props: EmailTypes) => {
  return (
    <Row>
      <Col sm='12'>
        <Form className='needs-validation' noValidate>
          <Row>
            <Col md='12 mb-3'>
              <Label htmlFor='exampleFormControlInput1'>{EmailAddress}</Label>
              <Input type='email' placeholder='name@example.com' />
              <div className='valid-feedback'>{'Looks good!'}</div>
            </Col>
            <Col md='12 mb-3'>
              <Label htmlFor='exampleInputPassword2'>{Password}</Label>
              <Input type='password' placeholder='Password' />
              <div className='valid-feedback'>{'Looks good!'}</div>
            </Col>
            <Col md='12 mb-3'>
              <Label htmlFor='exampleInputPassword2'>{ConfirmPassword}</Label>
              <Input type='password' placeholder='Password' />
              <div className='valid-feedback'>{'Looks good!'}</div>
            </Col>
            <Col>
              <Button color='primary' onClick={() => props.setGoSteps(props.goSteps - 1)}>
                {Previous}
              </Button>
              <Button color='primary' className='mx-2' onClick={() => props.setGoSteps(props.goSteps + 1)}>
                {Next}
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default Emails;
