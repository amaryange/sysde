import { Row, Col, CardBody, Form, FormGroup, Label, Input } from 'reactstrap';
import InputSizeFormCardFooter from './InputSizeFormCardFooter';
import CommonSelectBox from '../../Common/CommonSelectBox';
import { DefaultInput, LargeInput, SmallInput } from '@/Constant';

const InputSizeFormCardBody = () => {
  return (
    <Form className='theme-form'>
      <CardBody>
        <Row>
          <Col>
            <FormGroup>
              <Label className='col-form-label-sm'>{LargeInput}</Label>
              <Input className='form-control-lg' type='text' placeholder='col-form-label-lg' />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>{DefaultInput}</Label>
              <Input type='text' placeholder='form-control' />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label className='col-form-label-sm'>{SmallInput}</Label>
              <Input className='form-control-sm' type='text' placeholder='col-form-label-sm' />
            </FormGroup>
          </Col>
        </Row>
        <CommonSelectBox inputClassName='digits form-control-lg' />
        <CommonSelectBox inputClassName='digits' />
        <CommonSelectBox inputClassName='form-control-sm digits' />
      </CardBody>
      <InputSizeFormCardFooter />
    </Form>
  );
};
export default InputSizeFormCardBody;
