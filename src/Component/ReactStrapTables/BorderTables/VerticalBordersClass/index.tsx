import { Col, Card, Table } from 'reactstrap';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { VerticalBorders } from '@/Constant';
import { VerticalBorderTableSubHeading } from '@/Data/CardHeaderCommonData';
import { useSelector } from 'react-redux';
import { tableTypes } from '../../TablesType';

const VerticalBordersClass = () => {
  const { items } = useSelector((state: tableTypes) => state.TableSlice);

  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={VerticalBorders} description={VerticalBorderTableSubHeading} />
        <div className='table-responsive'>
          <Table className='table-border-vertical'>
            <thead>
              <tr>
                <th scope='col'>{'#'}</th>
                <th scope='col'>{'First Name'}</th>
                <th scope='col'>{'Last Name'}</th>
                <th scope='col'>{'Username'}</th>
                <th scope='col'>{'Role'}</th>
                <th scope='col'>{'Country'}</th>
              </tr>
            </thead>
            <tbody>
              {
                items.map((item) =>
                  <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.user_name}</td>
                    <td>{item.role}</td>
                    <td>{item.country}</td>
                  </tr>
                )
              }
            </tbody>
          </Table>
        </div>
      </Card>
    </Col>
  );
};

export default VerticalBordersClass;
