import { Col, Card, Table, Row } from 'reactstrap';
import TableClassBody from './TableClassBody';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { TableHeadOptions } from '@/Constant';
import { TableClassDescription } from '@/Data/CardHeaderCommonData';

const TableClass = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={TableHeadOptions} description={TableClassDescription} />
        <Row className='card-block '>
          <Col sm='12' lg='12' xl='12'>
            <div className='table-responsive'>
              <Table>
                <thead className='thead-dark'>
                  <tr>
                    <th scope='col'>{'#'}</th>
                    <th scope='col'>{'First Name'}</th>
                    <th scope='col'>{'Last Name'}</th>
                    <th scope='col'>{'Username'}</th>
                  </tr>
                </thead>
                <TableClassBody />
              </Table>
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default TableClass;
