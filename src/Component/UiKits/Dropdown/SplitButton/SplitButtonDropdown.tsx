import { Javascript } from '@/Constant';
import React from 'react';
import { Button, ButtonGroup, Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';
import { SplitButtonDropdownType } from '@/Type/SideBarType';
const SplitButtonDropdown = ({ item }: SplitButtonDropdownType) => {
  return (
    <ButtonGroup>
      <Button color={item.btnColor}>{item.btnText}</Button>
      <Dropdown className='separated-btn'>
        <Button color={item.btnColor}>
          <i className='icofont icofont-arrow-down'></i>
        </Button>
        <DropdownMenu className='dropdown-content digits'>
          {item.items.map((item, index) => (
            <DropdownItem href={Javascript} key={index}>
              {item.item}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </ButtonGroup>
  );
};

export default SplitButtonDropdown;
