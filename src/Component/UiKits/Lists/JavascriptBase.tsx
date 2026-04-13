import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { Home, Messages, Profile, Settings } from '@/Constant';
import { useState } from 'react';
import { Card, CardBody, Col, ListGroup, ListGroupItem, Row, TabContent, TabPane } from 'reactstrap';

const JavascriptBase = () => {
  const [activeTab, setActiveTab] = useState('1');
  const loremConstant =
    "1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  return (
    <Col sm='12' xl='12'>
      <Card>
        <CardHeaderCommon title={'JavaScriptBehavior'} />
        <CardBody>
          <Row>
            <Col sm='4 tab-javascript'>
              <ListGroup className='nav-primary nav-pills'>
                <ListGroupItem className={activeTab === '1' ? 'list-group-item-action active' : ''} onClick={() => setActiveTab('1')}>
                  {Home}
                </ListGroupItem>
              </ListGroup>
              <ListGroup>
                <ListGroupItem className={activeTab === '2' ? 'list-group-item-action active' : ''} onClick={() => setActiveTab('2')}>
                  {Profile}
                </ListGroupItem>
              </ListGroup>
              <ListGroup>
                <ListGroupItem className={activeTab === '3' ? 'list-group-item-action active' : ''} onClick={() => setActiveTab('3')}>
                  {Messages}
                </ListGroupItem>
              </ListGroup>
              <ListGroup>
                <ListGroupItem className={activeTab === '4' ? 'list-group-item-action active' : ''} onClick={() => setActiveTab('4')}>
                  {Settings}
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col sm='8'>
              <TabContent activeTab={activeTab} id='nav-tabContent'>
                <TabPane tabId='1'>1{loremConstant}</TabPane>
                <TabPane tabId='2'>2{loremConstant}</TabPane>
                <TabPane tabId='3'>3{loremConstant}</TabPane>
                <TabPane tabId='4'>4{loremConstant}</TabPane>
              </TabContent>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default JavascriptBase;
