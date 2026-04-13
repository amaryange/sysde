import DataTable from "react-data-table-component";
import { Card, CardBody, Col } from "reactstrap";
import CommonMultipleSubHeading from "@/CommonComponents/CommonMultipleSubHeading";
import { ChildrenRowsHeading } from "@/Constant";
import ExpandedComponent from "./ExpandedComponent";
import { ChildRowsSubHeading, ZeroConfigurationTableData, childRowsTableColumns } from "@/Data/Table/DataTable";

const ChildRows = () => {
  return (
    <Col sm='12'>
      <Card>
        <CommonMultipleSubHeading heading={ChildrenRowsHeading} subHeading={ChildRowsSubHeading} />
        <CardBody>
          <div className="table-responsive">
            <div id="API-chield-row_wrapper" className="dataTables_wrapper">
              <DataTable data={ZeroConfigurationTableData} columns={childRowsTableColumns} striped={true} pagination expandableRows expandableRowsComponent={ExpandedComponent} />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ChildRows;
