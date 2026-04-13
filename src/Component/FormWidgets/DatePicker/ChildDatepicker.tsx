import { DateRange, MaxDate, MinDate, SpecificDateRange } from "@/Constant";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { Col, FormGroup, InputGroup, Label, Row } from "reactstrap";

const ChildDatepicker = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const endDate = new Date();
  const handleChange = (date: Date | null) => {
    setStartDate(date);
  };

  return (
    <FormGroup>
      <Row>
        <Col sm="3" className="text-end">
          <Label className="me-2">{DateRange}</Label>
        </Col>
        <Col xl="9" sm="9">
          <InputGroup>
            <DatePicker className="form-control digits w-100" selected={startDate} onChange={handleChange} selectsStart startDate={startDate} endDate={endDate} />
          </InputGroup>
        </Col>
      </Row>
    </FormGroup>
  );
};
export default ChildDatepicker;