import { Card, CardBody } from 'reactstrap';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { Tooltips } from '@/Constant';
import { Formik } from 'formik';
import * as Yup from "yup";
import { TooltipValidationProp } from '@/Type/Form';
import { useState } from 'react';
import { TooltipValidationForm } from '../customForm/TooltipValidationForm';

const CustomTootltipForm = () => {
  const spanText = `If your form layout allows it, you can swap the<code className="text-danger">.feedback</code> classes for<code className="text-danger">.tooltip</code>classes to display validation feedback in a styled tooltip. Be sure to have a parent with<code className="text-danger">position: relative</code>on it for tooltip positioning. In the example below, our column classes have this already, but your project may require an alternative setup.`;
  const [submitErrors, setSubmitError] = useState<boolean>(false);
  const TooltipInitialValue: TooltipValidationProp = { firstname: "", lastname: "", username: "", city: "", state: "", zip: "" };

  const TooltipValidationSchema = Yup.object().shape({
    firstname: Yup.string().min(2).required(),
    lastname: Yup.string().min(2).required(),
    username: Yup.string().min(2).required(),
    city: Yup.string().min(2).required(),
    state: Yup.string().min(2).required(),
    zip: Yup.string().min(2).required(),
  });

  const submitHandler = (values: TooltipValidationProp, { resetForm }: { resetForm: () => void }) => {
    resetForm();
    setSubmitError(false);
  };
  
  return (
    <Card>
      <CardHeaderCommon title={Tooltips} description={spanText} />
      <CardBody>
      <Formik initialValues={TooltipInitialValue} onSubmit={submitHandler} validationSchema={TooltipValidationSchema}>
          {({ errors }) => <TooltipValidationForm errors={errors} setSubmitError={setSubmitError} submitErrors={submitErrors} />}
        </Formik>
      </CardBody>
    </Card>
  );
};

export default CustomTootltipForm;
