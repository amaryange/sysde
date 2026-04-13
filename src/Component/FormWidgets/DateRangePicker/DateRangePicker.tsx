import { Col, FormGroup } from 'reactstrap';
import DatePicker from 'react-datepicker';
import { DateRangePickerPropsType } from '@/Type/SideBarType';
import { DateRangePickerData } from '@/Data/DatePickerCommonData';
import TitleCommon from './common/TitleCommon';

const DateRangePicker = ({ startDate, endDate, setDateRange }: DateRangePickerPropsType) => {
  return (
    <Col xl='6'>
      <div className='daterange-card'>
        <TitleCommon data={DateRangePickerData} />
        <div className='theme-form'>
          <FormGroup>
            <DatePicker
              className='form-control digits'
              selectsRange={true}
              startDate={startDate}
              endDate={endDate}
              onChange={(update) => {
                setDateRange(update);
              }}
              isClearable={true}
            />
          </FormGroup>
        </div>
      </div>
    </Col>
  );
};

export default DateRangePicker;
