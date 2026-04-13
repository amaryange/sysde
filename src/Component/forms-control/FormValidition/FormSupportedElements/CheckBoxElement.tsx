import { CheckThisCheckbox, InvalidFeedBack } from '@/Constant';
import { Input, Label } from 'reactstrap';

const CheckBoxElement = () => {
  return (
    <div className='form-check mb-3'>
      <Input className='form-check-input' id='validationFormCheck1' type='checkbox' required />
      <Label className='form-check-label' htmlFor='validationFormCheck1'>
        {CheckThisCheckbox}
      </Label>
      <div className='invalid-feedback'>{InvalidFeedBack}</div>
    </div>
  );
};

export default CheckBoxElement;
