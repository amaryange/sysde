import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { Highlight, themes } from "prism-react-renderer";
import { JavascriptData } from '@/Data/Editor';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const JavaScriptMode = () => {
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon title="Javascript Mode" />
        <CardBody>
          <div className="ace-editor" id="editor">
            <Highlight theme={themes.vsDark} code={JavascriptData} language="javascript">
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
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default JavaScriptMode;
