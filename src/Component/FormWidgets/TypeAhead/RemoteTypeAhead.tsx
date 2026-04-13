import CardHeaderCommon from "@/CommonComponents/CardHeaderCommon";
import { MoviesList, RemoteTypeHeadData } from "@/Data/FormWidget";
import { Typeahead } from "react-bootstrap-typeahead";
import { Card, CardBody, Col, Form } from "reactstrap";

const RemoteTypeAhead = () => {
  return (
    <Col sm="12" md="6">
      <Card>
      <CardHeaderCommon title={`Remote typeahead`} description2={RemoteTypeHeadData} />
        <CardBody>
          <div id="remote">
            <Form className="theme-form">
              <div className="w-50">
                <Typeahead options={MoviesList} placeholder="Choose Option" id="Remote TypeAhead"/>
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RemoteTypeAhead;
