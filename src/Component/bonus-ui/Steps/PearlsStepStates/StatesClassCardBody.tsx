import { CardBody } from "reactstrap";
import CommonRow from "./Common/CommonRow";

const StatesClassCardBody = () => {
  return (
    <CardBody>
      <CommonRow div1="current" div2="disabled" div3="disabled" />
      <CommonRow div1="done" div2="current" div3="disabled" />
      <CommonRow div1="done" div2="error" div3="disabled" />
      <CommonRow div1="done" div2="done" div3="disabled" />
    </CardBody>
  );
};

export default StatesClassCardBody;
