import { useState } from 'react';
import { Card, CardBody, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { BottomTabDescription } from '@/Data/CardHeaderCommonData';
import { Javascript } from '@/Constant';

const BottomTab = () => {
  const [BottomLineTab, setBottomLineTab] = useState('1');
  const loremConstant =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

  return (
    <Col sm='12' xl='6 xl-100'>
      <Card>
        <CardHeaderCommon title={'Material Style Bottom Tab'} description={BottomTabDescription} />
        <CardBody>
          <TabContent activeTab={BottomLineTab}>
            <TabPane tabId='1'>
              <p>1{loremConstant}</p>
            </TabPane>
            <TabPane tabId='2'>
              <p>2{loremConstant}</p>
            </TabPane>
            <TabPane tabId='3'>
              <p>3{loremConstant}</p>
            </TabPane>
          </TabContent>
          <Nav className='border-tab' tabs>
            <NavItem>
              <NavLink href={Javascript} className={BottomLineTab === '1' ? 'active' : ''} onClick={() => setBottomLineTab('1')}>
                <i className='icofont icofont-ui-home'></i>Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={Javascript} className={BottomLineTab === '2' ? 'active' : ''} onClick={() => setBottomLineTab('2')}>
                <i className='icofont icofont-man-in-glasses'></i>Profile
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={Javascript} className={BottomLineTab === '3' ? 'active' : ''} onClick={() => setBottomLineTab('3')}>
                <i className='icofont icofont-contacts'></i>Contact
              </NavLink>
            </NavItem>
          </Nav>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BottomTab;
