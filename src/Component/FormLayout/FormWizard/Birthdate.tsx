import { DD, MM, Previous, Submit, YY } from '@/Constant';
import { BirthDateTypes } from '@/Type/SideBarType';
import { Row, Col, Form, Label, Input, Button } from 'reactstrap';

const Birthdate = (props: BirthDateTypes) => {
  const submitFun = () => {
    alert('successfully updated');
  };
  return (
    <Row>
      <Col sm='12'>
        <Form className='needs-validation' noValidate>
          <Row>
            <Col md='12 mb-3'>
              <Label>{DD}</Label>
              <Input type='number' placeholder='DD' required />
              <div className='valid-feedback'>{'Looks good!'}</div>
            </Col>
            <Col md='12 mb-3'>
              <Label>{MM}</Label>
              <Input type='number' placeholder='MM' required />
              <div className='valid-feedback'>{'Looks good!'}</div>
            </Col>
            <Col md='12 mb-3'>
              <Label>{YY}</Label>
              <Input type='number' placeholder='YY' required />
              <div className='valid-feedback'>{'Looks good!'}</div>
            </Col>
          </Row>
          <Button color='primary' onClick={() => props.setGoSteps(props.goSteps - 1)}>
            {Previous}
          </Button>
          <Button color='primary' className='mx-2' onClick={submitFun}>
            {Submit}
          </Button>
        </Form>
      </Col>
    </Row>
  );
};
export default Birthdate;
