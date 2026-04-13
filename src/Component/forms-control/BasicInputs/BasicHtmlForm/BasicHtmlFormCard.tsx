import { Card } from 'reactstrap';
import BasicHtmlFormCardBody from './BasicHtmlFormCardBody';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { BasicHTMLInputControl } from '@/Constant';

const BasicHtmlFormCard = () => {
  return (
    <Card>
      <CardHeaderCommon title={BasicHTMLInputControl} />
      <BasicHtmlFormCardBody />
    </Card>
  );
};

export default BasicHtmlFormCard;
