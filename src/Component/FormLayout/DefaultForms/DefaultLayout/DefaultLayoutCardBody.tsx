import { EmailAddress, Password } from '@/Constant';
import { Input, Label, FormGroup, Form, CardBody } from 'reactstrap';

const DefaultLayoutCardBody = () => {
  return (
    <CardBody>
      <Form className='theme-form'>
        <FormGroup>
          <Label className='col-form-label pt-0'>{EmailAddress}</Label>
          <Input type='email' placeholder='Enter email' />
          <small className='form-text text-muted'>We'll never share your email with anyone else.</small>
        </FormGroup>
        <FormGroup>
          <Label htmlFor='exampleInputPassword1'>{Password}</Label>
          <Input type='password' placeholder='Password' />
        </FormGroup>
        <div className='checkbox p-0'>
          <Input id='default-checkbox' type='checkbox' title='' />
          <Label className='mb-0' htmlFor='default-checkbox'>
            Remember my preference
          </Label>
        </div>
      </Form>
    </CardBody>
  );
};
export default DefaultLayoutCardBody;
