import { Row, Col, Card, Table } from 'reactstrap';
import { useSelector } from 'react-redux';
import { tableTypes, tablesData } from '../TablesType';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { CustomTableColorHoverStripped } from '@/Constant';
import { CustomHoverAndStripedSubHeading } from '@/Data/CardHeaderCommonData';

const CustomHoverClass = () => {
  const { items } = useSelector((state: tableTypes) => state.TableSlice);
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={CustomTableColorHoverStripped} description={CustomHoverAndStripedSubHeading} />
        <Row className='card-block'>
          <Col sm='12' lg='12' xl='12'>
            <div className='table-responsive table-border-radius'>
              <Table hover striped className='table-styling  table-primary'>
                <thead>
                  <tr>
                    <th scope='col'>{'#'}</th>
                    <th scope='col'>{'First Name'}</th>
                    <th scope='col'>{'Last Name'}</th>
                    <th scope='col'>{'Username'}</th>
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
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default CustomHoverClass;
