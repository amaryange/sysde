import { Col, FormGroup, InputGroup, Label, Row } from 'reactstrap';
import DatePicker from 'react-datepicker';
import { DatePickerInterFace } from './common/commonDatePickerInterFace';
import { SelectTimeOnly } from '@/Constant';

const TimeOnly = ({ startDate, handleChange }: DatePickerInterFace) => {
  return (
    <FormGroup>
       <Row>
         <Col sm="3" className="text-end">
           <Label className="col-form-label text-end" check>{SelectTimeOnly}</Label>
         </Col>
         <Col xl="9" sm="9">
           <InputGroup>
             <DatePicker className="form-control digits w-100"selected={startDate} onChange={handleChange} showTimeSelect showTimeSelectOnly timeIntervals={15} timeCaption='Time' dateFormat='h:mm aa' />
           </InputGroup>
         </Col>
       </Row>
    </FormGroup>
  );
};

export default TimeOnly;
