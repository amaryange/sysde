import { DatePickerInterFace } from './common/commonDatePickerInterFace';
import { FormGroup, InputGroup, Label, Row } from 'reactstrap';
import { Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { CustomDateFormat } from '@/Constant';

const CustomDate = ({ startDate, handleChange }: DatePickerInterFace) => {
  return (
   <FormGroup>
     <Row>
       <Col sm="3" className="text-end">
         <Label className="col-form-label text-end" check>{CustomDateFormat}</Label>
       </Col>
       <Col xl="9" sm="9">
         <InputGroup>
           <DatePicker className="form-control digits w-100" dateFormat='yyyy/MM/dd' selected={startDate} onChange={handleChange} />
         </InputGroup>
       </Col>
     </Row>
  </FormGroup>
  );
};

export default CustomDate;
