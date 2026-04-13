import React from 'react';
import { Button, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { AnotherLink, DropdownButton, DropdownHeader, DropdownWithHeader, Javascript } from '@/Constant';
import { WithHeaderDescription } from '@/Data/CardHeaderCommonData';

const WithHeader = () => {
  return (
    <Col sm='12' xl='6'>
      <Card>
        <CardHeaderCommon title={DropdownWithHeader} description={WithHeaderDescription} />
        <CardBody className='dropdown-basic'>
          <Dropdown>
            <Button color='primary' className='dropbtn'>
              {DropdownButton}{' '}
              <span>
                <i className='icofont icofont-arrow-down'></i>
              </span>
            </Button>
            <DropdownMenu className='dropdown-content'>
              <DropdownItem header>{DropdownHeader}</DropdownItem>
              <DropdownItem href={Javascript}>{'Link 1'}</DropdownItem>
              <DropdownItem href={Javascript}>{'Link 2'}</DropdownItem>
              <DropdownItem header>{DropdownHeader}</DropdownItem>
              <DropdownItem href={Javascript}>{AnotherLink}</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithHeader;
