import React from 'react';
import { Button, ButtonGroup, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';
import SplitButtonDropdown from './SplitButtonDropdown';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { SplitData } from '@/Data/UiKitsData/Dropdown';
import { DropdownSplitButton, Javascript } from '@/Constant';

const SplitButton = () => {
  return (
    <Col sn='12' xl='12'>
      <Card>
        <CardHeaderCommon title={DropdownSplitButton} />
        <CardBody className='dropdown-basic'>
          <ButtonGroup>
            <Button color='primary'>Primary Button</Button>
            <Dropdown className='separated-btn'>
              <Button color='primary'>
                <i className='icofont icofont-arrow-down'></i>
              </Button>
              <DropdownMenu className='dropdown-content digits'>
                <DropdownItem href={Javascript}>Link 1</DropdownItem>
                <DropdownItem href={Javascript}>Link 1</DropdownItem>
                <DropdownItem href={Javascript}>Link 1</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </ButtonGroup>
          {SplitData.map((items, index) => (
            <SplitButtonDropdown key={index} item={items} />
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default SplitButton;
