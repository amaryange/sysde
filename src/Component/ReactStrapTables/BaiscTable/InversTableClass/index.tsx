import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import InversTableClassTBody from './InversTableClassTBody';
import { Col, Card, Table } from 'reactstrap';
import { InverseTablePrimaryBackground } from '@/Constant';
import { InversePrimaryClassDescription } from '@/Data/CardHeaderCommonData';

const InversePrimaryClass = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={InverseTablePrimaryBackground} description={InversePrimaryClassDescription} />
        <div className='table-responsive'>
          <Table striped className='bg-primary'>
            <thead className='tbl-strip-thad-bdr'>
              <tr>
                <th scope='col'>{'#'}</th>
                <th scope='col'>{'First Name'}</th>
                <th scope='col'>{'Last Name'}</th>
                <th scope='col'>{'Username'}</th>
                <th scope='col'>{'Role'}</th>
                <th scope='col'>{'Country'}</th>
              </tr>
            </thead>
            <InversTableClassTBody />
          </Table>
        </div>
      </Card>
    </Col>
  );
};

export default InversePrimaryClass;
