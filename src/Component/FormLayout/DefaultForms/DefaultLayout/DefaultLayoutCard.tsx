import { Col } from 'react-bootstrap';
import { Card } from 'reactstrap';
import DefaultLayoutCardBody from './DefaultLayoutCardBody';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { DefaultFormLayout } from '@/Constant';
import { DefaultLayoutCardDescription } from '@/Data/CardHeaderCommonData';
import FooterCard from '@/Component/forms-control/MegaOptions/Common/FooterCard';

const DefaultLayoutCard = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={DefaultFormLayout} description={DefaultLayoutCardDescription} />
        <DefaultLayoutCardBody />
        <FooterCard />
      </Card>
    </Col>
  );
};

export default DefaultLayoutCard;
