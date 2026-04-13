import { Card } from 'reactstrap';
import InputSizeFormCardBody from './InputSizeFormCardBody';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { InputSizing } from '@/Constant';

const InputSizeFormCard = () => {
  return (
    <Card>
      <CardHeaderCommon title={InputSizing} />
      <InputSizeFormCardBody />
    </Card>
  );
};

export default InputSizeFormCard;
