import { Card } from 'reactstrap';
import EdgesInputFormCardBody from './EdgesInputFormCardBody';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { EdgesInputStyle } from '@/Constant';

const EdgesInputFormCard = () => {
  return (
    <Card>
      <CardHeaderCommon title={EdgesInputStyle} />
      <EdgesInputFormCardBody />
    </Card>
  );
};

export default EdgesInputFormCard;
