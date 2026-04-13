import { Button, Col, Form, FormGroup, Input, InputGroup, InputGroupText, Label, Row } from 'reactstrap';
import { City, FirstName, LastName, State, SubmitForm, Username, Zip } from '@/Constant';

const BrowserDefault = () => {
  return (
    <Form>
      <Row className="g-3">
        <Col md="4 mb-3">
          <Label htmlFor="validationDefault01">{FirstName}</Label>
          <Input className="form-control" type="text" placeholder="First name" required />
        </Col>
        <Col md="4 mb-3">
          <Label htmlFor="validationDefault02">{LastName}</Label>
          <Input className="form-control" type="text" placeholder="Last name" required />
        </Col>
        <Col md="4 mb-3">
          <Label htmlFor="validationDefaultUsername">{Username}</Label>
          <InputGroup>
            <InputGroupText>{"@"}</InputGroupText>
            <Input className="form-control" type="text" placeholder="Username" aria-describedby="inputGroupPrepend2" required />
          </InputGroup>
        </Col>
      </Row>
      <Row className="g-3">
        <Col md="6 mb-3">
          <Label>{City}</Label>
          <Input className="form-control" type="text" placeholder="City" required />
        </Col>
        <Col md="3 mb-3">
          <Label>{State}</Label>
          <Input className="form-control" type="text" placeholder="State" required />
        </Col>
        <Col md="3 mb-3">
          <Label>{Zip}</Label>
          <Input className="form-control" type="text" placeholder="Zip" required />
        </Col>
      </Row>
      <FormGroup check>
        <div className="checkbox p-0">
          <Input id="invalidCheck2" type="checkbox" required />
          <Label htmlFor="invalidCheck2" check>Agree to terms and conditions</Label>
        </div>
      </FormGroup>
      <Button color='primary'>{SubmitForm}</Button>
    </Form>
  );
};
export default BrowserDefault;
