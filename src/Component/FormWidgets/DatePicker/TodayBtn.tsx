import { DatePickerInterFace } from './common/commonDatePickerInterFace';
import { Col, FormGroup, InputGroup, Label, Row } from 'reactstrap';
import DatePicker from 'react-datepicker';
import { TodayButton } from '@/Constant';

const TodayBtn = ({ startDate, handleChange }: DatePickerInterFace) => {
  return (
    <FormGroup>
     <Row>
       <Col sm="3" className="text-end">
         <Label className="col-form-label text-end" check>{TodayButton}</Label>
       </Col>
       <Col xl="9" sm="9">
         <InputGroup>
           <DatePicker className="form-control digits w-100" todayButton='Vandaag' selected={startDate} onChange={handleChange} />
         </InputGroup>
       </Col>
     </Row>
  </FormGroup>
  );
};

export default TodayBtn;
