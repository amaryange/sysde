import { FormGroup, Input, Label, Row } from 'reactstrap';
import { Col } from 'react-bootstrap';
import { ExampleMultipleSelect } from '@/Constant';
import { CommonMultipleSelectBoxPropsType } from '@/Type/SideBarType';

const CommonMultipleSelectBox = (props: CommonMultipleSelectBoxPropsType) => {
  const data = [1, 2, 3, 4, 5];
  return (
    <Row>
      <Col>
        <FormGroup>
          <Label className='mb-2'>{ExampleMultipleSelect}</Label>
          <Input type='select' name='select' className={props.inputClassName && props.inputClassName} id={props.inputId && props.inputId} multiple>
            {data.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </Input>
        </FormGroup>
      </Col>
    </Row>
  );
};

export default CommonMultipleSelectBox;
