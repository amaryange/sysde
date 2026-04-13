import { Home, Javascript, Library } from '@/Constant';
import { DynamicBreadCrumbData } from '@/Data/BonusUiData/BreadCrumbData';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const DynamicBreadCrumb = () => {
  return DynamicBreadCrumbData.map((color, index) => (
    <Breadcrumb key={index} className={`breadcrumb-colored ${color.olClass}`}>
      <BreadcrumbItem>
        <a href={Javascript} className={color?.texClass}>
          {Home}
        </a>
      </BreadcrumbItem>
      <BreadcrumbItem className={` active ${color?.texClass}`}>{Library}</BreadcrumbItem>
    </Breadcrumb>
  ));
};

export default DynamicBreadCrumb;
