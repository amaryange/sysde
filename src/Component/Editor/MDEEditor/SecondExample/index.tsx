import React, { useState } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import SimpleMDE from "react-simplemde-editor";

const SecondExample = () => {
  const [value, setValue] = useState<string | undefined>();
  const handelChange = (e: string) => {
    setValue(e);
  };
  return (
    <Container fluid={true}>
      <Row>
        <Col sm="12">
          <Card>
            <CardHeader>
              <h5>Second Example</h5>
            </CardHeader>
            <CardBody>
              <Row>
                <Col md="6">
                  <SimpleMDE
                    id="editor_container"
                    options={{
                      autofocus: true,
                      spellChecker: false,
                    }}
                    onChange={handelChange}
                  />
                </Col>
                <div className="col-md-6 reader">
                  <h3>Instructions</h3>
                  <p>{"Enter text in the area on the left. For more info, click the ? (help) icon in the menu."}</p>
                  <br />
                  {value}
                </div>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default SecondExample;
