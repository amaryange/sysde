import React from 'react';
import { Button, ButtonGroup, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { Javascript, RoundedDropdown } from '@/Constant';
import { RoundedData } from '@/Data/UiKitsData/Dropdown';
import CommonDropDown from '../Common/CommonDropDown';

const Rounded = () => {
  return (
    <Col sn='12' xl='12'>
      <Card>
        <CardHeaderCommon title={RoundedDropdown} />
        <CardBody className='dropdown-basic'>
          <Dropdown>
            <ButtonGroup className='mb-0'>
              <Button className='dropbtn btn-round rounded-pill' color={'primary'}>
                Primary button
                <span>
                  <i className='icofont icofont-arrow-down'></i>
                </span>
              </Button>
              <DropdownMenu className='dropdown-content'>
                <DropdownItem href={Javascript}>Action</DropdownItem>
                <DropdownItem href={Javascript}>Another Action</DropdownItem>
                <DropdownItem href={Javascript}>Something Else Here</DropdownItem>
                <DropdownItem href={Javascript}>Separated Link</DropdownItem>
              </DropdownMenu>
            </ButtonGroup>
          </Dropdown>
          {RoundedData.map((items, index) => (
            <CommonDropDown key={index} item={items} />
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default Rounded;
