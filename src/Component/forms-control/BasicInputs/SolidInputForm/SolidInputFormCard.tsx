import { Card } from 'reactstrap';
import SolidInputFormCardBody from './SolidInputFormCardBody';
import { SolidInputStyle } from '@/Constant';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const SolidInputFormCard = () => {
  return (
    <Card>
      <CardHeaderCommon title={SolidInputStyle} />
      <SolidInputFormCardBody />
    </Card>
  );
};

export default SolidInputFormCard;
