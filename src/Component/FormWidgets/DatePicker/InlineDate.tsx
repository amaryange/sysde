import { DatePickerInterFace } from './common/commonDatePickerInterFace';
import { Col, Label, Row } from 'reactstrap';
import DatePicker from 'react-datepicker';
import { InlineVersion } from '@/Constant';

const InlineDate = ({ startDate, handleChange }: DatePickerInterFace) => {
  return (
    <Row className='mb-3 g-3'>
      <Label className='col-sm-3 col-form-label text-end'>{InlineVersion}</Label>
      <Col sm='3'>
        <div className='datepicker-here'>
          <DatePicker className='form-control digits' selected={startDate} onChange={handleChange} inline />
        </div>
      </Col>
    </Row>
  );
};

export default InlineDate;
