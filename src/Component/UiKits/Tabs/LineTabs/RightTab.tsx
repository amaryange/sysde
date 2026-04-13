import { useState } from 'react';
import { Card, CardBody, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { Javascript } from '@/Constant';
import { RightTabDescription } from '@/Data/CardHeaderCommonData';

const RightTab = () => {
  const [RightLineTab, setRightLineTab] = useState('1');
  const loremConstant =
    "Lorem Ipsum is simply dummy  text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

  return (
    <Col sm='12' xl='6 xl-100'>
      <Card>
        <CardHeaderCommon title='Material Style Right Tab' description={RightTabDescription} />
        <CardBody>
          <Row>
            <Col sm='9'>
              <TabContent activeTab={RightLineTab} className='text-end'>
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
            <Col sm='3' className='tabs-responsive-side'>
              <Nav className='flex-column border-tab nav-right'>
                <NavItem>
                  <NavLink href={Javascript} className={RightLineTab === '1' ? 'active' : ''} onClick={() => setRightLineTab('1')}>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href={Javascript} className={RightLineTab === '2' ? 'active' : ''} onClick={() => setRightLineTab('2')}>
                    Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href={Javascript} className={RightLineTab === '3' ? 'active' : ''} onClick={() => setRightLineTab('3')}>
                    Inbox
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href={Javascript} className={RightLineTab === '4' ? 'active' : ''} onClick={() => setRightLineTab('4')}>
                    Settings
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RightTab;
