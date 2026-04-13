import { DynamicStepsData } from '@/Data/BonusUiData/steps';
import { Col } from 'reactstrap';

const DynamicSteps = () => {
  return DynamicStepsData.map((data, index) => (
    <Col key={index} sm='4' className={`u-step ${data?.class}`}>
      <span className='u-step-number'>{data.number}</span>
      <div className='u-step-desc'>
        <span className='u-step-title'>{data.tittle}</span>
        <p>{data.desc}</p>
      </div>
    </Col>
  ));
};

export default DynamicSteps;
