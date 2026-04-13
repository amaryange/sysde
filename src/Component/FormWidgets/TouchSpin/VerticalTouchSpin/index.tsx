import { useState } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import CommonTouchspin from '../Common/CommonTouchspin';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { VerticalTouchspinSubHeading } from '@/Data/CardHeaderCommonData';

const VerticalTouchSpin = () => {
  const [val, setVal] = useState(80);
  const vertical = true;
  return (
    <Col sm='12' md='6'>
      <Card>
        <CardHeaderCommon title='Vertical Touchspin' description={VerticalTouchspinSubHeading} />
        <CardBody>
          <CommonTouchspin val={val} setVal={setVal} vertical={vertical} />
        </CardBody>
      </Card>
    </Col>
  );
};
export default VerticalTouchSpin;
