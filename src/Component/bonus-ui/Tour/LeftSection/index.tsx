import React from 'react';
import { Col, Row } from 'reactstrap';
import AboutMe from './AboutMe';
import Followers from './Followers';
import Followings from './Following';
import LatestPhotos from './LatestPhotos';
import Friends from './Friends';

const LeftSection = () => {
  return (
    <Col xl='3' lg='12' md='5'>
      <div className='default-according style-1 faq-accordion job-accordion'>
        <Row>
          <AboutMe />
          <Followers />
          <Followings />
          <LatestPhotos />
          <Friends />
        </Row>
      </div>
    </Col>
  );
};

export default LeftSection;
