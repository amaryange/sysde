import { Col, Card, Table } from 'reactstrap';
import { tableTypes, tablesData } from '../TablesType';
import { useSelector } from 'react-redux';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { DottedBorderSubHeading } from '@/Data/CardHeaderCommonData';
import { DottedBorder } from '@/Constant';

const DottedBorderClass = () => {
  const { items } = useSelector((state: tableTypes) => state.TableSlice);
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={DottedBorder} description={DottedBorderSubHeading} />
        <div className='table-responsive'>
          <Table className='table-dotted'>
            <thead>
              <tr className='dotted'>
                <th scope='col'>{'#'}</th>
                <th scope='col'>{'First Name'}</th>
                <th scope='col'>{'Last Name'}</th>
                <th scope='col'>{'Username'}</th>
              </tr>
            </thead>
            <tbody>
              {items.slice(0, 3).map((item: tablesData) => (
                <tr className='dotted' key={item.id}>
                  <th scope='row'>{'1'}</th>
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

export default DottedBorderClass;
