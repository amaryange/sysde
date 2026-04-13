import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { Highlight, themes } from "prism-react-renderer";
import { Typescript } from '@/Data/Editor';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const JavaMode = () => {
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon title="Java Mode" />
        <CardBody>
          <Highlight theme={themes.vsDark} code={Typescript} language="Java">
            {({ style, tokens, getLineProps, getTokenProps }) => (
              <pre style={style}>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </CardBody>
      </Card>
    </Col>
  );
};
export default JavaMode;
