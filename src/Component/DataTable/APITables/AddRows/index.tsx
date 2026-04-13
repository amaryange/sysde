import CommonMultipleSubHeading from "@/CommonComponents/CommonMultipleSubHeading";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { Button, Card, CardBody, Col } from "reactstrap";
import { AddNewRow, AddRowsHeading } from "@/Constant";
import { AddRowsSubHeading, AddRowsTableColumns, AddRowsTableData } from "@/Data/Table/DataTable";

const AddRows = () => {

  const [tableData, setTableData] = useState(AddRowsTableData);
  const getRandomFloat = (min: number, max: number) => {
    const genrateRandom = Math.random() * (max - min) + min;
    return parseFloat(genrateRandom.toFixed(2));
  };

  const addNewRow = () => {
    const minimumValue = 10;
    const maximumValue = 100;
    const tempData = {
      column1: tableData[tableData.length - 1].column1 + 10,
      column2: getRandomFloat(minimumValue, maximumValue),
      column3: getRandomFloat(minimumValue, maximumValue),
      column4: getRandomFloat(minimumValue, maximumValue),
      column5: getRandomFloat(minimumValue, maximumValue),
    };
    setTableData([...tableData, tempData]);
  };
  return (
    <Col sm='12'>
      <Card>
        <CommonMultipleSubHeading heading={AddRowsHeading} subHeading={AddRowsSubHeading}/>
        <CardBody>
          <Button color="primary" className="mb-3" onClick={addNewRow}>
            {AddNewRow}
          </Button>
          <div className="table-responsive">
            <div id="API-1_wrapper" className="dataTables_wrapper">
              <DataTable data={tableData} columns={AddRowsTableColumns} striped={true} pagination className="display dataTable" />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AddRows;
