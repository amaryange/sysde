import { Card } from 'reactstrap';
import RaiseInputFormCardBody from './RaiseInputFormCardBody';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { RaiseInputStyle } from '@/Constant';

const RaiseInputFormCard = () => {
  return (
    <Card>
      <CardHeaderCommon title={RaiseInputStyle} />
      <RaiseInputFormCardBody />
    </Card>
  );
};

export default RaiseInputFormCard;
