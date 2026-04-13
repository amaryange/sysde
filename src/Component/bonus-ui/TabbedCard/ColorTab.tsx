import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { Contact, Home, Profile } from '@/Constant';
import { TabCardData } from '@/Data/BonusUiData/TabbedCard/TabCardCommon';
import { Fragment, useState } from 'react';
import { Col, Card, CardBody, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

const ColorTabClass = () => {
  const [activeTab, setActiveTab] = useState('1');

  return TabCardData.map((item, i) => (
    <Col lg='12 box-col-12' xl='6 xl-100' key={i}>
      <Card>
        <CardHeaderCommon title='ColorTab' />
        <CardBody>
          <div className='tabbed-card'>
            <Nav className={item.navClass}>
              <NavItem>
                <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                  {Home}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                  {Profile}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                  {Contact}
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId='1'>
                <p className='mb-0'>{item.pare1}</p>
              </TabPane>
              <TabPane tabId='2'>
                <p className='mb-0'>{item.pare2}</p>
              </TabPane>
              <TabPane tabId='3'>
                <p className='mb-0'>{item.pare3}</p>
              </TabPane>
            </TabContent>
          </div>
        </CardBody>
      </Card>
    </Col>
  ));
};

export default ColorTabClass;
