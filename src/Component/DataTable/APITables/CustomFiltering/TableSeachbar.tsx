import { Input } from "reactstrap";


const TableSearchBar = ({ filteredData }: any) => {
  return (
    <div className="table-responsive dataTables_wrapper me-0">
      <table>
        <tbody className="dataTables_filter">
          <tr>
            <td>Minimum Age</td>
            <td>
              <Input onChange={filteredData} type="search" name="minValue" />
            </td>
          </tr>
          <tr>
            <td>Maximum Age</td>
            <td>
              <Input onChange={filteredData} type="search" name="maxValue" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableSearchBar;
