import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { DecimalValueTouchSpinSubHeading } from '@/Data/CardHeaderCommonData';
import { ChangeEvent, useState } from 'react';
import { Button, Card, CardBody, Col, Input, InputGroup } from 'reactstrap';

const DecimalValueTouchSpin = () => {
  const [val, setVal] = useState(53.25);
  const onChangeHandel = (event: ChangeEvent<HTMLInputElement>) => {
    setVal(Number(event.target.value));
  };
  const Minus = () => {
    setVal(val - 0.25);
  };
  const Addition = () => {
    setVal(val + 0.25);
  };
  return (
    <Col sm='12' md='6'>
      <Card>
        <CardHeaderCommon title='Decimal Value Of Touchspin' description={DecimalValueTouchSpinSubHeading} />
        <CardBody>
          <InputGroup className=' bootstrap-touchspin'>
            <Button color='primary' className='bootstrap-touchspin-down' onClick={Minus}>
              <i className='fa fa-minus'></i>
            </Button>
            <Input className='touchspin' type='text' value={val} onChange={(e) => onChangeHandel(e)} />
            <Button color='primary btn-square' className='bootstrap-touchspin-up' onClick={Addition}>
              <i className='fa fa-plus'></i>
            </Button>
          </InputGroup>
        </CardBody>
      </Card>
    </Col>
  );
};
export default DecimalValueTouchSpin;
