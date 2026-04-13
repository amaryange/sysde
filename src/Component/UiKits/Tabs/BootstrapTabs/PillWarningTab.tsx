import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { Javascript } from '@/Constant';
import { useState } from 'react';
import { Card, CardBody, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';

const PillWarningTab = () => {
  const [warningTab, setWarningTab] = useState('1');
  const loremConstant =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

  return (
    <Col sm='12' xl='6 xl-100'>
      <Card>
        <CardHeaderCommon title={'Primary Color'} />
        <CardBody>
          <Nav className='nav-warning' tabs>
            <NavItem>
              <NavLink href={Javascript} className={warningTab === '1' ? 'active' : ''} onClick={() => setWarningTab('1')}>
                <i className='icofont icofont-ui-home'></i>Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={Javascript} className={warningTab === '2' ? 'active' : ''} onClick={() => setWarningTab('2')}>
                <i className='icofont icofont-man-in-glasses'></i>Profile
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={Javascript} className={warningTab === '3' ? 'active' : ''} onClick={() => setWarningTab('3')}>
                <i className='icofont icofont-contacts'></i>Contact
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={warningTab}>
            <TabPane tabId='1'>
              <p className='mb-0 m-t-30'>1{loremConstant}</p>
            </TabPane>
            <TabPane tabId='2'>
              <p className='mb-0 m-t-30'>2{loremConstant}</p>
            </TabPane>
            <TabPane tabId='3'>
              <p className='mb-0 m-t-30'>3{loremConstant}</p>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PillWarningTab;
