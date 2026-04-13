import { FirstName, LastName, Next } from '@/Constant';
import { FormPropType, RegistrationTType } from '@/Type/SideBarType';
import { useForm } from 'react-hook-form';
import { Row, Col, Form, Label, Button } from 'reactstrap';

const Registration = (props: RegistrationTType) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormPropType>();

  const onSubmit = handleSubmit((data) => {
    if (data.firstName !== '' && data.firstName !== '') {
      props.setGoSteps(props.goSteps + 1);
    }
  });
  return (
    <Row>
      <Col sm='12'>
        <Form className='needs-validation' onSubmit={onSubmit}>
          <Row>
            <Col md='12 mb-3'>
              <Label>{FirstName}</Label>
              <input className='form-control' type='text' placeholder='First name' {...register('firstName', { required: true })} />
              {errors.firstName && 'First name is required'}
              <div className='valid-feedback'>{'Looks good!'}</div>
            </Col>
            <Col md='12 mb-3'>
              <Label>{LastName}</Label>
              <input className='form-control' type='text' placeholder='Last name' {...register('lastName', { required: true })} />
              {errors.lastName && 'Last name is required'}
              <div className='valid-feedback'>{'Looks good!'}</div>
            </Col>
            <Col>
              <Button color='primary' type='submit'>
                {Next}
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};
export default Registration;
