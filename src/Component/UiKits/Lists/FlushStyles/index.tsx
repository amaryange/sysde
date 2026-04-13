import { Card, CardBody, Col, ListGroup, ListGroupItem } from 'reactstrap';
import DynamicFlushStyle from './DynamicFlushStyle';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const FlushStyles = () => {
  return (
    <Col sm='12' xl='12'>
      <Card>
        <CardHeaderCommon title={'Flush Style'} />
        <CardBody>
          <ListGroup className='list-group-flush'>
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <DynamicFlushStyle />
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FlushStyles;
