import CommonMultipleSubHeading from "@/CommonComponents/CommonMultipleSubHeading";
import { ServerSideProcessingHeading } from "@/Constant";
import { ServerSideProcessingSubHeading, serverSideData, serverSideProcessingColumns } from "@/Data/Table/DataTable";
import DataTable from "react-data-table-component";
import { Card, CardBody, Col } from "reactstrap";

const ServerSideProcessing = () => {
  return (
    <Col sm='12'>
      <Card>
        <CommonMultipleSubHeading heading={ServerSideProcessingHeading} subHeading={ServerSideProcessingSubHeading} />
        <CardBody>
          <div className="table-responsive">
            <DataTable data={serverSideData} columns={serverSideProcessingColumns} striped={true} pagination />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ServerSideProcessing;
