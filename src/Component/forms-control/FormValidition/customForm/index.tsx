import { Card, CardBody } from "reactstrap";
import CardHeaderCommon from "@/CommonComponents/CardHeaderCommon";
import { CustomStyles } from "@/Constant";
import { CustomFormDescription, CustomFormDescription2 } from "@/Data/CardHeaderCommonData";
import { Formik } from "formik";
import { TooltipValidationForm } from "./TooltipValidationForm";
import { useState } from "react";
import { TooltipValidationProp } from "@/Type/Form";
import * as Yup from "yup";

const CustomForm = () => {
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
      <CardHeaderCommon title={CustomStyles} description={CustomFormDescription} description2={CustomFormDescription2} />
      <CardBody>
        <Formik initialValues={TooltipInitialValue} onSubmit={submitHandler} validationSchema={TooltipValidationSchema}>
          {({ errors }) => <TooltipValidationForm errors={errors} setSubmitError={setSubmitError} submitErrors={submitErrors} />}
        </Formik>
      </CardBody>
    </Card>
  );
};

export default CustomForm;
