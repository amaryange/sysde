import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { Contact, Home, Javascript, Profile } from '@/Constant';
import { useState } from 'react';
import { Card, CardBody, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';

const PillTab = () => {
  const [pillTab, setpillTab] = useState('1');
  const loremConstant =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages";

  return (
    <Col sm='12' xl='6 xl-100 box-col-12'>
      <Card>
        <CardHeaderCommon title={'Pill Tabs'} />
        <CardBody>
          <Nav className='nav-pills nav-primary'>
            <NavItem>
              <NavLink href={Javascript} className={pillTab === '1' ? 'active' : ''} onClick={() => setpillTab('1')}>
                {Home}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={Javascript} className={pillTab === '2' ? 'active' : ''} onClick={() => setpillTab('2')}>
                {Profile}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={Javascript} className={pillTab === '3' ? 'active' : ''} onClick={() => setpillTab('3')}>
                {Contact}
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={pillTab}>
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

export default PillTab;
