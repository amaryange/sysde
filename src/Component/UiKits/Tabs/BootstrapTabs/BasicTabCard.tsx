import { useState } from 'react';
import { Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { Javascript } from '@/Constant';

const BasicTabCard = () => {
  const [BasicTab, setBasicTab] = useState('1');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const loremConstant =
    "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummytext ever since the 1500s, when an unknown printer took a galleyof type and scrambled it to make a type specimen book. It hassurvived not only five centuries, but also the leap intoelectronic typesetting, remaining essentially unchanged. It waspopularised in the 1960s with the release of Letraset sheetscontaining Lorem Ipsum passages, and more recently with desktoppublishing software like Aldus PageMaker including versions ofLorem Ipsum";
  return (
    <Col sm='12' xl='6 xl-100'>
      <Card>
        <CardHeaderCommon title='Basic Tabs' />
        <CardBody>
          <Nav tabs>
            <NavItem>
              <NavLink href={Javascript} className={BasicTab === '1' ? 'active' : ''} onClick={() => setBasicTab('1')}>
                Home
              </NavLink>
            </NavItem>
            <Dropdown className='nav-item' isOpen={dropdownOpen} toggle={toggle}>
              <NavItem>
                <DropdownToggle className='nav-link' tag='a' href={Javascript} color='default' caret>
                  Dropdown
                </DropdownToggle>
                <DropdownMenu>
                  <NavLink href={Javascript} className={BasicTab === '2' ? 'active' : ''} onClick={() => setBasicTab('2')}>
                    Action
                  </NavLink>
                  <DropdownItem href={Javascript}>Another action</DropdownItem>
                  <DropdownItem href={Javascript}>Something else here</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href={Javascript}>Separated link</DropdownItem>
                </DropdownMenu>
              </NavItem>
            </Dropdown>
            <NavItem>
              <NavLink href={Javascript} className={BasicTab === '3' ? 'active' : ''} onClick={() => setBasicTab('3')}>
                Profile
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={Javascript} className={BasicTab === '4' ? 'active' : ''} onClick={() => setBasicTab('4')}>
                Contact
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={BasicTab}>
            <TabPane tabId='1'>
              <p className='mb-0 m-t-30'>1{loremConstant}</p>
            </TabPane>
            <TabPane tabId='2'>
              <p className='mb-0 m-t-30'>2{loremConstant}</p>
            </TabPane>
            <TabPane tabId='3'>
              <p className='mb-0 m-t-30'>3{loremConstant} </p>
            </TabPane>
            <TabPane tabId='4'>
              <p className='mb-0 m-t-30'>4{loremConstant}</p>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicTabCard;
