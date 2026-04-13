import { Col, FormGroup, Label, Row } from 'reactstrap';
import { ProjectFormType } from '@/Type/SideBarType';
import { EnterSomeDetails } from '@/Constant';

const EnterSomeDetailsClass = ({ register, errors }: ProjectFormType) => {
  return (
    <Row>
      <Col>
        <FormGroup>
          <Label>{EnterSomeDetails}</Label>
          <input type='textarea' className='form-control' {...register('description', { required: true })} />
          <span style={{ color: 'red' }}>{errors?.description && 'Some Details is required'}</span>
        </FormGroup>
      </Col>
    </Row>
  );
};

export default EnterSomeDetailsClass;
