import { Button, Form, FormGroup, Input } from 'reactstrap';
import { Login } from '../../../../Constant';

const FormWithoutLabel = () => {
  return (
    <Form className='row row-cols-sm-3 theme-form mt-3 form-bottom'>
      <FormGroup className='mb-3 d-flex'>
        <Input type='text' name='inputUnlabelUsername' placeholder='Username' autoComplete='off' />
      </FormGroup>
      <FormGroup className='mb-3 d-flex'>
        <Input type='password' name='inputPassword' placeholder='Password' autoComplete='off' />
      </FormGroup>
      <FormGroup className='mb-3'>
        <Button color='secondary' type='reset'>
          {Login}
        </Button>
      </FormGroup>
    </Form>
  );
};

export default FormWithoutLabel;
