import { AssetsImagePath, FriendsConst } from '@/Constant';
import { FriendsData } from '@/Data/BonusUiData/Tour';
import Image from 'next/image';
import React, { Fragment, useState } from 'react';
import { Col, Card, CardHeader, CardBody, Button } from 'reactstrap';

const Friends = () => {
  const [isShow, setIsShow] = useState(true);
  const toggleClick = () => {
    setIsShow(!isShow);
  };

  return (
    <Col xl='12' lg='6' md='12' sm='6'>
      <Card>
        <CardHeader>
          <h5 className='p-0'>
            <Button className='btn-link ps-0' color='transperant' onClick={toggleClick}>
              {FriendsConst}
            </Button>
          </h5>
        </CardHeader>
        <div className={`collapse ${isShow && 'show'}`} id='collapseicon13'>
          <CardBody className='avatar-showcase filter-cards-view'>
            {FriendsData.map((item, index) => (
              <div className='d-inline-block friend-pic' key={index}>
                <img className='img-50 rounded-circle' src={`${AssetsImagePath}/social-app/post-${item}.png`} alt='user' />
              </div>
            ))}
          </CardBody>
        </div>
      </Card>
    </Col>
  );
};

export default Friends;
