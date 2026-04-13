import { CardFooter, Col, Row } from 'reactstrap';
import { Follower, Following, TotalPost } from '@/Constant';
import { AllCardFooterProps } from '@/Type/SideBarType';

const AllCardFooter = ({ item }: AllCardFooterProps) => {
  return (
    <CardFooter className='mt-3'>
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
        <Col sm='4'>
          <h6>{TotalPost}</h6>
          <h3>
            <span className='counter'>{item.totalPost}</span>M
          </h3>
        </Col>
      </Row>
    </CardFooter>
  );
};

export default AllCardFooter;
