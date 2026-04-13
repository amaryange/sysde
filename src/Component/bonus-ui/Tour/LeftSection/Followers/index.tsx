import { AddFriend, AssetsImagePath, FollowersConst, Javascript } from '@/Constant';
import { FollowersData } from '@/Data/BonusUiData/Tour';
import Image from 'next/image';
import React, { Fragment, useState } from 'react';
import { Col, Card, CardHeader, CardBody, Button, Media } from 'reactstrap';

const Followers = () => {
  const [isShow, setIsShow] = useState(true);
  const toggleClick = () => {
    setIsShow(!isShow);
  };

  return (
    <Col xl='12' lg='6' md='12' sm='6'>
      <Card>
        <CardHeader>
          <h5 className='p-0'>
            <Button className=' btn-link ps-0' color='transperent' onClick={toggleClick}>
              {FollowersConst}
            </Button>
          </h5>
        </CardHeader>
        <div className={`collapse ${isShow && 'show'}`} id='collapseicon8'>
          <CardBody className='social-list filter-cards-view'>
            {FollowersData.map((item, i) => (
              <Media key={i}>
                <Image height={50} width={50} className='img-50 img-fluid m-r-20 rounded-circle' alt='' src={`${AssetsImagePath}/user/${item.img}.jpg`} unoptimized/>
                <div className='media-body'>
                  <span className='d-block'>{item.name}</span>
                  <a href={Javascript}>{AddFriend}</a>
                </div>
              </Media>
            ))}
          </CardBody>
        </div>
      </Card>
    </Col>
  );
};

export default Followers;
