import { Col, FormGroup } from 'reactstrap';
import DatePicker from 'react-datepicker';
import { SingleDatePickerPropType } from '@/Type/SideBarType';
import TitleCommon from './common/TitleCommon';
import { SingleDatePickerData } from '@/Data/DatePickerCommonData';

const SingleDatePicker = ({ startDate1, handleChange }: SingleDatePickerPropType) => {
  return (
    <Col xl='6'>
      <div className='daterange-card'>
        <TitleCommon data={SingleDatePickerData} />
        <div className='theme-form'>
          <FormGroup>
            <DatePicker className='form-control digits' selected={startDate1} onChange={handleChange} peekNextMonth showMonthDropdown showYearDropdown dropdownMode='select' />
          </FormGroup>
        </div>
      </div>
    </Col>
  );
};

export default SingleDatePicker;
