import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Col, FormGroup } from 'reactstrap';
import TitleCommon from './common/TitleCommon';
import { TimeAndDateData } from '@/Data/DatePickerCommonData';

const TimeAndDate = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  return (
    <Col lg="12">
      <div className="daterange-card">
        <TitleCommon data={TimeAndDateData} />
        <div className="theme-form">
          <FormGroup>
            <DatePicker className="form-control digits" selected={startDate} onChange={(date: Date | null) => setStartDate(date)} monthsShown={2} showYearDropdown showTimeSelect dateFormat="MMMM d, yyyy h:mm aa" />
          </FormGroup>
        </div>
      </div>
    </Col>
  );
};
export default TimeAndDate;
