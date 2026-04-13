import React from "react";
import { Col, FormGroup, InputGroup, Label, Row } from "reactstrap";
import DatePicker from "react-datepicker";
import { DatePickerInterFace } from "./common/commonDatePickerInterFace";
import { SelectDateWithTime } from "@/Constant";

const DateWithTime = ({ startDate, handleChange }: DatePickerInterFace) => {
  return (
    <FormGroup>
      <Row>
        <Col sm="3" className="text-end">
          <Label className="col-form-label text-end" check>{SelectDateWithTime}</Label>
        </Col>
        <Col xl="9" sm="9">
          <InputGroup>
            <DatePicker className="form-control digits w-100" showPopperArrow={false} selected={startDate} showTimeSelect dateFormat="Pp" onChange={handleChange} />
          </InputGroup>
        </Col>
      </Row>
    </FormGroup>
  );
};

export default DateWithTime;
