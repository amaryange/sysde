import { Fragment } from 'react';
import { Label } from 'reactstrap';
import Select from 'react-select';
import MultiSelctBoxCommon from './MultiSelctBoxCommon';
import EnableDisableSelectBox from './EnableDisableSelectBox';
import { DefaultPlaceholder, DisabledResults, HidingTheSearchBox, LimitingTheNumberOfSelections, RTLSupport, Select2MultiSelect, Select2SingleSelect } from '@/Constant';
import { SelectFormOptions, SelectFormOptions2 } from '@/Data/FormWidget/SelectTwo';

const SelectForm = () => {
  return (
    <Fragment>
      <MultiSelctBoxCommon tittle={DefaultPlaceholder} className='js-example-basic-single col-sm-12' />
      <div className='mb-2'>
        <Label className='col-form-label'>{Select2SingleSelect}</Label>
        <Select options={SelectFormOptions2} className='js-example-basic-single col-sm-12' />
      </div>
      <MultiSelctBoxCommon tittle={Select2MultiSelect} className='js-example-basic-single col-sm-12' />
      <div className='mb-2'>
        <Label className='col-form-label'>{RTLSupport}</Label>
        <Select isRtl={true} isMulti options={SelectFormOptions} />
      </div>
      <MultiSelctBoxCommon tittle={LimitingTheNumberOfSelections} />
      <div className='mb-2'>
        <Label className='col-form-label'>{DisabledResults}</Label>
        <Select options={SelectFormOptions} />
      </div>
      <MultiSelctBoxCommon tittle={HidingTheSearchBox} />
      <EnableDisableSelectBox />
    </Fragment>
  );
};
export default SelectForm;
