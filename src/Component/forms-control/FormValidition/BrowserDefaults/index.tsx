import { Card, CardBody } from 'reactstrap';
import BrowserDefault from './BrowserDefault';
import { BrowserDefaults } from '@/Constant';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const BrowserDefaultsForm = () => {
  const spanText =
    'Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you’ll see a slightly different style of feedback.</span><span>While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.';

  return (
    <Card>
      <CardHeaderCommon title={BrowserDefaults} description={spanText} />
      <CardBody>
        <BrowserDefault />
      </CardBody>
    </Card>
  );
};

export default BrowserDefaultsForm;
