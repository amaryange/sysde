import { Data, Home, Javascript, Library } from '@/Constant';
import { Breadcrumb, BreadcrumbItem, CardBody } from 'reactstrap';

const BreadcrumbCardBody = () => {
  return (
    <CardBody>
      <Breadcrumb className=' p-0'>
        <BreadcrumbItem className=' active'>{Home}</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb className=' p-0'>
        <BreadcrumbItem>
          <a href={Javascript}>{Home}</a>
        </BreadcrumbItem>
        <BreadcrumbItem className=' active'>{Library}</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb className=' p-0'>
        <BreadcrumbItem>
          <a href={Javascript}>{Home}</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href={Javascript}>{Library}</a>
        </BreadcrumbItem>
        <BreadcrumbItem className=' active'>{Data}</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb className=' p-0 mb-0'>
        <BreadcrumbItem>
          <a href={Javascript}>
            <i className='fa fa-home'></i>
          </a>
        </BreadcrumbItem>
        <BreadcrumbItem>{Library}</BreadcrumbItem>
        <BreadcrumbItem className=' active'>{Data}</BreadcrumbItem>
      </Breadcrumb>
    </CardBody>
  );
};

export default BreadcrumbCardBody;
