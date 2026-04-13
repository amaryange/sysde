import { AssetsImagePath } from '@/Constant';
import { Post2Data } from '@/Data/SocialApp';
import Image from 'next/image';
import React from 'react';
import { Media } from 'reactstrap';

const Comments2 = () => {
  return (
    <div className='social-chat'>
      {Post2Data.map((item, i) => (
        <div key={i} className='your-msg'>
          <Media>
            <img className='img-50 img-fluid m-r-20 rounded-circle' alt='user' src={`${AssetsImagePath}/user/1.jpg`} />
            <Media body>
              <span className='f-w-600'>
                {item}&nbsp;
                <span>
                  1 Year Ago <i className='fa fa-reply font-primary' />
                </span>
              </span>
              <p>we are working for the dance and sing songs.this car is very awesome for the youngster.please vote this car and like our post</p>
            </Media>
          </Media>
        </div>
      ))}
    </div>
  );
};

export default Comments2;
