import { Card, Col } from 'reactstrap';
import { MegaForm } from '../../../../Constant';
import MegaFormCardBody from './MegaFormCardBody';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import FooterCard from '@/Component/forms-control/MegaOptions/Common/FooterCard';

const MegaFormsCard = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={MegaForm} />
        <MegaFormCardBody />
        <FooterCard />
      </Card>
    </Col>
  );
};

export default MegaFormsCard;
