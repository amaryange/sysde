import { InlineFormWithLabel, InlineFormWithoutLabel } from '../../../../Constant';
import { CardBody } from 'reactstrap';
import FormWithLabel from './FormWithLabel';
import FormWithoutLabel from './FormWithoutLabel';

const InlineFormCardBody = () => {
  return (
    <CardBody>
      <h6>{InlineFormWithLabel}</h6>
      <FormWithLabel />
      <h6>{InlineFormWithoutLabel}</h6>
      <FormWithoutLabel />
    </CardBody>
  );
};
export default InlineFormCardBody;
