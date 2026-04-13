import React, { useState } from 'react';
import { Col, Card, CardHeader, CardBody, Media, Collapse, Button } from 'reactstrap';
import { AssetsImagePath, MyProfile } from '@/Constant';
import LikeAndViewButton from './LikeAndViewButton';
import ImageRow from './ImageRow';
import MyPageSection from './MyPage';

const MyProfileSection = () => {
  const [isProfile, setIsProfile] = useState(true);
  return (
    <>
      <Col xl='12'>
        <Card>
          <CardHeader>
            <h5 className='mb-0'>
              <Button color='link ps-0' onClick={() => setIsProfile(!isProfile)}>
                {MyProfile}
              </Button>
            </h5>
          </CardHeader>
          <Collapse isOpen={isProfile}>
            <CardBody className='socialprofile filter-cards-view'>
              <MyPageSection />
              <LikeAndViewButton />
              <ImageRow />
            </CardBody>
          </Collapse>
        </Card>
      </Col>
      <Col xl='12'>
        <Card>
          <Media className='img-fluid' alt='' src={`${AssetsImagePath}/social-app/timeline-3.png`} />
        </Card>
      </Col>
    </>
  );
};

export default MyProfileSection;
