import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { Highlight, themes } from "prism-react-renderer";
import { CssData } from '@/Data/Editor';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const CssMode = () => {
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon title="CSS Mode" />
        <CardBody>
          <Highlight theme={themes.vsDark} code={CssData} language="css">
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
export default CssMode;
