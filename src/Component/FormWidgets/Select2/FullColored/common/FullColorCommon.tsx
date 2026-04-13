import { OneValue } from '@/Constant';
import { FullColorCommonCardData } from '@/Data/FormWidget/Select2';
import { FullColorCommonType } from '@/Type/SideBarType';
import { Label, Input } from 'reactstrap';

const FullColorCommon = ({ label, className }: FullColorCommonType) => {
  return (
    <div className='mb-2'>
      <Label className='col-form-label'>{label}</Label>
      <Input className={` ${className} btn-square`} name='select' type='select'>
        <option value='opt1'>{OneValue}</option>
        {FullColorCommonCardData.map((data, index) => (
          <option value={data.value} key={index}>
            {data.tittle}
          </option>
        ))}
      </Input>
    </div>
  );
};

export default FullColorCommon;
