import { Card } from 'reactstrap';
import FlateInputFormCardBody from './FlateInputFormCardBody';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { FlatStyle } from '@/Constant';

const FlateInputFormCard = () => {
  return (
    <Card>
      <CardHeaderCommon title={FlatStyle} />
      <FlateInputFormCardBody />
    </Card>
  );
};

export default FlateInputFormCard;
