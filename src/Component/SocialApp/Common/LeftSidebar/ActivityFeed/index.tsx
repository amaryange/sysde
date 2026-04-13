import { ActivityFeed, Javascript, AssetsImagePath } from '@/Constant';
import { ActivityFeedData } from '@/Data/SocialApp';
import Image from 'next/image';
import React, { useState } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Collapse, Media } from 'reactstrap';

const ActivityFeedSection = () => {
  const [isActivity, setIsActivity] = useState(true);
  return (
    <Col xl='12'>
      <Card>
        <CardHeader>
          <h5 className='mb-0'>
            <Button color='link ps-0' onClick={() => setIsActivity(!isActivity)}>
              {ActivityFeed}
            </Button>
          </h5>
        </CardHeader>
        <Collapse isOpen={isActivity}>
          <CardBody className='social-status filter-cards-view'>
            {ActivityFeedData.map((item) => (
              <Media key={item.id}>
                <img className='img-50 rounded-circle m-r-15' src={`${AssetsImagePath}/user/${item.image}`} alt='' />
                <Media body>
                  <span className='f-w-600 d-block'>{item.title}</span>
                  <p>
                    {item.desc} <a href={Javascript}>{'Photo'}</a>
                  </p>
                  <span className='light-span'>{item.time}</span>
                </Media>
              </Media>
            ))}
          </CardBody>
        </Collapse>
      </Card>
    </Col>
  );
};

export default ActivityFeedSection;
