import CommonMultipleSubHeading from "@/CommonComponents/CommonMultipleSubHeading";
import { JavascriptSourcedDataHeading } from "@/Constant";
import { JavaScriptSourcedDataSubHeading, ajaxSourcedColumns, javascriptSourcedData } from "@/Data/Table/DataTable";
import DataTable from "react-data-table-component";
import { Card, CardBody, Col } from "reactstrap";

const JavaScriptSourcedData = () => {
  return (
    <Col sm='12'>
      <Card>
        <CommonMultipleSubHeading subHeading={JavaScriptSourcedDataSubHeading} heading={JavascriptSourcedDataHeading} />
        <CardBody>
          <div className="table-responsive">
            <DataTable data={javascriptSourcedData} columns={ajaxSourcedColumns} striped={true} pagination />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default JavaScriptSourcedData;
