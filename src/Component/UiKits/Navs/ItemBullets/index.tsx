import { Fragment } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import OnHoverDropDown from './OnHoverDropDown';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { ItemBulletsNavData } from '@/Data/UiKitsData/Navs';
import { Javascript } from '@/Constant';

const ItemBullets = () => {
  return (
    <Col md='6'>
      <Card>
        <CardHeaderCommon title={'Item Bullets'} />
        <CardBody>
          <div className='border nav-list'>
            <ul className='nav-list-disc'>
              {ItemBulletsNavData.map((data, index) => (
                <li key={index}>
                  <a href={Javascript}>
                    <i className='fa fa-angle-right'></i>
                    <span> {data.tittle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <OnHoverDropDown />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ItemBullets;
