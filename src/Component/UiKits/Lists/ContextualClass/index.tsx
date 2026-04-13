import { Card, CardBody, Col, ListGroup, ListGroupItem } from 'reactstrap';
import DynamicContextualClass from './DynamicContextualClass';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { Javascript } from '@/Constant';

const ContextualClass = () => {
  return (
    <Col sm='12' xl='12'>
      <Card>
        <CardHeaderCommon title='Contextual Classes' />
        <CardBody>
          <ListGroup>
            <ListGroupItem href={Javascript}>{'Dapibus ac facilisis in'}</ListGroupItem>
            <DynamicContextualClass />
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ContextualClass;
