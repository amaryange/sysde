import { Card } from 'reactstrap';
import CustomFormCardBody from './CustomFormCardBody';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { CustomControls } from '@/Constant';

const CustomFormCard = () => {
  return (
    <Card>
      <CardHeaderCommon title={CustomControls} />
      <CustomFormCardBody />
    </Card>
  );
};

export default CustomFormCard;
