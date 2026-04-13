import React, { Fragment } from 'react';
import { Col, Card } from 'reactstrap';
import PostHeader from '../../Common/PostHeader';
import PostReact from '../../Common/PostReact';
import SocialIcon from '../../Common/SocialIcons';
import Image from 'next/image';
import { AssetsImagePath, ImagePath } from '@/Constant';

const PostThird = () => {
  return (
    <Col sm='12'>
      <Card>
        <div className='profile-post'>
          <PostHeader heading='2 Hours ago' />
          <div className='post-body'>
            <div className='img-container'>
              <div className='my-gallery' id='aniimated-thumbnials'>
                <Image height={2999} width={1102} className='img-fluid rounded' src={`${AssetsImagePath}/user-profile/bg-profile.jpg`} itemProp='thumbnail' alt='gallery' unoptimized/>
              </div>
            </div>
            <br />
            <PostReact h6='+20 people react this post' />
            <SocialIcon />
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default PostThird;
