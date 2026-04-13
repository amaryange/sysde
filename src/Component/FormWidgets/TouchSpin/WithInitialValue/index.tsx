import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { InitialValueTouchspinSubHeading } from '@/Data/CardHeaderCommonData';
import { ChangeEvent, useState } from 'react';
import { Button, Card, CardBody, Col, Input, InputGroup } from 'reactstrap';

const InitialValueTouchspin = () => {
  const [val, setVal] = useState(53);
  const onChangeHandel = (event: ChangeEvent<HTMLInputElement>) => {
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
        <CardHeaderCommon title='Touchspin With Initial Value' description={InitialValueTouchspinSubHeading} />
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
export default InitialValueTouchspin;
