import { Col, Card, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import DynamicBreadCrumb from './DynamicBreadCrumb';
import { Home, Javascript, Library } from '@/Constant';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { ColoredNavigationDescription } from '@/Data/CardHeaderCommonData';

const ColoredNavigation = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title='Colored breadcrumb' description={ColoredNavigationDescription} />
        <CardBody>
          <Breadcrumb className='breadcrumb-colored m-b-30 bg-primary'>
            <BreadcrumbItem>
              <a href={Javascript}>{Home}</a>
            </BreadcrumbItem>
            <BreadcrumbItem className=' active'>{Library}</BreadcrumbItem>
          </Breadcrumb>
          <DynamicBreadCrumb />
        </CardBody>
      </Card>
    </Col>
  );
};
export default ColoredNavigation;
