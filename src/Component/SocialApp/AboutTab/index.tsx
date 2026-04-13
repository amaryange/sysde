import { Col, Row } from 'reactstrap';
import LeftBar from '../Common/LeftSidebar';
import RightSideBar from '../Common/RightSidebar';
import PeopleYouMayKnow from './PeopleYouMayKnow';
import HobbiesAndInterests from './HobbiesAndIntrests';
import EducationAndEmployment from './Education';
import ActivityLog from './ActivityLog';

const AboutTab = () => {
  return (
    <Row>
      <Col xl='3' lg='12' md='5' className='box-col-4'>
        <div className='default-according style-1 faq-accordion job-accordion'>
          <Row>
            <LeftBar />
          </Row>
        </div>
      </Col>
      <Col xl='6' lg='12' md='7' className='box-col-8'>
        <Row>
          <PeopleYouMayKnow heading={'People You May Know'} />
          <HobbiesAndInterests />
          <PeopleYouMayKnow heading={'Viewed Your Profile'} />
          <EducationAndEmployment />
          <ActivityLog />
        </Row>
      </Col>
      <Col xl='3 ' className='box-col-12'>
        <div className='default-according style-1 faq-accordion job-accordion'>
          <Row>
            <RightSideBar />
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default AboutTab;
