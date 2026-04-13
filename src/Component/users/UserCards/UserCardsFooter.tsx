import { CardFooter, Col, Row } from 'reactstrap';
import { Follower, Following, TotalPost } from '@/Constant';
import { CardTypes } from '@/Type/SideBarType';

interface CardType {
  item: CardTypes;
}

const UserCardsFooter = ({ item }: CardType) => {
  return (
    <CardFooter>
      <Row>
        <Col sm='4' xs='4'>
          <h6>{Follower}</h6>
          <h3 className='counter'>{item.follower}</h3>
        </Col>
        <Col sm='4' xs='4'>
          <h6>{Following}</h6>
          <h3>
            <span className='counter'>{item.following}</span>K
          </h3>
        </Col>
        <Col sm='4' xs='4'>
          <h6>{TotalPost}</h6>
          <h3>
            <span className='counter'>{item.totalPost}</span>M
          </h3>
        </Col>
      </Row>
    </CardFooter>
  );
};

export default UserCardsFooter;
