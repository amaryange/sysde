import { Col, Card } from 'reactstrap';
import ClipboardParaGraphCardBody from './ClipboardParaGraphCardBody';
import { ClipboardOnParagraph } from '@/Constant';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const ClipboardPara = () => {
  return (
    <Col sm='12' md='6'>
      <Card>
        <CardHeaderCommon title={ClipboardOnParagraph} />
        <ClipboardParaGraphCardBody />
      </Card>
    </Col>
  );
};
export default ClipboardPara;
