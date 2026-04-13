import { FullColorCommonCardData } from '@/Data/FormWidget/Select2';
import { Label, Input } from 'reactstrap';
interface propsTypes {
  tittle: string;
  className: string;
}
const CommonSelect2 = ({ tittle, className }: propsTypes) => {
  return (
    <div className='mb-2'>
      <Label className='col-form-label'>{tittle}</Label>
      <Input className={className} name='select' type='select'>
        <option value='opt1'>Select One Value Only</option>
        {FullColorCommonCardData.map((data, index) => (
          <option key={index} value={data.value}>
            {data.tittle}
          </option>
        ))}
      </Input>
    </div>
  );
};

export default CommonSelect2;
