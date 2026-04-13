import CommonMultipleSubHeading from "@/CommonComponents/CommonMultipleSubHeading";
import { RowCreateCallbackHeading } from "@/Constant";
import { RowCreateCallBackTableColumns, RowCreateCallBackTableData, RowCreateCallbackSubHeading } from "@/Data/Table/DataTable";
import DataTable from "react-data-table-component";
import { Card, CardBody, Col } from "reactstrap";

const RowCreateCallback = () => {
  return (
    <Col sm='12'>
      <Card>
        <CommonMultipleSubHeading subHeading={RowCreateCallbackSubHeading} heading={RowCreateCallbackHeading} />
        <CardBody>
          <div className="table-responsive theme-scrollbar" id="row_create">
            <DataTable data={RowCreateCallBackTableData} columns={RowCreateCallBackTableColumns} striped={true} pagination className="display dataTable" />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RowCreateCallback;
