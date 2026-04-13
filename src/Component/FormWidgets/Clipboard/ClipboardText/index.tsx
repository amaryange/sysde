import { Card, Col } from 'reactstrap';
import ClipboardTextCardBody from './ClipboardTextCardBody';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { ClipboardOnTextInput } from '@/Constant';

const ClipboardText = () => {
  return (
    <Col sm='12' md='6'>
      <Card>
        <CardHeaderCommon title={ClipboardOnTextInput} />
        <ClipboardTextCardBody />
      </Card>
    </Col>
  );
};
export default ClipboardText;
