import { FormGroup, Input, Label, Row } from 'reactstrap';
import { Col } from 'react-bootstrap';
import { ExampleSelect } from '@/Constant';
import { CommonSelectBoxPropsType } from '@/Type/SideBarType';

const CommonSelectBox = (props: CommonSelectBoxPropsType) => {
  const data = [1, 2, 3, 4, 5];
  return (
    <Row>
      <Col>
        <FormGroup>
          <Label className='mb-2'>{ExampleSelect}</Label>
          <Input type='select' name='select' className={props.inputClassName && props.inputClassName} id={props.inputId && props.inputId} defaultValue={props.defaultValue && props.defaultValue}>
            {data.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </Input>
        </FormGroup>
      </Col>
    </Row>
  );
};

export default CommonSelectBox;
