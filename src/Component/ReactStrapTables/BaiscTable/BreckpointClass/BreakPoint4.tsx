import { Row, Col, Table } from 'reactstrap';
import { useSelector } from 'react-redux';
import { tableTypes, tablesData } from '../../TablesType';

const BreakPoint4 = () => {
  const { items } = useSelector((state: tableTypes) => state.TableSlice);
  return (
    <Row className='card-block'>
      <Col sm='12' lg='12' xl='12'>
        <div className='table-responsive'>
          <Table className='table-responsive-sm'>
            <thead>
              <tr>
                <th>{'#'}</th>
                <th>{'First Name'}</th>
                <th>{'Last Name'}</th>
                <th>{'Username'}</th>
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

export default BreakPoint4;
