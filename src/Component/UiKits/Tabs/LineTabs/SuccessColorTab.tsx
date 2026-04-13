import { useState } from 'react';
import { Card, CardBody, Col, Nav, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { Javascript } from '@/Constant';
import { SuccessColorTabDescription } from '@/Data/CardHeaderCommonData';

const SuccessColorTab = () => {
  const [InfoRightLineTab, setInfoRightLineTab] = useState('1');
  const loremConstant =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

  return (
    <Col sm='12' xl='6 xl-100'>
      <Card>
        <CardHeaderCommon title='Material Style Left Tab' description={SuccessColorTabDescription} />
        <CardBody>
          <Row>
            <Col sm='3' className='tabs-responsive-side'>
              <Nav className='flex-column nav-success border-tab nav-left'>
                <NavLink href={Javascript} className={InfoRightLineTab === '1' ? 'active' : ''} onClick={() => setInfoRightLineTab('1')}>
                  Home
                </NavLink>

                <NavLink href={Javascript} className={InfoRightLineTab === '2' ? 'active' : ''} onClick={() => setInfoRightLineTab('2')}>
                  Profile
                </NavLink>

                <NavLink href={Javascript} className={InfoRightLineTab === '3' ? 'active' : ''} onClick={() => setInfoRightLineTab('3')}>
                  Inbox
                </NavLink>

                <NavLink href={Javascript} className={InfoRightLineTab === '4' ? 'active' : ''} onClick={() => setInfoRightLineTab('4')}>
                  Settings
                </NavLink>
              </Nav>
            </Col>
            <Col sm='9'>
              <TabContent activeTab={InfoRightLineTab}>
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

export default SuccessColorTab;
