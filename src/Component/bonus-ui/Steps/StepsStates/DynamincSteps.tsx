import { Getting } from '@/Constant';
import { StepStatesData } from '@/Data/BonusUiData/steps';
import { Col } from 'reactstrap';

const DynamicSteps = () => {
  return StepStatesData.map((data, index) => (
    <Col xl='3' lg='6' key={index}>
      <div className={`u-step  ${data.divClass}`}>
        <span className='u-step-number txt-primary'>{index + 2}</span>
        <div className='u-step-desc'>
          <span className='u-step-title'>{Getting}</span>
          <p className={data?.class}>Waiting for the goods</p>
        </div>
      </div>
    </Col>
  ));
};

export default DynamicSteps;
