import { Bootstrap, Home, Javascript, Library } from '@/Constant';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const Breadcrumb3 = () => {
  return (
    <Breadcrumb className='breadcrumb-no-divider mb-0'>
      <BreadcrumbItem href={Javascript}>{Home}</BreadcrumbItem>
      <BreadcrumbItem href={Javascript}>{Library}</BreadcrumbItem>
      <BreadcrumbItem className='active'>{Bootstrap}</BreadcrumbItem>
    </Breadcrumb>
  );
};

export default Breadcrumb3;
