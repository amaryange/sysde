import { Col, Card } from 'reactstrap';

import ClipboardTextareaCardBody from './ClipboardTextareaCardBody';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { ClipboardOnTextareaConst } from '@/Constant';

const ClipboardTextarea = () => {
  return (
    <Col sm='12' md='6'>
      <Card>
        <CardHeaderCommon title={ClipboardOnTextareaConst} />
        <ClipboardTextareaCardBody />
      </Card>
    </Col>
  );
};
export default ClipboardTextarea;
