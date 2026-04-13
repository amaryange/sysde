import CommonMultipleSubHeading from "@/CommonComponents/CommonMultipleSubHeading";
import { AjaxSourcedDataHeading } from "@/Constant";
import { AjaxSourcedDataSubHeading, ajaxSourcedColumns, ajaxSourcedData } from "@/Data/Table/DataTable";
import DataTable from "react-data-table-component";
import { Card, CardBody, Col } from "reactstrap";

const AjaxSourcedData = () => {
  return (
    <Col sm='12'>
      <Card>
        <CommonMultipleSubHeading heading={AjaxSourcedDataHeading} subHeading={AjaxSourcedDataSubHeading} />
        <CardBody>
          <div className="table-responsive">
            <DataTable data={ajaxSourcedData} columns={ajaxSourcedColumns} striped={true} pagination />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AjaxSourcedData;
