import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { Javascript } from '@/Constant';
import { WithDropdownTouchspinSubHeading } from '@/Data/CardHeaderCommonData';
import { ChangeEvent, useState } from 'react';
import { Button, ButtonGroup, Card, CardBody, Col, Input, InputGroup, InputGroupText } from 'reactstrap';

const WithDropdownTouchspin = () => {
  const [val, setVal] = useState(69);
  const Minus = () => {
    setVal(val - 0.25);
  };
  const Addition = () => {
    setVal(val + 0.25);
  };
  const onChangeHandel = (event: ChangeEvent<HTMLInputElement>) => {
    setVal(Number(event.target.value));
  };
  return (
    <Col sm='12' md='6'>
      <Card>
        <CardHeaderCommon title='Touchspin With Dropdown' description={WithDropdownTouchspinSubHeading} />
        <CardBody>
          <InputGroup className=' bootstrap-touchspin'>
            <Button color='primary' className='bootstrap-touchspin-down' onClick={Minus}>
              <i className='fa fa-minus'></i>
            </Button>
            <InputGroupText>{'Pre'}</InputGroupText>
            <Input className='touchspin' type='text' value={val} onChange={(e) => onChangeHandel(e)} />
            <InputGroupText>{'Post'}</InputGroupText>
            <Button color='primary ' className='btn-square bootstrap-touchspin-up' onClick={Addition}>
              <i className='fa fa-plus'></i>
            </Button>
            <div className='dropdown-basic'>
              <div className='dropdown'>
                <ButtonGroup className='mb-0 me-0'>
                  <Button color='light' className='dropbtn  txt-dark'>
                    Action
                    <span>
                      <i className='icofont icofont-arrow-down'></i>
                    </span>
                  </Button>
                  <div className='dropdown-content'>
                    <a href={Javascript}>Action</a>
                    <a href={Javascript}>Another Action</a>
                    <a href={Javascript}>Something Else Here</a>
                    <div className='dropdown-divider'></div>
                    <a href={Javascript}>Separated Link </a>
                  </div>
                </ButtonGroup>
              </div>
            </div>
          </InputGroup>
        </CardBody>
      </Card>
    </Col>
  );
};
export default WithDropdownTouchspin;
