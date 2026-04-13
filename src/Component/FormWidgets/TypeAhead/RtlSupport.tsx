import CardHeaderCommon from "@/CommonComponents/CardHeaderCommon";
import { CountryDataList, RtlSupportData } from "@/Data/FormWidget";
import { Typeahead } from "react-bootstrap-typeahead";
import { Card, CardBody, Col, Form } from "reactstrap";

const RtlSupport = () => {
  return (
    <Col sm="12" md="6">
      <Card>
      <CardHeaderCommon title={`RTL Support`} description2={RtlSupportData} />
        <CardBody>
          <div id="scrollable-dropdown-menu">
            <Form className="theme-form">
              <div className="w-50">
                <Typeahead align="right" options={CountryDataList} placeholder="Countries" id="RTL Support" />
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RtlSupport;
