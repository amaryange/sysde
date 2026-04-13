import { UploadCoverLetter, UploadRecommendations, UploadYourCV } from '@/Constant';
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

const UploadFileClass = () => {
  return (
    <Form className='theme-form '>
      <Row>
        <Col>
          <FormGroup>
            <Label className='col-form-label pt-0'>
              {UploadCoverLetter}:<span className='font-danger'>*</span>
            </Label>
            <Input type='file' />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <Label className='col-form-label pt-0'>
              {UploadYourCV}:<span className='font-danger'>*</span>
            </Label>
            <Input type='file' />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup className='mb-0'>
            <Label className='col-form-label pt-0'>{UploadRecommendations}:</Label>
            <Input type='file' />
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};

export default UploadFileClass;
