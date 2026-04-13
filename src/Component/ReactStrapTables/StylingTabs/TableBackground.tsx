import { Row, Col, Card, Table } from 'reactstrap';
import TableSuccess from './TableSuccess';
import { useSelector } from 'react-redux';
import { tableTypes, tablesData } from '../TablesType';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { TableHeadOptionsPrimaryBackground } from '@/Constant';
import { TableBackgroundClassDescription } from '@/Data/CardHeaderCommonData';

const TableBackgroundClass = () => {
  const { items } = useSelector((state: tableTypes) => state.TableSlice);
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={TableHeadOptionsPrimaryBackground} description={TableBackgroundClassDescription} />
        <Row className='card-block'>
          <Col sm='12' lg='12' xl='12'>
            <div className='table-responsive'>
              <Table>
                <thead className='bg-primary'>
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
        <TableSuccess />
      </Card>
    </Col>
  );
};

export default TableBackgroundClass;
