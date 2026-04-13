import { ProjectTitle } from '@/Constant';
import { ProjectFormType } from '@/Type/SideBarType';
import { Col, FormGroup, Label, Row } from 'reactstrap';

const ProjectTitleClass = ({ register, errors }: ProjectFormType) => {
  return (
    <Row>
      <Col>
        <FormGroup>
          <Label>{ProjectTitle}</Label>
          <input className='form-control' type='text' placeholder='Project name *' {...register('title', { required: true })} />
          <span style={{ color: 'red' }}>{errors?.title && 'Title is required'}</span>
        </FormGroup>
      </Col>
    </Row>
  );
};

export default ProjectTitleClass;
