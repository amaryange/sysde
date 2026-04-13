import { Col, Card, Table, Row } from 'reactstrap';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { StripedRowInverseTable } from '@/Constant';
import { StripeInverseClassDescription } from '@/Data/CardHeaderCommonData';
import { useSelector } from 'react-redux';
import { tableTypes } from '../../TablesType';

const StripeInverseClass = () => {
  const { items } = useSelector((state: tableTypes) => state.TableSlice);

  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon description={StripeInverseClassDescription} title={StripedRowInverseTable} />
        <Row className='card-block'>
          <Col sm='12' lg='12' xl='12'>
            <div className='table-responsive'>
              <Table className='table-inverse' striped>
                <thead>
                  <tr>
                    <th scope='col'>{'#'}</th>
                    <th scope='col'>{'First Name'}</th>
                    <th scope='col'>{'Last Name'}</th>
                    <th scope='col'>{'Username'}</th>
                  </tr>
                </thead>
                <tbody>
                  {items.slice(0, 3).map((item) =>
                    <tr key={item.id}>
                      <th scope="row">{item.id}</th>
                      <td>{item.first_name}</td>
                      <td>{item.last_name}</td>
                      <td>{item.user_name}</td>
                    </tr>
                  )
                  }
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default StripeInverseClass;
