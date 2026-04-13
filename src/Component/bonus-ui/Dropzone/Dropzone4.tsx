import React from 'react';
import { Col, Card, CardBody, Form } from 'reactstrap';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { LimitationFileUpload } from '@/Constant';
import CommonFileUpload from './Common/CommonFileUpload';

const Dropzone4 = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={LimitationFileUpload} />
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

export default Dropzone4;
