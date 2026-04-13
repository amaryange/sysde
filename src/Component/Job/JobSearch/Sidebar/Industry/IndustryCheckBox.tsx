import { IndustryCheckBoxData } from '@/Data/Jobs';
import { CardBody, Input, Label } from 'reactstrap';

const IndustryCheckBox = () => {
  return (
    <CardBody className='animate-chk'>
      {IndustryCheckBoxData.map((data, index) => (
        <Label className='d-block' key={index} for={`industryCheckBox-${index}`}>
          <Input className='checkbox_animated' id={`industryCheckBox-${index}`} type='checkbox' />
          {data.industryTitle}({data.industryNumber})
        </Label>
      ))}
    </CardBody>
  );
};

export default IndustryCheckBox;
