import { Row, Col, CardBody, Card } from 'reactstrap';

const RibbonClass = () => {
  let number = [1, 2, 3];
  return (
    <CardBody className='ribbons-main'>
      <Row>
        {number.map((data) => (
          <Col sm='12' md='6' lg='4' key={data}>
            <Card className='ribbon-wrapper'>
              <CardBody>
                <div className='ribbon ribbon-primary ribbon-space-bottom'>Ribbon</div>
                <p>Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industry'sstandard dummy text.</p>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </CardBody>
  );
};

export default RibbonClass;
