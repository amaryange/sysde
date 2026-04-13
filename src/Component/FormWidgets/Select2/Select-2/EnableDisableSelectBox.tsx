import { Button, Label } from 'reactstrap';
import Select from 'react-select';
import { useState } from 'react';
import { Disable, Enable, EnableDisable } from '@/Constant';
import { SelectFormOptions } from '@/Data/FormWidget/SelectTwo';

const EnableDisableSelectBox = () => {
  const [enable, setEnable] = useState(false);

  return (
    <div className='mt-3'>
      <Label className='col-form-label me-2'>{EnableDisable}</Label>
      <Select isDisabled={enable} options={SelectFormOptions} />
      <Button className='js-programmatic-enable mt-2 me-2' color='primary' onClick={() => setEnable(false)}>
        {Enable}
      </Button>
      <Button className='js-programmatic-disable mt-2' color='secondary' onClick={() => setEnable(true)}>
        {Disable}
      </Button>
    </div>
  );
};

export default EnableDisableSelectBox;
