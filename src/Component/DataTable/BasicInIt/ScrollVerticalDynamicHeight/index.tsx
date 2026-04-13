import CommonMultipleSubHeading from "@/CommonComponents/CommonMultipleSubHeading";
import { DynamicHeight } from "@/Constant";
import { ScrollVerticalDynamicHeightColumns, ScrollVerticalDynamicHeightData, ScrollVerticalDynamicHeightSubHeading } from "@/Data/Table/DataTable";
import DataTable from "react-data-table-component";
import { Card, Col,CardBody } from "reactstrap";

const ScrollVerticalDynamicHeight = () => {
  return (
    <Col sm='12'>
      <Card>
        <CommonMultipleSubHeading  heading={DynamicHeight} subHeading={ScrollVerticalDynamicHeightSubHeading}/>
        <CardBody>
          <div className="table-responsive user-datatable">
            <DataTable data={ScrollVerticalDynamicHeightData} columns={ScrollVerticalDynamicHeightColumns} striped={true} fixedHeader fixedHeaderScrollHeight="40vh" className="display dataTable"/>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ScrollVerticalDynamicHeight;
