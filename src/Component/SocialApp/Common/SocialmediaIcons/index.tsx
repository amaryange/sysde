import { Javascript } from '@/Constant';
import { SocialMediaIconsData } from '@/Data/SocialApp';
import { SocialMediaIconsProps } from '@/Type/SideBarType';
import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const SocialMediaIcons = (listClassName: SocialMediaIconsProps) => {
  return (
    <ListGroup className=' flex-row card-social'>
      {SocialMediaIconsData.map((item, i) => (
        <ListGroupItem key={i}>
          <a href={Javascript}>
            <i className={`fa ${item} me-0`}></i>
          </a>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default SocialMediaIcons;
