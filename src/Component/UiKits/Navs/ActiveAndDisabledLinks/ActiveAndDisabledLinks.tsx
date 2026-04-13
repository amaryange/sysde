import { Card, CardBody, Col } from 'reactstrap';
import OnHoverDropDown from './OnHoverDropDown';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { ACtivNavData } from '@/Data/UiKitsData/Navs';
import { Javascript } from '@/Constant';

const ActiveAndDisabledLinks = () => {
  return (
    <Col lg='6'>
      <Card className='height-equal' style={{ minHeight: '638px' }}>
        <CardHeaderCommon title='Active and Disabled Links' />
        <CardBody>
          <ul className='icon-lists border navs-icon simple-list'>
            {ACtivNavData.map((data, index) => (
              <li key={index}>
                <a href={Javascript} className={data?.aClassName}>
                  {data.logo}
                  <span> {data.tittle}</span>
                </a>
              </li>
            ))}
          </ul>
          <OnHoverDropDown />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ActiveAndDisabledLinks;
