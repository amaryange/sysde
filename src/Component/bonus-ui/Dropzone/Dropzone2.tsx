import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { MultiImageUpload } from '@/Constant';
import { ToastContainer } from 'react-toastify';
import { Card, CardBody, Col, Form } from 'reactstrap';
import CommonFileUpload from './Common/CommonFileUpload';

const Dropzone2 = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={MultiImageUpload} />
        <CardBody>
          <Form>
            <ToastContainer />
            <div className='dz-message needsclick'>
              <CommonFileUpload multiple/>
            </div>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Dropzone2;
