import { Row, Col, Card, CardBody } from 'reactstrap';
import SimpleMDE from 'react-simplemde-editor';
import { MDEExampleParagraph } from '@/Data/Editor';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const MDEExample = () => {
  return (
    <Row>
      <Col sm='12'>
        <Card>
          <CardHeaderCommon title='MDE Editor Example' />
          <CardBody>
            <SimpleMDE
              id='editor_container'
              value={MDEExampleParagraph}
              options={{
                autofocus: true,
                spellChecker: false,
              }}
            />
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default MDEExample;
