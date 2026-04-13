import { Input, Label } from 'reactstrap';
import { Fragment } from 'react';
import { MoreInvalidFeedBack, OrToggleThisRadio, ToggleThisRadio } from '@/Constant';

const RadioElement = () => {
  return (
    <Fragment>
      <div className='form-check'>
        <Input className='form-check-input' id='validationFormCheck2' type='radio' name='radio-stacked' required />
        <Label className='form-check-label' htmlFor='validationFormCheck2'>
          {ToggleThisRadio}
        </Label>
      </div>
      <div className='form-check mb-3'>
        <Input className='form-check-input' id='validationFormCheck3' type='radio' name='radio-stacked' required />
        <Label className='form-check-label' htmlFor='validationFormCheck3'>
          {OrToggleThisRadio}
        </Label>
        <div className='invalid-feedback'>{MoreInvalidFeedBack}</div>
      </div>
    </Fragment>
  );
};

export default RadioElement;
