import { Login, Password, Username } from '@/Constant';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

const FormWithLabel = () => {
  return (
    <Form className='row form-inline theme-form mt-3'>
      <FormGroup className='col-xxl-4 mb-3 d-flex'>
        <Label className='col-form-label pe-2'>{Username}</Label>
        <Input type='text' name='inputUsername' placeholder='Username' autoComplete='off' />
      </FormGroup>
      <FormGroup className='col-xxl-4 mb-3 d-flex'>
        <Label className='col-form-label pe-2'>{Password}</Label>
        <Input type='password' name='inputPassword' placeholder='Password' autoComplete='off' />
      </FormGroup>
      <FormGroup className='col-xxl-4 mb-3 d-flex'>
        <Button color='primary' type='reset'>
          {Login}
        </Button>
      </FormGroup>
    </Form>
  );
};

export default FormWithLabel;
