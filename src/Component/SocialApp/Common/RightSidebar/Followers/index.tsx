import { AddFriend, Javascript, AssetsImagePath } from '@/Constant';
import { FollowersData } from '@/Data/SocialApp';
import Image from 'next/image';
import { useState } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Collapse, Media } from 'reactstrap';

const Follower = () => {
  const [isToggle, setIsToggle] = useState(true);
  return (
    <Col xl='12' lg='6' sm='6' md='12' className=' box-col-6'>
      <Card>
        <CardHeader>
          <h5 className='p-0'>
            <Button className=' btn-link ps-0' color='transperant' onClick={() => setIsToggle(!isToggle)}>
              Followers
            </Button>
          </h5>
        </CardHeader>
        <Collapse isOpen={isToggle}>
          <CardBody className='social-list filter-cards-view'>
            {FollowersData.map((item, i) => (
              <Media key={i}>
                <img className='img-50 img-fluid m-r-20 rounded-circle' alt='img' src={`${AssetsImagePath}/user/${item.imageName}`} />
                <Media body className='flex-grow-1'>
                  <span className='d-block'>{item.name}</span>
                  <a href={Javascript}>{AddFriend}</a>
                </Media>
              </Media>
            ))}
          </CardBody>
        </Collapse>
      </Card>
    </Col>
  );
};

export default Follower;
