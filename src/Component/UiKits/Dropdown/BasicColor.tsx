import React from 'react';
import { Button, ButtonGroup, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';
import { Action, AnotherAction, BasicColorDropdown, Javascript, SomethingElseHere } from '../../../Constant';
import CommonDropDown from './Common/CommonDropDown';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { BasicColorData } from '@/Data/UiKitsData/Dropdown';

const BasicColor = () => {
  return (
    <Col sn='12' xl='12'>
      <Card>
        <CardHeaderCommon title={BasicColorDropdown} />
        <CardBody className='dropdown-basic'>
          <Dropdown>
            <ButtonGroup className=' mb-0'>
              <Button color='primary' className='dropbtn'>
                Action{' '}
                <span>
                  <i className='icofont icofont-arrow-down'></i>
                </span>
              </Button>
              <DropdownMenu className='dropdown-content'>
                <DropdownItem href={Javascript}>{Action}</DropdownItem>
                <DropdownItem href={Javascript}>{AnotherAction}</DropdownItem>
                <DropdownItem href={Javascript}>{SomethingElseHere}</DropdownItem>
                <DropdownItem href={Javascript}>{'Separated Link'}</DropdownItem>
              </DropdownMenu>
            </ButtonGroup>
          </Dropdown>
          {BasicColorData.map((items, index) => (
            <CommonDropDown key={index} item={items} />
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicColor;
