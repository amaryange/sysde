import { Col, Card, Table } from 'reactstrap';
import BasicTableClassTbody from './BasicTableClassTbody';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { BasicTable } from '@/Constant';
import { BasicTableClassDescription } from '@/Data/CardHeaderCommonData';

const BasicTableClass = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={BasicTable} description={BasicTableClassDescription} />
        <div className='table-responsive'>
          <Table>
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
            <BasicTableClassTbody />
          </Table>
        </div>
      </Card>
    </Col>
  );
};

export default BasicTableClass;
