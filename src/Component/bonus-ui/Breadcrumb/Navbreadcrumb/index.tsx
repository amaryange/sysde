import { Card, CardBody, Col } from 'reactstrap';
import Breadcrumb1 from './breadcrumb1';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { NavBreadcrumbDescription } from '@/Data/CardHeaderCommonData';
import Breadcrumb2 from './Breadcrumb2';
import Breadcrumb3 from './Breadcrumb3';

const NavBreadcrumb = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title='Nav breadcrumb' description={NavBreadcrumbDescription} />
        <CardBody>
          <Breadcrumb1 />
          <Breadcrumb2 />
          <Breadcrumb3 />
        </CardBody>
      </Card>
    </Col>
  );
};

export default NavBreadcrumb;
