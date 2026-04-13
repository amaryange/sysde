import { AssetsImagePath } from '@/Constant';
import { MyProfileSectionData } from '@/Data/SocialApp';
import Image from 'next/image';
import React from 'react';
import { UncontrolledTooltip } from 'reactstrap';

const ImageRow = () => {
  const error = console.error;
  console.error = (...args: any) => {
    if (/defaultProps/.test(args[0])) return;
    error(...args);
  };
  return (
    <div className='customers text-center social-group'>
      <ul>
        {MyProfileSectionData.map((item, i) => (
          <li key={i} className='d-inline-block'>
            <img className='img-30 rounded-circle' src={`${AssetsImagePath}/user/${item.image}`} alt='' id={item.id} />
            <UncontrolledTooltip placement='top' target={item.id}>
              {item.name}
            </UncontrolledTooltip>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageRow;
