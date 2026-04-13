import { Card, Col } from 'reactstrap';
import VerticalCardHeader from './CardHeader';
import VerticalStyleCardBody from './CardsBody.tsx';
import FooterCard from '../Common/FooterCard';

const VerticalStyles = () => {
  return (
    <Col sm='12' xl='6'>
      <Card className='height-equal'>
        <VerticalCardHeader />
        <VerticalStyleCardBody />
        <FooterCard />
      </Card>
    </Col>
  );
};
export default VerticalStyles;
