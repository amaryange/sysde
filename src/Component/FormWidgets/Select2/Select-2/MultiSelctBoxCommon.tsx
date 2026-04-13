import { Label } from 'reactstrap';
import Select from 'react-select';
import { SelectFormOptions } from '@/Data/FormWidget/SelectTwo';
import { MultiSelectBoxCommonPropsType } from '@/Type/SideBarType';

const MultiSelctBoxCommon = ({ tittle, className }: MultiSelectBoxCommonPropsType) => {
  return (
    <div className='mb-2'>
      <Label className='col-form-label'>{tittle}</Label>
      <Select options={SelectFormOptions} className={className ? className : ''} isMulti />
    </div>
  );
};

export default MultiSelctBoxCommon;
