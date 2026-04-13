import CommonMultipleSubHeading from "@/CommonComponents/CommonMultipleSubHeading";
import { StateSavingHeading } from "@/Constant";
import { StateSavingSubHeading, StateSavingTableColumns, StateSavingTableData } from "@/Data/Table/DataTable";
import DataTable from "react-data-table-component";
import { Card, CardBody, Col } from "reactstrap";

const StateSaving = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonMultipleSubHeading subHeading={StateSavingSubHeading} heading={StateSavingHeading} />
        <CardBody>
          <div className="table-responsive">
            <DataTable data={StateSavingTableData} columns={StateSavingTableColumns} striped={true} pagination />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StateSaving;
