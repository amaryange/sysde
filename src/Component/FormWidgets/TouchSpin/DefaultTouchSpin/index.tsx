import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { DefaultTouchSpinSubHeading } from '@/Data/CardHeaderCommonData';
import { ChangeEvent, useState } from 'react';
import { Button, Card, CardBody, Col, Input, InputGroup } from 'reactstrap';

const DefaultTouchSpin = () => {
  const [val, setVal] = useState<number>(40);
  const onChangeHandle = (event: ChangeEvent<HTMLInputElement>) => {
    setVal(Number(event.target.value));
  };
  const Minus = () => {
    setVal(val - 1);
  };
  const Addition = () => {
    setVal(val + 1);
  };
  return (
    <Col sm='12' md='6'>
      <Card>
        <CardHeaderCommon title='Default Touchspin' description={DefaultTouchSpinSubHeading} />
        <CardBody>
          <InputGroup className=' bootstrap-touchspin'>
            <Button color='primary' className='bootstrap-touchspin-down' onClick={Minus}>
              <i className='fa fa-minus'></i>
            </Button>
            <Input className='touchspin' type='text' value={val} onChange={(e) => onChangeHandle(e)} />
            <Button color='primary btn-square' className='bootstrap-touchspin-up' onClick={Addition}>
              <i className='fa fa-plus'></i>
            </Button>
          </InputGroup>
        </CardBody>
      </Card>
    </Col>
  );
};
export default DefaultTouchSpin;
