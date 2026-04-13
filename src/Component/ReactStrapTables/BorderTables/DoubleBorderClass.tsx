import { Col, Card, Table } from 'reactstrap';
import { useSelector } from 'react-redux';
import { tableTypes, tablesData } from '../TablesType';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { DoubleBorder } from '@/Constant';
import { DoubleBorderSubHeading } from '@/Data/CardHeaderCommonData';

const DoubleBorderClass = () => {
  const { items } = useSelector((state: tableTypes) => state.TableSlice);
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={DoubleBorder} description={DoubleBorderSubHeading} />
        <div className='table-responsive'>
          <Table className='table-double'>
            <thead>
              <tr className='double'>
                <th scope='col'>{'#'}</th>
                <th scope='col'>{'First Name'}</th>
                <th scope='col'>{'Last Name'}</th>
                <th scope='col'>{'Username'}</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item: tablesData) => (
                <tr className='double' key={item.id}>
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
export default DoubleBorderClass;
