import { Switchcolor } from '@/Data/FormWidget';
import { CardBody, Label, Input, Col } from 'reactstrap';

const SwitchColorCardBody = () => {
  return (
    <CardBody className='row switch-showcase height-equal'>
      <Col sm='12'>
        {Switchcolor.map((item) => (
          <div className='d-flex' key={item.id}>
            <Label className='col-form-label m-r-10'>{item.title}</Label>
            <div className='text-end flex-grow-1 icon-state'>
              <Label className='switch'>
                <Input type='checkbox' />
                <span className={item.spanclass}></span>
              </Label>
            </div>
          </div>
        ))}
      </Col>
    </CardBody>
  );
};

export default SwitchColorCardBody;
