import { Card, Col } from 'reactstrap';

import StepsSizingClassBody from './StepsSizingClassBody';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { StepsSizingClassDescription } from '@/Data/CardHeaderCommonData';

const StepsSizingClass = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title='Step Sizing' description={StepsSizingClassDescription} />
        <StepsSizingClassBody />
      </Card>
    </Col>
  );
};

export default StepsSizingClass;
