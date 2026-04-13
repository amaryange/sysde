import { CardBody } from "reactstrap";
import CommonRow from "./Common/CommonRow";

const PearlsStepSizingCardBody = () => {
  return (
    <CardBody>
      <CommonRow RowClass="u-pearls-xs mb-5" />
      <CommonRow RowClass="u-pearls-sm mb-5" />
      <CommonRow RowClass="mb-5" />
      <CommonRow RowClass="u-pearls-lg" />
    </CardBody>
  );
};

export default PearlsStepSizingCardBody;
