import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { Contact, Home, Profile } from '@/Constant';
import { TabCardData } from '@/Data/BonusUiData/TabbedCard/TabCardCommon';
import { useState } from 'react';
import { Col, Card, CardBody, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

const TabCardCommonClass = () => {
  const [activeTab, setActiveTab] = useState('1');

  return TabCardData.map((item, i) => (
    <Col lg='12' className='box-col-12' xl='6' key={i}>
      <Card>
        <CardHeaderCommon title='Tabs With Icon' />
        <CardBody>
          <div className='tabbed-card'>
            <Nav className={item.navClass}>
              <NavItem>
                <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                  <i className='icofont icofont-ui-home'></i>
                  {Home}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                  <i className='icofont icofont-man-in-glasses'></i>
                  {Profile}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                  <i className='icofont icofont-contacts'></i>
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

export default TabCardCommonClass;
