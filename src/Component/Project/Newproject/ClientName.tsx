import { ClientName } from '@/Constant';
import { ProjectFormType } from '@/Type/SideBarType';
import { Col, FormGroup, Label, Row } from 'reactstrap';

const ClientNameClass = ({ register, errors }: ProjectFormType) => {
  return (
    <Row>
      <Col>
        <FormGroup>
          <Label>{ClientName}</Label>
          <input className='form-control' type='text' placeholder='Name client or company name' {...register('client_name', { required: true })} />
          <span style={{ color: 'red' }}>{errors?.client_name && 'Client Name is required'}</span>
        </FormGroup>
      </Col>
    </Row>
  );
};

export default ClientNameClass;
