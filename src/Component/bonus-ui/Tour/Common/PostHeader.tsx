import React from 'react';
import { Media } from 'reactstrap';
import { AssetsImagePath, Javascript } from '@/Constant';
import Image from 'next/image';
import { postHeader } from '@/Type/SideBarType';

const PostHeader = ({ heading }: postHeader) => {
  return (
    <div className='post-header'>
      <Media>
        <img className='img-thumbnail rounded-circle me-3' src={`${AssetsImagePath}/user/7.jpg`} alt='Generic placeholder image' />
        <div className='media-body align-self-center'>
          <a href={Javascript}>
            <h5 className='user-name'>Emay Walter</h5>
          </a>
          <h6>{heading}</h6>
        </div>
      </Media>
      <div className='post-setting'>
        <i className='fa fa-ellipsis-h'></i>
      </div>
    </div>
  );
};

export default PostHeader;
