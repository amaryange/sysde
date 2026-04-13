import { Col, Card, Table } from 'reactstrap';
import { SmallTableSubHeading } from '@/Data/CardHeaderCommonData';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { SmallTable } from '@/Constant';
import { useSelector } from 'react-redux';
import { tableTypes, tablesData } from '../TablesType';

const SmallTableClass = () => {
  const { items } = useSelector((state: tableTypes) => state.TableSlice);
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={SmallTable} description={SmallTableSubHeading} />
        <div className='table-responsive'>
          <Table size='sm'>
            <thead>
              <tr>
                <th scope='col'>{'#'}</th>
                <th scope='col'>{'First'}</th>
                <th scope='col'>{'Last'}</th>
                <th scope='col'>{'Handle'}</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item: tablesData) => (
                <tr key={item.id} className={`border-bottom-${item.name}`}>
                  <th scope='row'>{item.id}</th>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.user_name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card>
    </Col>
  );
};
export default SmallTableClass;
