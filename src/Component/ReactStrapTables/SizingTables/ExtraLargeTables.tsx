import { useSelector } from 'react-redux';
import { Col, Card, Table } from 'reactstrap';
import { tableTypes, tablesData } from '../TablesType';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { ExtraLargeTables } from '@/Constant';
import { ExtraLargeTableSubHeading } from '@/Data/CardHeaderCommonData';

const ExtraLargeTablesClass = () => {
  const { items } = useSelector((state: tableTypes) => state.TableSlice);
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={ExtraLargeTables} description={ExtraLargeTableSubHeading} />
        <div className='table-responsive'>
          <Table size='xl'>
            <thead>
              <tr>
                <th>{'#'}</th>
                <th>{'First Name'}</th>
                <th>{'Last Name'}</th>
                <th>{'Username'}</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item: tablesData) => (
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
      </Card>
    </Col>
  );
};

export default ExtraLargeTablesClass;
