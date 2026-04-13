import { SkillCheckBoxData } from '@/Data/Jobs';
import { CardBody, Input, Label } from 'reactstrap';

const SkillCheckBox = () => {
  return (
    <CardBody className='animate-chk'>
      {SkillCheckBoxData.map((data, index) => (
        <Label className='d-block' key={index} for={`checkbox-animate-${index}`}>
          <Input className='checkbox_animated' id={`checkbox-animate-${index}`} type='checkbox' />
          {data}
        </Label>
      ))}
    </CardBody>
  );
};

export default SkillCheckBox;
