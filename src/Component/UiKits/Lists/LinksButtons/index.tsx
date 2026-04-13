import { Card, CardBody, Col, ListGroup, ListGroupItem } from 'reactstrap';
import DynamicLinkButton from './DynamicLinkButton';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { Javascript } from '@/Constant';

const LinksButtons = () => {
  return (
    <Col sm='12' xl='12'>
      <Card>
        <CardHeaderCommon title='Links And Buttons' />
        <CardBody>
          <ListGroup>
            <ListGroupItem className='list-group-item-action active' href={Javascript}>
              Cras justo odio
            </ListGroupItem>
            <ListGroupItem className='list-group-item-action' tag='a' href={Javascript}>
              Dapibus ac facilisis in
            </ListGroupItem>
            <DynamicLinkButton />
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LinksButtons;
