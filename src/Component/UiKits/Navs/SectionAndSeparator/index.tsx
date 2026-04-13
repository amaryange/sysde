import { Card, CardBody, Col } from 'reactstrap';
import SectionandSeparatorNav from './SectionandSeparatorNav';
import DropdownExample from './DropdownExample';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const SectionAndSeparator = () => {
  return (
    <Col lg='6'>
      <Card className='height-equal' style={{ minHeight: '638px' }}>
        <CardHeaderCommon title={'Section and Separator'} />
        <CardBody>
          <SectionandSeparatorNav />
          <DropdownExample />
        </CardBody>
      </Card>
    </Col>
  );
};
export default SectionAndSeparator;
