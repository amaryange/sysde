import { CardBody } from "reactstrap";
import CommonRow from "./Common/CommonRow";

const StepsSizingClassBody = () => {
  return (
    <CardBody>
      <CommonRow RowClass="u-steps-xs steps-sizing-sm-mb" />
      <CommonRow RowClass="u-steps-sm steps-sizing-sm-mb" />
      <CommonRow RowClass="steps-sizing-sm-mb" />
      <CommonRow RowClass="u-steps-lg" />
    </CardBody>
  );
};

export default StepsSizingClassBody;
