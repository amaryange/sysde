import CardHeaderCommon from "@/CommonComponents/CardHeaderCommon";
import { CountryDataList, ScrollableDropdownData } from "@/Data/FormWidget";
import { Typeahead } from "react-bootstrap-typeahead";
import { Card, CardBody, Col, Form } from "reactstrap";

const ScrollableDropdownMenu = () => {
  return (
    <Col sm="12" md="6">
      <Card>
      <CardHeaderCommon title={`Scrollable Dropdown Menu`} description2={ScrollableDropdownData} />
        <CardBody>
          <div id="scrollable-dropdown-menu">
            <Form className="theme-form">
              <div className="w-50">
                <Typeahead options={CountryDataList} placeholder="Countries" id="Scrollable DropdownMenu"/>
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ScrollableDropdownMenu;
