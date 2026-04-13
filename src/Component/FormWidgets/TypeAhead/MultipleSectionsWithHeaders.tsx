import CardHeaderCommon from "@/CommonComponents/CardHeaderCommon";
import { MultiWithHeaderData, MultipleSectionHeaderData } from "@/Data/FormWidget";
import { Typeahead } from "react-bootstrap-typeahead";
import { Card, CardBody, Col, Form } from "reactstrap";

const MultipleSectionsWithHeaders = () => { 
  return (
    <Col sm="12" md="6">
      <Card>
      <CardHeaderCommon title={`Multiple sections with headers`} description2={MultipleSectionHeaderData} />
        <CardBody>
          <div id="multiple-datasets">
            <Form className="theme-form">
              <div className="w-50">
                <Typeahead id="multiple-typeahead" labelKey={"name"} multiple options={MultiWithHeaderData} placeholder="Choose a state..." clearButton />
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MultipleSectionsWithHeaders;
