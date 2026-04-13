import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { DefaultTable } from '@/Constant';
import { DefaultTableSubHeading } from '@/Data/CardHeaderCommonData';
import { Col, Card, Table } from 'reactstrap';

const DefaultTableClass = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={DefaultTable} description={DefaultTableSubHeading} />
        <div className='table-responsive'>
          <Table className='table-de'>
            <thead>
              <tr>
                <th scope='col'>{'#'}</th>
                <th scope='col'>{'First'}</th>
                <th scope='col'>{'Last'}</th>
                <th scope='col'>{'Handle'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>{'1'}</th>
                <td>{'Mark'}</td>
                <td>{'Otto'}</td>
                <td>{'@mdo'}</td>
              </tr>
              <tr>
                <th scope='row'>{'2'}</th>
                <td>{'Jacob'}</td>
                <td>{'Thornton'}</td>
                <td>{'@fat'}</td>
              </tr>
              <tr>
                <th scope='row'>{'3'}</th>
                <td>{'Larry'}</td>
                <td>{'the Bird'}</td>
                <td>{'@twitter'}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Card>
    </Col>
  );
};
export default DefaultTableClass;
