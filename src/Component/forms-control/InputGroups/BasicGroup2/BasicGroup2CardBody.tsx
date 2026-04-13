import { FlatStyle, JointAddon, LeftAddon, LeftRightAddon, RaiseStyle, RightAddon, SolidStyle } from '@/Constant';
import { Form, FormGroup, Label, Input, InputGroup, InputGroupText } from 'reactstrap';

const BacicGroup2CardBody = () => {
  return (
    <Form>
      <FormGroup className=' m-form__group'>
        <Label>{LeftAddon}</Label>
        <InputGroup>
          <InputGroupText>
            <i className='icofont icofont-pencil-alt-5'></i>
          </InputGroupText>
          <Input type='text' placeholder='Email' />
        </InputGroup>
      </FormGroup>
      <FormGroup className=''>
        <Label>{RightAddon}</Label>
        <InputGroup>
          <Input type='text' placeholder="Recipient's username" />
          <InputGroupText>
            <i className='icofont icofont-ui-dial-phone'></i>
          </InputGroupText>
        </InputGroup>
      </FormGroup>
      <FormGroup className=''>
        <Label>{JointAddon}</Label>
        <InputGroup>
          <InputGroupText>
            <i className='icofont icofont-unlink'></i>
          </InputGroupText>
          <InputGroupText>{'0.00'}</InputGroupText>
          <Input type='text' />
        </InputGroup>
      </FormGroup>
      <FormGroup className=''>
        <Label>{LeftRightAddon}</Label>
        <InputGroup className='mb-3'>
          <InputGroupText>
            <i className='icofont icofont-ui-zoom-out'></i>
          </InputGroupText>
          <Input type='text' />
          <InputGroupText>
            <i className='icofont icofont-ui-zoom-in'></i>
          </InputGroupText>
        </InputGroup>
      </FormGroup>
      <FormGroup className=' input-group-solid'>
        <Label>{SolidStyle}</Label>
        <InputGroup>
          <InputGroupText>
            <i className='icofont icofont-users'></i>
          </InputGroupText>
          <Input type='text' placeholder='999999' />
        </InputGroup>
      </FormGroup>
      <FormGroup className=' input-group-square'>
        <Label>{FlatStyle}</Label>
        <InputGroup>
          <InputGroupText>
            <i className='icofont icofont-credit-card'></i>
          </InputGroupText>
          <Input type='text' placeholder='' />
        </InputGroup>
      </FormGroup>
      <FormGroup className=' input-group-square'>
        <Label>{RaiseStyle}</Label>
        <InputGroup>
          <InputGroupText>
            <i className='icofont icofont-download'></i>
          </InputGroupText>
          <Input className=' input-group-air' type='text' placeholder='https://www.example.com' />
        </InputGroup>
      </FormGroup>
      <div className=' mb-0'>
        <Label>{LeftRightAddon}</Label>
        <InputGroup className='pill-input-group'>
          <InputGroupText>
            <i className='icofont icofont-ui-copy'></i>
          </InputGroupText>
          <Input type='text' />
          <InputGroupText>
            <i className='icofont icofont-stock-search'></i>
          </InputGroupText>
        </InputGroup>
      </div>
    </Form>
  );
};
export default BacicGroup2CardBody;
