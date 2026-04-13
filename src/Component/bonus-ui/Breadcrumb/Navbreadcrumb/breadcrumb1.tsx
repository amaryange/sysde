import { Bootstrap, Home, Javascript, Library } from '@/Constant';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const Breadcrumb1 = () => {
  return (
    <Breadcrumb className='breadcrumb mb-0'>
      <BreadcrumbItem href={Javascript}>{Home}</BreadcrumbItem>
      <BreadcrumbItem>{Library}</BreadcrumbItem>
      <BreadcrumbItem className='active'>{Bootstrap}</BreadcrumbItem>
    </Breadcrumb>
  );
};

export default Breadcrumb1;
