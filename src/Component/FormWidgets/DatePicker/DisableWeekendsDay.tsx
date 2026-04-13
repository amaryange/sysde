import { Col, FormGroup, InputGroup, Label, Row } from 'reactstrap';
import DatePicker from 'react-datepicker';
import { DatePickerInterFace } from './common/commonDatePickerInterFace';
import { DisableDaysOfWeek } from '@/Constant';

const DisableWeekendsDay = ({ handleChange }: DatePickerInterFace) => {
  return (
    <FormGroup>
    <Row>
      <Col sm="3" className="text-end">
        <Label className="col-form-label text-end" check>{DisableDaysOfWeek}</Label>
      </Col>
      <Col xl="9" sm="9">
        <InputGroup>
          <DatePicker className="form-control digits w-100" placeholderText='Click to select a date' onChange={handleChange} />
        </InputGroup>
      </Col>
    </Row>
 </FormGroup>
  );
};

export default DisableWeekendsDay;
