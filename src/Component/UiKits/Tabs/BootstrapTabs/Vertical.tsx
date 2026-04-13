import { useState } from 'react';
import { Card, CardBody, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { Javascript } from '@/Constant';

const Vertical = () => {
  const [VerticleTab, setVerticleTab] = useState('1');
  const loremConstant =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";

  return (
    <Col sm='12' xl='6 xl-100 box-col-12'>
      <Card>
        <CardHeaderCommon title={'Tabs Vertical'} />
        <CardBody>
          <Row>
            <Col sm='3' xs='12'>
              <Nav className='nav flex-column nav-pills nav-primary'>
                <NavItem>
                  <NavLink href={Javascript} className={VerticleTab === '1' ? 'active' : ''} onClick={() => setVerticleTab('1')}>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href={Javascript} className={VerticleTab === '2' ? 'active' : ''} onClick={() => setVerticleTab('2')}>
                    Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href={Javascript} className={VerticleTab === '3' ? 'active' : ''} onClick={() => setVerticleTab('3')}>
                    Messages
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href={Javascript} className={VerticleTab === '4' ? 'active' : ''} onClick={() => setVerticleTab('4')}>
                    Settings
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col sm='9' xs='12'>
              <TabContent activeTab={VerticleTab}>
                <TabPane tabId='1'>
                  <p>1{loremConstant}</p>
                </TabPane>
                <TabPane tabId='2'>
                  <p>2{loremConstant}</p>
                </TabPane>
                <TabPane tabId='3'>
                  <p>3{loremConstant}</p>
                </TabPane>
                <TabPane tabId='4'>
                  <p>4{loremConstant}</p>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Vertical;
