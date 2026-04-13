import { Col, Card, Row, Table } from 'reactstrap';
import StripedRowClassTBody from './StripedRowClassTBody';
import { StripedRow } from '@/Constant';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { StripedRowClassDescription } from '@/Data/CardHeaderCommonData';

const StripedRowClass = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={StripedRow} description={StripedRowClassDescription} />
        <Row className='card-block '>
          <Col sm='12' lg='12' xl='12'>
            <div className='table-responsive'>
              <Table striped>
                <thead>
                  <tr>
                    <th scope='col'>{'#'}</th>
                    <th scope='col'>{'First Name'}</th>
                    <th scope='col'>{'Last Name'}</th>
                    <th scope='col'>{'Username'}</th>
                  </tr>
                </thead>
                <StripedRowClassTBody />
              </Table>
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default StripedRowClass;
