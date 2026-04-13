import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { MinMaxTouchspinSubHeading } from '@/Data/CardHeaderCommonData';
import { ChangeEvent, useState } from 'react';
import { Button, Card, CardBody, Col, Input } from 'reactstrap';

const MinMaxTouchspin = () => {
  const [val, setVal] = useState(22);
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
        <CardHeaderCommon title='Min Max Value Of Touchspin' description={MinMaxTouchspinSubHeading} />
        <CardBody>
          <div className='input-group bootstrap-touchspin'>
            <Button color='primary' className='bootstrap-touchspin-down' onClick={Minus}>
              <i className='fa fa-minus'></i>
            </Button>
            <Input className='touchspin' type='text' value={val} onChange={(e) => onChangeHandel(e)} />
            <Button color='primary btn-square' className='bootstrap-touchspin-up' onClick={Addition}>
              <i className='fa fa-plus'></i>
            </Button>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default MinMaxTouchspin;
