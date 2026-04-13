import { Card, Col, CardBody, Row } from 'reactstrap';
import ToggleSubNav from './ToggleSubNav';
import DynamicNav from './DynamicNav';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { StaticSubNav } from '@/Constant';

const SubNav = () => {
  return (
    <Col xl='6' className='xl-60' lg='12'>
      <Card>
        <CardHeaderCommon title={'Sub Nav'} />
        <CardBody>
          <Row>
            <Col lg='6'>
              <div>
                <h5>{StaticSubNav}</h5>
              </div>
              <DynamicNav />
            </Col>
            <ToggleSubNav />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
export default SubNav;
