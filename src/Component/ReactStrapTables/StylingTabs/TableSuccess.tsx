import { Row, Col, Table } from 'reactstrap';
import { tableTypes, tablesData } from '../TablesType';
import { useSelector } from 'react-redux';

const TableSuccess = () => {
  const { items } = useSelector((state: tableTypes) => state.TableSlice);
  return (
    <Row className='card-block'>
      <Col sm='12' lg='12' xl='12'>
        <div className='table-responsive'>
          <Table>
            <thead className='table-success'>
              <tr>
                <th scope='col'>{'#'}</th>
                <th scope='col'>{'First Name'}</th>
                <th scope='col'>{'Last Name'}</th>
                <th scope='col'>{'Username'}</th>
              </tr>
            </thead>
            <tbody>
              {items.slice(0, 3).map((item: tablesData) => (
                <tr key={item.id}>
                  <th scope='row'>{item.id}</th>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.user_name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Col>
    </Row>
  );
};

export default TableSuccess;
