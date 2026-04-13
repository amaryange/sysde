import { Card, Col, CardBody } from 'reactstrap';
import OnHoverDropDown from './OnHoverDropDown';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { deafultNavData } from '@/Data/UiKitsData/Navs';
import { Javascript } from '@/Constant';

const DefaultNav = () => {
  return (
    <Col md='6'>
      <Card>
        <CardHeaderCommon title={'Default Nav'} />
        <CardBody>
          <ul className='icon-lists border navs-icon simple-list'>
            {deafultNavData.map((data, index) => (
              <li key={index}>
                <a href={Javascript}>
                  {data.logo}
                  <span>{data.tittle}</span>
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
export default DefaultNav;
