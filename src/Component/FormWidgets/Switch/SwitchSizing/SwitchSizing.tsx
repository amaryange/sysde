import { SwitchSizingData } from '@/Data/FormWidget';
import { CardBody, Col, Input, Label } from 'reactstrap';

const SwitchSizing = () => {
  return (
    <CardBody className='row switch-showcase'>
      <Col sm='12'>
        {SwitchSizingData.map((item) => (
          <div className='d-flex' key={item.id}>
            <Label className='col-form-label m-r-10'>{item.title}</Label>
            <div className={item.mediaclass}>
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
export default SwitchSizing;
