import { Form, FormGroup, Input } from 'reactstrap';
import CheckBoxElement from './CheckBoxElement';
import RadioElement from './RadioElement';
import FileElement from './FileElement';

const SupportElement = () => {
  return (
    <Form className='was-validated'>
      <div>
        <CheckBoxElement />
        <RadioElement />
        <FormGroup>
          <Input type="select" className="custom-select" required>
            <option value="">{"Open this select menu"}</option>
            <option value="1">{"One"}</option>
            <option value="2">{"Two"}</option>
            <option value="3">{"Three"}</option>
          </Input>
          <div className="invalid-feedback">{"Example invalid custom select feedback"}</div>
        </FormGroup>
        <FileElement />
      </div>
    </Form>
  );
};
export default SupportElement;
