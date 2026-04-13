import CardHeaderCommon from "@/CommonComponents/CardHeaderCommon";
import { BloodHoundData, StateOfUsa } from "@/Data/FormWidget";
import { Typeahead } from "react-bootstrap-typeahead";
import { Card, CardBody, Col, Form } from "reactstrap";

const BloodHound = () => {
  return (
    <Col sm="12" md="6">
      <Card>
      <CardHeaderCommon title={`loodhound (Suggestion Engine)`} description2={BloodHoundData} />
        <CardBody>
          <div id="bloodhound">
            <Form className="theme-form">
              <div className="w-50">
                <Typeahead options={StateOfUsa} placeholder="States of USA" id="BloodHound" />
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BloodHound;
