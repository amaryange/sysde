import { StepsWithIconData } from '@/Data/BonusUiData/steps';
import { Col } from 'reactstrap';

const DynamicSteps = () => {
  return (
    <>
      {StepsWithIconData.map((data, index) => (
        <Col key={index} md='4' className={`u-step ${data?.colClass}`}>
          <span className={data.iconClass} aria-hidden='true'></span>
          <div className='u-step-desc'>
            <span className='u-step-title'>{data.tittle}</span>
          </div>
        </Col>
      ))}
    </>
  );
};

export default DynamicSteps;
