import CommonMultipleSubHeading from "@/CommonComponents/CommonMultipleSubHeading";
import { StockResultHeading } from "@/Constant";
import { StockResultTableColumns, StockResultTableData } from "@/Data/Table/DataTable";
import DataTable from "react-data-table-component";
import { Card, CardBody, Col } from "reactstrap";

const StockResult = () => {
  return (
    <Col sm='12'>
      <Card>
        <CommonMultipleSubHeading heading={StockResultHeading} />
        <CardBody>
          <div className="table-responsive theme-scrollbar">
            <div id="stock_wrapper" className="dataTables_wrapper">
              <DataTable data={StockResultTableData} columns={StockResultTableColumns} striped={true} fixedHeader fixedHeaderScrollHeight="40vh" className="display dataTable" />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StockResult;
