import React, { Fragment, useEffect, useState } from 'react';
import { MENUITEMS } from '@/Data/SidebarData';
import { MenuItem } from '@/Type/SideBarType';
import SidebarMenuDropDown from './SidebarMenuDropDown';
import { usePathname } from 'next/navigation';

const SidebarMenuList = () => {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname ? pathname : '');
  const [prev, setPrev] = useState<number>(0);
  const [linkActive, setLinkActive] = useState(active.split('/')[active.split('/').length - 1]);
  const handleOpen = (title: string | undefined = '', level: number) => {
    if (active.includes(title)) {
      if (active.includes('/')) {
        let tempt = active.split('/');
        tempt.splice(level, active.length - level);
        setActive(tempt.join('/'));
      } else {
        setActive('');
      }
    } else {
      if (level < active.split('/').length) {
        setActive(title);
      } else {
        const tempt = active;
        const concatString = tempt.concat(`/${title}`);
        setActive(concatString);
      }
    }
  };
  return MENUITEMS.map((item: MenuItem, index) => {
    return (
      <Fragment key={index}>
        <li className='sidebar-main-title'>
          <div>
            <h6>{item.title}</h6>
          </div>
        </li>
        <SidebarMenuDropDown linkActive={linkActive} setLinkActive={setLinkActive} setActive={setActive} active={active} items={item.Items} level={0} handleOpen={handleOpen} />
      </Fragment>
    );
  });
};

export default SidebarMenuList;
