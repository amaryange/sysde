import React from 'react';
import { Col, Card, CardBody, Form } from 'reactstrap';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { MultipleImageVideoAudioUpload } from '@/Constant';
import { DropzoneType } from '@/Type/SideBarType';
import CommonFileUpload from './Common/CommonFileUpload';

const Dropzone3 = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={MultipleImageVideoAudioUpload} />
        <CardBody>
          <Form>
            <div className='dz-message needsclick'>
              <CommonFileUpload multiple/>
            </div>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Dropzone3;
