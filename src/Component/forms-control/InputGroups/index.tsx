import { Col, Container, Row } from "reactstrap";
import BasicGroup from "./BasicGroup";
import BasicGroup2 from "./BasicGroup2";

const InputGroupsContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col sm="12">
          <BasicGroup />
          <BasicGroup2 />
        </Col>
      </Row>
    </Container>
  );
};
export default InputGroupsContainer;
