import { Card, CardBody } from 'reactstrap';
import SupportElement from './SupportElement';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { SupportedElements } from '@/Constant';

const FormSupportedElements = () => {
  const spanText =
    'Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you’ll see a slightly different style of feedback.</span><span>While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.';

  return (
    <Card>
      <CardHeaderCommon title={SupportedElements} description={spanText} />
      <CardBody>
        <SupportElement />
      </CardBody>
    </Card>
  );
};

export default FormSupportedElements;
