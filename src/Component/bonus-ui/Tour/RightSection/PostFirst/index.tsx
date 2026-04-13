import React from 'react';
import { Col, Card } from 'reactstrap';
import { AssetsImagePath, ImagePath } from '@/Constant';
import PostHeader from '../../Common/PostHeader';
import PostReact from '../../Common/PostReact';
import SocialIcon from '../../Common/SocialIcons';
import Image from 'next/image';

const PostFirst = () => {
  return (
    <Col sm='12' data-intro='This is the your first Post' className='step5'>
      <Card>
        <div className='profile-post'>
          <PostHeader heading='22 Hours ago' />
          <div className='post-body'>
            <div className='img-container'>
              <div className='my-gallery' id='aniimated-thumbnials'>
                <Image height={317} width={1102} itemProp='thumbnail' className='img-fluid rounded media' src={`${AssetsImagePath}/user-profile/post1.jpg`} alt='gallery' unoptimized/>
              </div>
            </div>
            <br />
            <PostReact h6={'+5 people react this post'} />
            <SocialIcon />
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default PostFirst;
