import { MegaFormCommonPropType } from '@/Type/SideBarType';
import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const MegaFormCommon = ({ label, type, placeholder }: MegaFormCommonPropType) => {
  return (
    <FormGroup>
      <Label className='col-form-label'>{label}</Label>
      <Input type={type} placeholder={placeholder} />
    </FormGroup>
  );
};

export default MegaFormCommon;
