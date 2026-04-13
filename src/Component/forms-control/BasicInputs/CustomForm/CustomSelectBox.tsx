import { FormGroup, Input, Label, Row } from 'reactstrap';
import { Col } from 'react-bootstrap';
import { CustomSelect } from '@/Constant';

const CustomSelectBox = () => {
  return (
    <Row>
      <Col>
        <FormGroup className='row mb-0'>
          <Label className='col-sm-3 col-form-label'>{CustomSelect}</Label>
          <Col sm='9'>
            <Input type='select' name='select' className='custom-select'>
              <option>{'Open this select menu'}</option>
              <option defaultValue='1'>{'One'}</option>
              <option defaultValue='2'>{'Two'}</option>
              <option defaultValue='3'>{'Three'}</option>
            </Input>
          </Col>
        </FormGroup>
      </Col>
    </Row>
  );
};

export default CustomSelectBox;
