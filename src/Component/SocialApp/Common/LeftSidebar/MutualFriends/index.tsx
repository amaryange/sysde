import { AssetsImagePath, MutualFriends } from '@/Constant';
import { MutualFriendData } from '@/Data/SocialApp';
import Image from 'next/image';
import React, { useState } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Collapse, Form, FormGroup, Input, Media } from 'reactstrap';

const MutualFriend = () => {
  const [isMutual, setIsMutual] = useState(true);
  return (
    <Col xl='12'>
      <Card>
        <CardHeader>
          <h5 className='mb-0'>
            <Button color='link ps-0' onClick={() => setIsMutual(!isMutual)}>
              {MutualFriends}
            </Button>
          </h5>
        </CardHeader>
        <Collapse isOpen={isMutual}>
          <CardBody className='social-status filter-cards-view'>
            <Form>
              <FormGroup>
                <Input className='form-control-social' type='search' placeholder='Search Contacts..' />
              </FormGroup>
            </Form>
            {MutualFriendData.slice(0, 8).map((item, i) => (
              <Media key={i}>
                <img className='img-50 rounded-circle m-r-15 ' src={`${AssetsImagePath}/user/${item.imageName}`} alt='' />
                <div className={`social-status ${item.socialClass}`}></div>
                <Media body className='flex-grow-1'>
                  <span className='f-w-600 d-block'>{item.title}</span>
                  <span className='d-block'>{item.email}</span>
                </Media>
              </Media>
            ))}
          </CardBody>
        </Collapse>
      </Card>
    </Col>
  );
};

export default MutualFriend;
