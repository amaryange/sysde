import { Card } from 'reactstrap';
import InlineFormCardBody from './InlineFormCardBody';
import { Col } from 'react-bootstrap';
import { InlineForm } from '../../../../Constant';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { InlineFormCardDescription } from '@/Data/CardHeaderCommonData';

const InlineFormCard = () => {
  return (
    <Col xl='12'>
      <Card>
        <CardHeaderCommon title={InlineForm} description={InlineFormCardDescription} />
        <InlineFormCardBody />
      </Card>
    </Col>
  );
};

export default InlineFormCard;
