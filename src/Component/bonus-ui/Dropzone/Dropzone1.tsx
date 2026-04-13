import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { SingleFileUpload } from '@/Constant';
import { Card, CardBody, Col, Form } from 'reactstrap';
import CommonFileUpload from './Common/CommonFileUpload';

const Dropzone1 = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={SingleFileUpload} />
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

export default Dropzone1;
