import { Col, Card } from 'reactstrap';
import BreakPoint1 from './BreakPoint1';
import BreakPoint2 from './BreakPoint2';
import BreakPoint3 from './BreakPoint3';
import BreakPoint4 from './BreakPoint4';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { BreckpointSpecific } from '@/Constant';

const BreckpointClass = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={BreckpointSpecific} />
        <BreakPoint1 />
        <BreakPoint2 />
        <BreakPoint3 />
        <BreakPoint4 />
      </Card>
    </Col>
  );
};

export default BreckpointClass;
