import CommonMultipleSubHeading from "@/CommonComponents/CommonMultipleSubHeading";
import { CustomFilteringHeading } from "@/Constant";
import { FilterData, FilterDataTableColumns, filterDataTableData } from "@/Data/Table/DataTable";
import { ChangeEvent, useState } from "react";
import DataTable from "react-data-table-component";
import { Card, CardBody, Col } from "reactstrap";
import TableSearchBar from "./TableSeachbar";

const CustomFiltering = () => {
  const [first, setfirst] = useState<FilterData[]>([]);
  const [value, setValue] = useState({ minValue: 0, maxValue: 0 });
  const filteredData = (event: ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [event.target.name]: event.target.value });
    const filteredData = filterDataTableData.filter((item) => {
      const age = item.age;
      const { maxValue, minValue } = value;
      return age >= 30 && age <= 40;
    });
    setfirst(filteredData);
  };

  return (
    <Col sm="12">
      <Card>
        <CommonMultipleSubHeading heading={CustomFilteringHeading} />
        <CardBody>
          <TableSearchBar filteredData={filteredData} />
          <div className="table-responsive user-datatable">
            <div id="datatable-range_wrapper" className="dataTables_wrapper">
              <DataTable data={first} columns={FilterDataTableColumns} striped={true} pagination />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomFiltering;
