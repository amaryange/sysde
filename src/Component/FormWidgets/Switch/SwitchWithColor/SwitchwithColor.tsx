import { Switchwithcolor } from '@/Data/FormWidget';
import { CardBody, Col, Input, Label } from 'reactstrap';

const SwitchwithColor = () => {
  return (
    <CardBody className='row switch-showcase'>
      <Col sm='12'>
        {Switchwithcolor.map((item) => (
          <div className='d-flex' key={item.id}>
            <Label className='col-form-label m-r-10'>{item.title}</Label>
            <div className={item.mediaclass}>
              <Label className='switch'>
                <Input type='checkbox' disabled={item.disabled} />
                <span className={item.spanclass}></span>
              </Label>
            </div>
          </div>
        ))}
      </Col>
    </CardBody>
  );
};
export default SwitchwithColor;
