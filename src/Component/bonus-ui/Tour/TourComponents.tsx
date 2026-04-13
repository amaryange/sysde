import React, { useEffect } from 'react';
import { Container, Row } from 'reactstrap';
import UserProfile from './UserProfile';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';

const TourComponents = () => {
   return (
    <>
      <Breadcrumbs mainTitle='Tour' parent='Bonus Ui' title='Tour' />
      <Container fluid>
        <div className='user-profile tour'>
          <Row>
            <UserProfile />
            <LeftSection />
            <RightSection />
          </Row>
        </div>
      </Container>
    </>
  );
};

export default TourComponents;
