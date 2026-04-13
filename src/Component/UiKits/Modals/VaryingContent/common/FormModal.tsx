import React from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import CommonModal from '../../common/modal';
import { FormModelType } from '@/Type/SideBarType';
const FormModal = ({ modal, NewMessage, toggle, defaultVal }: FormModelType) => {
  return (
    <CommonModal isOpen={modal} title={NewMessage} toggler={toggle}>
      <Form>
        <FormGroup>
          <Label className='col-form-label' htmlFor='recipient-name'>
            {'Recipient:'}
          </Label>
          <Input type='text' defaultValue={defaultVal} />
        </FormGroup>
        <FormGroup>
          <Label className='col-form-label' htmlFor='message-text'>
            {'Message:'}
          </Label>
          <Input type='textarea' id='message-text' />
        </FormGroup>
      </Form>
    </CommonModal>
  );
};

export default FormModal;
