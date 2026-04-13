import { CardBody, Col, Card } from 'reactstrap';
import CommonActivity from './CommonActivity';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const ActivityLog = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title='Activity Log' />
        <CardBody>
          <div className='activity-log'>
            <CommonActivity heading='Today' />
            <CommonActivity heading='25 December' />
            <CommonActivity heading='8 september' />
            <CommonActivity heading='6 June' />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ActivityLog;
