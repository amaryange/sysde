import { Switchcolor } from '@/Data/FormWidget';
import { CommonSwitchOutlineType } from '@/Type/SideBarType';
import { CardBody, Col, Input, Label } from 'reactstrap';

const CommonSwitchOutline = ({ Checked }: CommonSwitchOutlineType) => {
  return (
    <CardBody className='row switch-showcase height-equal'>
      <Col sm='12'>
        {Switchcolor.map((item) => (
          <div className='d-flex' key={item.id}>
            <Label className='col-form-label m-r-10'>{item.title}</Label>
            <div className={item.mediaclass}>
              <Label className='switch'>
                <Input type='checkbox' defaultChecked={Checked ? true : false} />
                <span className={item.spanclass}></span>
              </Label>
            </div>
          </div>
        ))}
      </Col>
    </CardBody>
  );
};
export default CommonSwitchOutline;
