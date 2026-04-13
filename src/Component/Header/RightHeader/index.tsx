import React from 'react';
import { Col } from 'reactstrap';
import MoonLight from './MoonLight';
import Notifications from './Notifications';
import { MoreHorizontal } from 'react-feather';
import { useHeaderStore } from '../../../Store/useHeaderStore';

const RightHeader = () => {
  const headerToggle  = useHeaderStore((s) => s.headerToggle);
  const toggleHeader  = useHeaderStore((s) => s.toggleHeader);

  return (
    <>
      <Col className='nav-right pull-right right-menu p-0'>
        <ul className={`nav-menus ${headerToggle ? 'open' : ''}`}>
          <Notifications />
          <MoonLight />
        </ul>
      </Col>
      <div className='d-lg-none mobile-toggle pull-right w-auto' onClick={toggleHeader}>
        <MoreHorizontal />
      </div>
    </>
  );
};

export default RightHeader;
