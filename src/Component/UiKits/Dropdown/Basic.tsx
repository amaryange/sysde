import React from 'react';
import { Button, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { Action, AnotherAction, BasicDropdown, DropdownButton, Javascript, SomethingElseHere } from '@/Constant';

const Basic = () => {
  return (
    <Col sn='12' xl='12'>
      <Card>
        <CardHeaderCommon title={BasicDropdown} />
        <CardBody className='dropdown-basic'>
          <Dropdown>
            <Button color='primary' className='dropbtn'>
              {DropdownButton}{' '}
              <span>
                <i className='icofont icofont-arrow-down'></i>
              </span>
            </Button>
            <DropdownMenu className='dropdown-content'>
              <DropdownItem href={Javascript}>{Action}</DropdownItem>
              <DropdownItem href={Javascript}>{AnotherAction}</DropdownItem>
              <DropdownItem href={Javascript}>{SomethingElseHere}</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Basic;
