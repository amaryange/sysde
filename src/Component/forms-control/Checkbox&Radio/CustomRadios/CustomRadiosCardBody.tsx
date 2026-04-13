import { Row, Col, CardBody, FormGroup, Label, Input } from 'reactstrap';
import CustomRadioContain from './CustomRadio';
import { Option, RadioStates } from '@/Constant';

const CustomRadiosCardBody = () => {
  return (
    <CardBody>
      <Row>
        <CustomRadioContain />
        <Col sm='12'>
          <h5>{RadioStates}</h5>
        </Col>
        <Col>
          <FormGroup className='m-t-15 custom-radio-ml'>
            <div className='radio radio-primary'>
              <Input id='radio11' type='radio' name='radio1' value='option1' />
              <Label htmlFor='radio11'>
                {Option}
                <span className='digits'> {'1'}</span>
              </Label>
            </div>
            <div className='radio radio-secondary'>
              <Input id='radio22' type='radio' name='radio1' value='option1' />
              <Label htmlFor='radio22'>
                {Option}
                <span className='digits'> {'2'}</span>
              </Label>
            </div>
            <div className='radio radio-success'>
              <Input id='radio55' type='radio' name='radio1' value='option1' />
              <Label htmlFor='radio55'>
                {Option}
                <span className='digits'> {'3'}</span>
              </Label>
            </div>
            <div className='radio radio-info'>
              <Input id='radio33' type='radio' name='radio1' value='option1' disabled />
              <Label htmlFor='radio33'>
                {Option}
                <span className='digits'> {'4'}</span>
              </Label>
            </div>
            <div className='radio radio-warning'>
              <Input id='radio44' type='radio' name='radio1' value='option1' />
              <Label htmlFor='radio44'>
                {Option}
                <span className='digits'> {'5'}</span>
              </Label>
            </div>
            <div className='radio radio-danger'>
              <Input id='radio66' type='radio' name='radio1' value='option1' defaultChecked />
              <Label htmlFor='radio66'>
                {Option}
                <span className='digits'> {'6'}</span>
              </Label>
            </div>
          </FormGroup>
        </Col>
        <Col sm='12'>
          <h5>Inline Radio</h5>
        </Col>
        <Col>
          <div className='m-t-15 m-checkbox-inline mb-0 custom-radio-ml'>
            <div className='radio radio-primary'>
              <Input id='radioinline1' type='radio' name='radio1' value='option1' />
              <Label className='mb-0' htmlFor='radioinline1'>
                {Option}
                <span className='digits'> {'1'}</span>
              </Label>
            </div>
            <div className='radio radio-primary'>
              <Input id='radioinline2' type='radio' name='radio1' value='option1' />
              <Label className='mb-0' htmlFor='radioinline2'>
                {Option}
                <span className='digits'> {'2'}</span>
              </Label>
            </div>
            <div className='radio radio-primary'>
              <Input id='radioinline3' type='radio' name='radio1' value='option1' defaultChecked />
              <Label className='mb-0' htmlFor='radioinline3'>
                {Option}
                <span className='digits'> {'3'}</span>
              </Label>
            </div>
          </div>
        </Col>
      </Row>
    </CardBody>
  );
};
export default CustomRadiosCardBody;
