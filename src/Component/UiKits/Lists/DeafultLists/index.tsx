import { Card, CardBody, Col, ListGroup, ListGroupItem } from 'reactstrap';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const DefaultLists = () => {
  return (
    <Col sm='12' xl='12'>
      <Card>
        <CardHeaderCommon title={'Default List'} />
        <CardBody>
          <ListGroup>
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac faciListGroupItemsis in</ListGroupItem>
            <ListGroupItem>Morbi leo risus</ListGroupItem>
            <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultLists;
