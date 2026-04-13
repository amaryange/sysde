import { Col, FormGroup, InputGroup, Label, Row } from "reactstrap";
import DatePicker from "react-datepicker";
import { DatePickerInterFace } from "./common/commonDatePickerInterFace";
import { Default } from "@/Constant";

const DefaultDate = ({ startDate, handleChange }: DatePickerInterFace) => {
  return (
    <FormGroup>
      <Row>
        <Col sm="3" className="text-end">
          <Label className="col-form-label text-end" check>
            {Default}
          </Label>
        </Col>
        <Col xl="9" sm="9">
          <InputGroup>
            <DatePicker className="form-control digits w-100" selected={startDate} onChange={handleChange} />
          </InputGroup>
        </Col>
      </Row>
    </FormGroup>
  );
};

export default DefaultDate;
