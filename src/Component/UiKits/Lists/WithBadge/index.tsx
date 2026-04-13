import { Card, CardBody, Col, ListGroup, ListGroupItem } from 'reactstrap';
import DynamicWithBadge from './DynamicWithBadge';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const WithBadge = () => {
  return (
    <Col sm='12' xl='12'>
      <Card>
        <CardHeaderCommon title='With Badges' />
        <CardBody>
          <ListGroup>
            <ListGroupItem className='d-flex justify-content-between align-items-center'>
              Cras justo odio
              <span className='badge badge-primary counter digits'>14</span>
            </ListGroupItem>
            <DynamicWithBadge />
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithBadge;
