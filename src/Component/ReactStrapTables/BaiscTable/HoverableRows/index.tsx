import { Col, Card, Table } from 'reactstrap';
import HoverableRowsTBody from './HoverableRowsTBody';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { HoverableRows } from '@/Constant';
import { HoverableRowsClassDescription } from '@/Data/CardHeaderCommonData';

const HoverableRowsClass = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={HoverableRows} description={HoverableRowsClassDescription} />
        <div className='table-responsive'>
          <Table hover>
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
            <HoverableRowsTBody />
          </Table>
        </div>
      </Card>
    </Col>
  );
};

export default HoverableRowsClass;
