import { Card, Col, CardHeader, CardBody, Row, Label, Input, FormGroup, Button } from 'reactstrap';
import { AboutMe, AssetsImagePath, Designer, EmailAddress, MarkJecno, MyProfile, Password, Save, Website } from '@/Constant';
import Image from 'next/image';

const EditMyProfile = () => {
  return (
    <Col xl='4'>
      <Card>
        <CardHeader>
          <h4 className='card-title mb-0'>{MyProfile}</h4>
        </CardHeader>
        <CardBody>
          <form onSubmit={(event) => event.preventDefault()}>
            <Row className='mb-2'>
              <Col className='col-auto'>
                <Image width={70} height={70} className='img-70 rounded-circle' alt='edit-user' src={`${AssetsImagePath}/user/7.jpg`} unoptimized/>
              </Col>
              <Col>
                <h3 className='mb-1'>{MarkJecno}</h3> <p className='mb-4'>{Designer}</p>
              </Col>
            </Row>
            <FormGroup>
              <h6 className='form-label'>{AboutMe}</h6>
              <textarea rows={5} className='form-control' defaultValue={'On the other hand, we denounce with righteous indignation'} />
            </FormGroup>
            <FormGroup>
              <Label>{EmailAddress}</Label>
              <Input placeholder='your-email@domain.com' />
            </FormGroup>
            <FormGroup>
              <Label>{Password}</Label>
              <Input type='password' defaultValue='password' />
            </FormGroup>
            <FormGroup>
              <Label>{Website}</Label>
              <Input placeholder='http://Uplor.com' />
            </FormGroup>
            <div className='form-footer'>
              <Button color='primary' className='d-block w-100'>
                {Save}
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default EditMyProfile;
