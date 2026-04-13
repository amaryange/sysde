import { Disabled, Option, Radios } from '@/Constant';
import { Col, FormGroup, Input, Label, Row } from 'reactstrap';

const RadioGroup = () => {
  return (
    <FormGroup className='mb-3'>
      <Row>
        <Label className='col-form-label col-sm-3 pt-0'>{Radios}</Label>
        <Col sm='9'>
          <div className='form-check radio radio-primary'>
            <Input type='radio' name='radio1' id='radio1' value='option1' />
            <Label htmlFor='radio1'>
              {Option} {'1'}
            </Label>
          </div>
          <div className='form-check radio radio-primary'>
            <Input type='radio' name='radio1' id='radio2' value='option1' />
            <Label htmlFor='radio2'>
              {Option} {'2'}
            </Label>
          </div>
          <div className='form-check radio radio-primary'>
            <Input type='radio' name='radio1' value='option1' disabled />
            <Label>{Disabled}</Label>
          </div>
          <div className='form-check radio radio-primary'>
            <Input type='radio' name='radio1' value='option1' defaultChecked />
            <Label>
              {Option} {'3'}
            </Label>
          </div>
          <div className='form-check radio radio-primary'>
            <Input type='radio' name='radio1' id='radio3' value='option1' />
            <Label htmlFor='radio3'>
              {Option} {'4'}
            </Label>
          </div>
        </Col>
      </Row>
    </FormGroup>
  );
};

export default RadioGroup;
