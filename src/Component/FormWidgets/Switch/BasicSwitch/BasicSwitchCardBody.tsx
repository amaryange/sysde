import { BasicSwitchData } from '@/Data/FormWidget';
import { CardBody, Col, Label, Input } from 'reactstrap';

const BasicSwitchCardBody = () => {
  return (
    <CardBody className='row switch-showcase height-equal'>
      <Col sm='12'>
        {BasicSwitchData.map((item) => (
          <div className='d-flex' key={item.id}>
            <Label className='col-form-label m-r-10'>{item.title}</Label>
            <div className={item.mediaclass}>
              <Label className='switch'>
                <Input type='checkbox' disabled={item.disabled} />
                <span className='switch-state'></span>
              </Label>
            </div>
          </div>
        ))}
      </Col>
    </CardBody>
  );
};

export default BasicSwitchCardBody;
