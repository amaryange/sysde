import { Col, Card, Table, Row } from 'reactstrap';
import ResponsiveClassTbody from './ResponsiveClassTbody';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { ResponsiveClassDescription } from '@/Data/CardHeaderCommonData';
import { ResponsiveTables } from '@/Constant';

const ResponsiveClass = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon description={ResponsiveClassDescription} title={ResponsiveTables} />
        <Row className='card-block'>
          <Col sm='12' lg='12' xl='12'>
            <div className='table-responsive'>
              <Table>
                <thead>
                  <tr>
                    <th scope='col'>{'#'}</th>
                    <th scope='col'>{'Table heading'}</th>
                    <th scope='col'>{'Table heading'}</th>
                    <th scope='col'>{'Table heading'}</th>
                    <th scope='col'>{'Table heading'}</th>
                    <th scope='col'>{'Table heading'}</th>
                    <th scope='col'>{'Table heading'}</th>
                    <th scope='col'>{'Table heading'}</th>
                    <th scope='col'>{'Table heading'}</th>
                    <th scope='col'>{'Table heading'}</th>
                    <th scope='col'>{'Table heading'}</th>
                    <th scope='col'>{'Table heading'}</th>
                    <th scope='col'>{'Table heading'}</th>
                    <th scope='col'>{'Table heading'}</th>
                    <th scope='col'>{'Table heading'}</th>
                  </tr>
                </thead>
                <ResponsiveClassTbody />
              </Table>
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};
export default ResponsiveClass;
