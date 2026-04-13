import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { ExtraSmallTable } from '@/Constant';
import { ExtraSmallTableSubHeading } from '@/Data/CardHeaderCommonData';
import { Col, Card, Table } from 'reactstrap';
import { tableTypes, tablesData } from '../TablesType';
import { useSelector } from 'react-redux';

const ExtraSmallTableClass = () => {
  const { items } = useSelector((state: tableTypes) => state.TableSlice);

  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={ExtraSmallTable} description={ExtraSmallTableSubHeading} />
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
export default ExtraSmallTableClass;
