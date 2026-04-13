import { Col, Card, Table, Row } from 'reactstrap';
import CaptionTBody from './CaptionTBody';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { Caption } from '@/Constant';
import { CaptionClassDescription } from '@/Data/CardHeaderCommonData';

const CaptionClass = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={Caption} description={CaptionClassDescription} />
        <Row className='card-block'>
          <Col sm='12' lg='12' xl='12'>
            <div className='table-responsive'>
              <Table>
                <caption>{'List of users'}</caption>
                <thead>
                  <tr>
                    <th scope='col'>{'#'}</th>
                    <th scope='col'>{'First Name'}</th>
                    <th scope='col'>{'Last Name'}</th>
                    <th scope='col'>{'Username'}</th>
                  </tr>
                </thead>
                <CaptionTBody />
              </Table>
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default CaptionClass;
