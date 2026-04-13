import { Card, CardBody, Col } from "reactstrap";
import DataTable from "react-data-table-component";
import CommonMultipleSubHeading from "@/CommonComponents/CommonMultipleSubHeading";
import { HtmlSourcedSubHeading, htmlColumns, htmlColumnsTableData } from "@/Data/Table/DataTable";
import { HtmlSourcedHeading } from "@/Constant";

const HtmlSourcedData = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonMultipleSubHeading heading={HtmlSourcedHeading} subHeading={HtmlSourcedSubHeading} />
        <CardBody>
          <div className="table-responsive">
            <DataTable data={htmlColumnsTableData} columns={htmlColumns} striped={true} pagination />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HtmlSourcedData;
