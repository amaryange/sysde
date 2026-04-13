import { Bootstrap, Home, Javascript, Library } from '@/Constant';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const Breadcrumb2 = () => {
  return (
    <Breadcrumb className='breadcrumb-icon'>
      <BreadcrumbItem href={Javascript}>{Home}</BreadcrumbItem>
      <BreadcrumbItem href={Javascript}>{Library}</BreadcrumbItem>
      <BreadcrumbItem className='active'>{Bootstrap}</BreadcrumbItem>
    </Breadcrumb>
  );
};

export default Breadcrumb2;
