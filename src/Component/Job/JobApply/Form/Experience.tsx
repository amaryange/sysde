import { Position, Period, CompanyName, Location, Positions } from '@/Constant';
import { useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import DatePicker from 'react-datepicker';
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

const ExperienceClass = () => {
  const [startDate2, setStartDate2] = useState<Date | null>(new Date());
  const [startDate3, setStartDate3] = useState<Date | null>(new Date());
  const handleChange2 = (date: Date | null) => setStartDate2(date);
  const handleChange3 = (date: Date | null) => setStartDate3(date);

  return (
    <Form className='theme-form '>
      <Row>
        <Col xl='6' className='xl-100'>
          <FormGroup>
            <Label>
              {Location}:<span className='font-danger'>*</span>
            </Label>
            <Input type='text' placeholder='Enter Location' />
          </FormGroup>
        </Col>
        <Col xl='6 ' className='xl-100'>
          <Label className='col-form-label text-end pt-0'>
            {Period}:<span className='font-danger'>*</span>
          </Label>
          <Row>
            <Col sm='6'>
              <FormGroup>
                <DatePicker className='form-control digits' selected={startDate2} onChange={handleChange2} />
              </FormGroup>
            </Col>
            <Col sm='6'>
              <FormGroup>
                <DatePicker className='form-control digits' selected={startDate3} onChange={handleChange3} />
              </FormGroup>
            </Col>
          </Row>
        </Col>
        <Col xl='6 ' className='xl-100'>
          <div className='col-form-label pt-0'>
            {Position}:<span className='font-danger'>*</span>
          </div>
          <FormGroup>
            <Typeahead labelKey='name' multiple={false} options={Positions} id='Position' placeholder='Enter Position' />
          </FormGroup>
        </Col>
        <Col xl='6 ' className='xl-100'>
          <FormGroup>
            <Label>
              {CompanyName}:<span className='font-danger'>*</span>
            </Label>
            <Input type='text' placeholder='Enter Company Name' />
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};
export default ExperienceClass;
