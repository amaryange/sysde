import { AssetsImagePath } from '@/Constant';
import { PostReactType } from '@/Type/SideBarType';
import Image from 'next/image';
import React from 'react';

const PostReact = ({ h6 }: PostReactType) => {
  const data = [2, 3, 4];
  return (
    <div className='post-react'>
      <ul className='flex-row simple-list'>
        {data.map((item, index) => (
          <li key={index}>
            <img className='rounded-circle' src={`${AssetsImagePath}/user/${item}.jpg`} alt='' />
          </li>
        ))}
      </ul>
      <h6>{h6}</h6>
    </div>
  );
};

export default PostReact;
