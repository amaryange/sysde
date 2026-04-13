import React from 'react';
import { Heart, MessageSquare, Share } from 'react-feather';
import CountUp from 'react-countup';
import { Label } from 'reactstrap';
import { Comments, Javascript, Like, share } from '@/Constant';

const SocialIcon = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <ul className='post-comment simple-list flex-row'>
        <li>
          <Label>
            <a href={Javascript}>
              <Heart />
              &nbsp;&nbsp;{Like} <CountUp end={50} duration={5} />
            </a>
          </Label>
        </li>
        <li>
          <Label>
            <a href={Javascript}>
              <MessageSquare />
              &nbsp;&nbsp;{Comments}
              <CountUp end={70} duration={5} />
            </a>
          </Label>
        </li>
        <li>
          <Label>
            <a href={Javascript}>
              <Share />
              &nbsp;&nbsp;{share}
              <CountUp end={20} duration={5} />
            </a>
          </Label>
        </li>
      </ul>
    </>
  );
};

export default SocialIcon;
