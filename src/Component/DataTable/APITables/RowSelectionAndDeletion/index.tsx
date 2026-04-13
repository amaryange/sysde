import CommonMultipleSubHeading from "@/CommonComponents/CommonMultipleSubHeading";
import { RowsSelectionAndDeletionHeading } from "@/Constant";
import { RowsSelectionAndDeletionSubHeading, DeleteDataTableColumns, DeleteRowData, deleteRowData } from "@/Data/Table/DataTable";
import { SetStateAction, useCallback, useState } from "react";
import DataTable from "react-data-table-component";
import { Button, Card, CardBody, Col } from "reactstrap";

const RowSelectionAndDeletion = () => {
  const [data, setData] = useState(DeleteRowData);
  const [selectedRows, setSelectedRows] = useState<deleteRowData[]>([]);
  const [toggleCleared, setToggleCleared] = useState(false);
  const handleRowSelected = useCallback((state: { selectedRows: SetStateAction<deleteRowData[]> }) => {
    setSelectedRows(state.selectedRows);
  }, []);
  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete:\r ${selectedRows.map((r: deleteRowData) => r.name)}?`)) {
      setToggleCleared(!toggleCleared);
      setData(data.filter((item) => (selectedRows.filter((elem: deleteRowData) => elem.id === item.id).length > 0 ? false : true)));
      setSelectedRows([]);
    }
  };
  return (
    <Col sm="12">
      <Card>
        <CommonMultipleSubHeading heading={RowsSelectionAndDeletionHeading} subHeading={RowsSelectionAndDeletionSubHeading} />
        <CardBody>
          <div className="table-responsive">
            {selectedRows.length !== 0 && (
              <>
                <h4 className="text-muted  m-0">Delete Selected Data</h4>
                <Button color="secondary" onClick={handleDelete} className="mb-3">
                  Delete Row
                </Button>
              </>
            )}
            <div className="dataTables_wrapper">
              <DataTable data={data} columns={DeleteDataTableColumns} striped={true} pagination selectableRows onSelectedRowsChange={handleRowSelected} clearSelectedRows={toggleCleared} />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RowSelectionAndDeletion;
