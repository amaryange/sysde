import { Card } from 'reactstrap';
import BasicFormCardBody from './BasicFormCardBody';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { BasicFormControl } from '@/Constant';

const BasicFormCard = () => {
  return (
    <Card>
      <CardHeaderCommon title={BasicFormControl} />
      <BasicFormCardBody />
    </Card>
  );
};

export default BasicFormCard;
