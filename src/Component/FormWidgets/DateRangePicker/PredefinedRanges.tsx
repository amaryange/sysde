import { PredefinedRangesPropType } from '@/Type/SideBarType';
import { Col } from 'react-bootstrap';
import { FormGroup, Input } from 'reactstrap';
import TitleCommon from './common/TitleCommon';
import { PredefinedRangesData } from '@/Data/DatePickerCommonData';

const PredefinedRanges = ({ handleChange, startDate1 }: PredefinedRangesPropType) => {
  return (
    <Col xl='6'>
      <div className='daterange-card'>
        <TitleCommon data={PredefinedRangesData} />
        <div className='theme-form'>
          <FormGroup>
            <Input type='select' className='form-control digits' value={startDate1} onChange={(e) => handleChange(e.target.value)} placeholder='Select'>
              <option>Select</option>
              <option value='Today'>Today</option>
              <option value='Yesterday'>Yesterday</option>
              <option value='Last 7 Days'>Last 7 Days</option>
              <option value='Last 30 Days'>Last 30 Days</option>
            </Input>
          </FormGroup>
        </div>
      </div>
    </Col>
  );
};
export default PredefinedRanges;
