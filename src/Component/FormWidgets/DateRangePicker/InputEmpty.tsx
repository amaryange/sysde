import { Col, FormGroup } from 'reactstrap';
import DatePicker from 'react-datepicker';
import { InputEmptyPropsType } from '@/Type/SideBarType';
import TitleCommon from './common/TitleCommon';
import { InputEmptyData } from '@/Data/DatePickerCommonData';

const InputEmpty = ({ startDate, endDate, setDateRange }: InputEmptyPropsType) => {
  return (
    <Col xl='6'>
      <div className='daterange-card'>
        <TitleCommon data={InputEmptyData} />
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
              monthsShown={2}
            />
          </FormGroup>
        </div>
      </div>
    </Col>
  );
};

export default InputEmpty;
