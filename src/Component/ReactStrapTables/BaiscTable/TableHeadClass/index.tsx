import { Col, Card, Table, Row } from 'reactstrap';
import TableHeadClassTBody from './TableHeadClassTBody';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { TableHeadOptions } from '@/Constant';
import { TableHeadClassDescription } from '@/Data/CardHeaderCommonData';

const TableHeadClass = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={TableHeadOptions} description={TableHeadClassDescription} />
        <Row className='card-block'>
          <Col sm='12' lg='12' xl='12'>
            <div className='table-responsive'>
              <Table>
                <thead className='thead-light'>
                  <tr>
                    <th>#</th>
                    <th scope='col'>{'First Name'}</th>
                    <th scope='col'>{'Last Name'}</th>
                    <th scope='col'>{'Username'}</th>
                    <th scope='col'>{'Role'}</th>
                    <th scope='col'>{'Country'}</th>
                  </tr>
                </thead>
                <TableHeadClassTBody />
              </Table>
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default TableHeadClass;
