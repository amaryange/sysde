import React from 'react';
import { Button, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { Active, Disabled, DropdownButton, DropdownWithDisable, Javascript, Normal } from '@/Constant';
import { WithDisableDescription } from '@/Data/CardHeaderCommonData';

const WithDisable = () => {
  return (
    <Col sm='12' xl='6'>
      <Card>
        <CardHeaderCommon title={DropdownWithDisable} description={WithDisableDescription} />
        <CardBody className='dropup-basic'>
          <Dropdown className='dropup'>
            <Button color='primary' className='dropbtn'>
              {DropdownButton}{' '}
              <span>
                <i className='icofont icofont-arrow-up'></i>
              </span>
            </Button>
            <DropdownMenu className='dropup-content dropdown-content'>
              <DropdownItem href={Javascript}>{Normal}</DropdownItem>
              <DropdownItem href={Javascript} active>
                {Active}
              </DropdownItem>
              <DropdownItem href={Javascript} disabled>
                {Disabled}
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithDisable;
