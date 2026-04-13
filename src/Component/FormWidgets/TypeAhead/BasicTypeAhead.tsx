import { Typeahead } from "react-bootstrap-typeahead";
import { Card, Col, CardBody, Form } from "reactstrap";
import CardHeaderCommon from "@/CommonComponents/CardHeaderCommon";
import { BasicTypeHeadData, StateOfUsa } from "@/Data/FormWidget";

const BasicTypeAhead = () => {
  return (
    <Col sm="12" md="6">
      <Card>
      <CardHeaderCommon title={`Basic typeahead`} description2={BasicTypeHeadData} />
        <CardBody>
          <div id="the-basics">
            <Form className="theme-form">
              <div className="w-50">
                <Typeahead options={StateOfUsa} placeholder="States of USA" id="Basic TypeAhead" />
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicTypeAhead;
