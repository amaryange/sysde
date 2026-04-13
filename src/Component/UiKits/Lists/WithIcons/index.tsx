import { Card, CardBody, Col, ListGroup, ListGroupItem } from 'reactstrap';
import DynamicWithIcons from './DynamicWithIcons';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { Javascript } from '@/Constant';

const WithIcons = () => {
  return (
    <Col sm='12' xl='12'>
      <Card>
        <CardHeaderCommon title='With Icon' />
        <CardBody>
          <ListGroup>
            <ListGroupItem className='list-group-item-action' tag='a' href={Javascript}>
              <i className='icon-save-alt'></i>
              {'Cras justo odio'}
            </ListGroupItem>
            <DynamicWithIcons />
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithIcons;
