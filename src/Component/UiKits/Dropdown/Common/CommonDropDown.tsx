import React, { Fragment } from 'react';
import { Button, ButtonGroup, Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';
import { Javascript } from '@/Constant';
import { CommonDropType } from '@/Type/SideBarType';

const CommonDropDown = ({ item }: CommonDropType) => {
  return (
    <Dropdown>
      <ButtonGroup className='mb-0'>
        <Button className={`dropbtn ${item.btnClass}`} color={item.btnColor}>
          {item.btnText}
          <span>
            <i className='icofont icofont-arrow-down'></i>
          </span>
        </Button>
        <DropdownMenu className='dropdown-content'>
          {item.items.map((element, index) => (
            <Fragment key={index}>
              {element.item ? <DropdownItem href={Javascript}>{element.item}</DropdownItem> : ''}
              {element.divider ? <DropdownItem divider /> : ''}
            </Fragment>
          ))}
        </DropdownMenu>
      </ButtonGroup>
    </Dropdown>
  );
};

export default CommonDropDown;
