import { AssetsImagePath, Javascript } from '@/Constant';
import { FollowingsData } from '@/Data/SocialApp';
import Image from 'next/image';
import React, { Fragment, useState } from 'react';
import { Col, Card, CardHeader, CardBody, Button, Media } from 'reactstrap';

const Followings = () => {
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
              Followings
            </Button>
          </h5>
        </CardHeader>
        <div className={`collapse ${isShow && 'show'}`} id='collapseicon11'>
          <CardBody className='card-body social-list filter-cards-view'>
            {FollowingsData.map((item, i) => (
              <Media key={i}>
                <img className='img-50 img-fluid m-r-20 rounded-circle' alt='' src={`${AssetsImagePath}/user/${item.img}`} />
                <Media body>
                  <span className='d-block'>{item.name}</span>
                  <a href={Javascript}>Add Friend</a>
                </Media>
              </Media>
            ))}
          </CardBody>
        </div>
      </Card>
    </Col>
  );
};

export default Followings;
