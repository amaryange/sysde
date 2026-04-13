import { Card, CardBody, Col, FormGroup, Input, Label, Row } from 'reactstrap';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { BrandState, CheckboxStates, Checked, CustomCheckbox, Default, Disabled, InlineCheckbox, Option, PrimaryState, SuccessState } from '@/Constant';

const CustomCheckboxsCard = () => {
  return (
    <Col md='6'>
      <Card>
        <CardHeaderCommon title={CustomCheckbox} />
        <CardBody>
          <Row>
            <Col>
              <FormGroup className="m-t-15 custom-radio-ml">
                <div className="checkbox">
                  <Input id="checkbox1" type="checkbox" />
                  <Label for="checkbox1">{Default}</Label>
                </div>
                <div className="checkbox">
                  <Input id="checkbox2" type="checkbox" disabled />
                  <Label for="checkbox2">{Disabled}</Label>
                </div>
                <div className="checkbox">
                  <Input id="checkbox3" type="checkbox" defaultChecked />
                  <Label for="checkbox3">{Checked}</Label>
                </div>
              </FormGroup>
            </Col>
            <Col sm="12">
              <h5>{CheckboxStates}</h5>
            </Col>
            <Col>
              <FormGroup className="m-t-15 custom-radio-ml">
                <div className="checkbox checkbox-primary">
                  <Input id="checkbox-primary-1" type="checkbox" defaultChecked />
                  <Label for="checkbox-primary-1">{SuccessState}</Label>
                </div>
                <div className="checkbox checkbox-secondary">
                  <Input id="checkbox-dark" type="checkbox" disabled />
                  <Label for="checkbox-dark">{BrandState}</Label>
                </div>
                <div className="checkbox checkbox-success">
                  <Input id="checkbox-primary" type="checkbox" defaultChecked />
                  <Label for="checkbox-primary">{PrimaryState}</Label>
                </div>
              </FormGroup>
            </Col>
            <Col sm="12">
              <h5>{InlineCheckbox}</h5>
            </Col>
            <Col>
              <FormGroup className="m-t-15 m-checkbox-inline mb-0 custom-radio-ml">
                <div className="checkbox checkbox-dark">
                  <Input id="inline-1" type="checkbox" defaultChecked />
                  <Label for="inline-1">{Option}<span className="digits"> {"1"}</span></Label>
                </div>
                <div className="checkbox checkbox-dark">
                  <Input id="inline-2" type="checkbox" defaultChecked />
                  <Label for="inline-2">{Option}<span className="digits"> {"2"}</span></Label>
                </div>
                <div className="checkbox checkbox-dark">
                  <Input id="inline-3" type="checkbox" defaultChecked />
                  <Label for="inline-3">{Option}<span className="digits"> {"3"}</span></Label>
                </div>
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomCheckboxsCard;
