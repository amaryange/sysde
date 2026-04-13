import React from 'react';
import { Button, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';
import { AnotherLink, DropdownButton, DropdownWithDivider, Javascript } from '../../../Constant';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { WithDividerDescription } from '@/Data/CardHeaderCommonData';

const WithDivider = () => {
  return (
    <Col sm='12' xl='6'>
      <Card>
        <CardHeaderCommon title={DropdownWithDivider} description={WithDividerDescription} />
        <CardBody className='dropdown-basic'>
          <Dropdown>
            <Button color='primary' className='dropbtn'>
              {DropdownButton}{' '}
              <span>
                <i className='icofont icofont-arrow-down'></i>
              </span>
            </Button>
            <DropdownMenu className='dropdown-content'>
              <DropdownItem href={Javascript}>{'Link 1'}</DropdownItem>
              <DropdownItem href={Javascript}>{'Link 2'}</DropdownItem>
              <DropdownItem href={Javascript}>{'Link 3'}</DropdownItem>
              <DropdownItem divider />
              <DropdownItem href={Javascript}>{AnotherLink}</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithDivider;
