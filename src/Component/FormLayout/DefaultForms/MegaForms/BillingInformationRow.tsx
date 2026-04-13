import { FormGroup, Input } from 'reactstrap';

const BillingInformationRow = () => {
  return (
    <form className='form-inline theme-form gap-2'>
      <FormGroup className='mb-0'>
        <Input type='text' placeholder='Name On Card' />
      </FormGroup>
      <FormGroup className='mb-0'>
        <Input type='text' name='inputPassword' placeholder='Card Number' />
      </FormGroup>
      <FormGroup className='mb-0'>
        <Input type='text' name='inputPassword' placeholder='Zip Code' />
      </FormGroup>
    </form>
  );
};

export default BillingInformationRow;
