import React from 'react';
import { Button, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { DropdownButton, DropdownWithDropUp, Javascript } from '@/Constant';
import { WithDropUpDescription } from '@/Data/CardHeaderCommonData';

const WithDropUp = () => {
  return (
    <Col sm='12' xl='6'>
      <Card>
        <CardHeaderCommon title={DropdownWithDropUp} description={WithDropUpDescription} />
        <CardBody className='dropup-basic'>
          <Dropdown className='dropup'>
            <Button color='primary' className='dropbtn'>
              {DropdownButton}{' '}
              <span>
                <i className='icofont icofont-arrow-up'></i>
              </span>
            </Button>
            <DropdownMenu className='dropup-content dropdown-content'>
              <DropdownItem href={Javascript}>{'Link 1'}</DropdownItem>
              <DropdownItem href={Javascript}>{'Link 2'}</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithDropUp;
