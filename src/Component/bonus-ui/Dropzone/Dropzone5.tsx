import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { CustomFileUpload } from '@/Constant';
import { Card, CardBody, Col, Form } from 'reactstrap';
import CommonFileUpload from './Common/CommonFileUpload';

const Dropzone5 = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={CustomFileUpload} />
        <CardBody>
          <Form>
            <div className='dz-message needsclick'>
              <CommonFileUpload/>
            </div>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Dropzone5;
