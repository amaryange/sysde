import { CardBody, Col, Form, FormGroup, Label, Row } from 'reactstrap';
import BasicHtmlFormCardFooter from './BasicHtmlFormCardFooter';
import CommonFormGroup from './common/CommonFormGroup';
import { ColorPicker, Date, DateAndTime, MaximumLength, Month, Number, Password, Placeholder, SimpleInput, StaticText, Telephone, Textarea, Time, URL, Week } from '@/Constant';

const BasicHtmlFormCardBody = () => {
  return (
    <Form className='theme-form' onSubmit={(e) => e.preventDefault()}>
      <CardBody>
        <Row>
          <Col>
            <CommonFormGroup label={SimpleInput} ColSm={9} InputType='text' />
            <CommonFormGroup label={Placeholder} ColSm={9} InputType='text' placeholder='Type your title in Placeholder' />
            <CommonFormGroup label={Password} ColSm={9} InputType='password' placeholder='Password input' />
            <CommonFormGroup label={Number} ColSm={9} InputType='number' placeholder='Number' InputClass='digits' />
            <CommonFormGroup label={Telephone} ColSm={9} InputType='tel' InputClass='digits m-input' defaultValue='91-(999)-999-999' />
            <CommonFormGroup label={URL} ColSm={9} InputType='url' defaultValue='https://getbootstrap.com' />
            <CommonFormGroup label={DateAndTime} ColSm={9} InputType='datetime-local' id='example-datetime-local-input' defaultValue='2023-01-19T18:45:00' />
            <CommonFormGroup label={Date} ColSm={9} InputType='date' InputClass='digits' defaultValue='2023-01-0100' />
            <CommonFormGroup label={Month} ColSm={9} InputType='month' InputClass='digits' defaultValue='2023-01' />
            <CommonFormGroup label={Week} ColSm={9} InputType='week' InputClass='digits' defaultValue='2023-W09' />
            <CommonFormGroup label={Time} ColSm={9} InputType='time' InputClass='digits' defaultValue='21:45:00' />
            <CommonFormGroup label={ColorPicker} ColSm={9} InputType='color' labelClass='pt-0' InputClass='form-control-color' defaultValue='#26695c' />
            <CommonFormGroup label={MaximumLength} ColSm={9} InputType='text' placeholder='Content must be in 6 characters' maxLength={6} />
            <FormGroup className='row'>
              <Label className='col-sm-3 col-form-label pt-0'>{StaticText}</Label>
              <Col sm='9'>
                <div className='form-control-static'>{'Hello !... This is static text'}</div>
              </Col>
            </FormGroup>
            <FormGroup className='row mb-0'>
              <Label className='col-sm-3 col-form-label'>{Textarea}</Label>
              <Col sm='9'>
                <textarea className='form-control' rows={5} cols={5} placeholder='Default textarea'></textarea>
              </Col>
            </FormGroup>
          </Col>
        </Row>
      </CardBody>
      <BasicHtmlFormCardFooter />
    </Form>
  );
};
export default BasicHtmlFormCardBody;
