import React from 'react';
import { Col, FormGroup, Label, Row } from 'reactstrap';
import { UploadProjectFile } from '@/Constant';
import CommonFileUpload from '@/Component/bonus-ui/Dropzone/Common/CommonFileUpload';

const DropItem = () => {
  return (
    <Row>
      <Col>
        <div className='mb-3'>
          <FormGroup>
            <Label>{UploadProjectFile}</Label>
            <CommonFileUpload/>
          </FormGroup>
        </div>
      </Col>
    </Row>
  );
};
export default DropItem;
