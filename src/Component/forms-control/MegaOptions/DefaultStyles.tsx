import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { COD, DefaultStyle, Fast } from '@/Constant';
import { Badge, Card, CardBody, Col, Form, Input, Label, Media, Row } from 'reactstrap';
import FooterCard from './Common/FooterCard';

const DefaultStyles = () => {
  return (
    <Col sm='12' xl='6 box-col-12'>
      <Card>
        <CardHeaderCommon title={DefaultStyle} description={"This option is show buydefault you don't need to add any extra class"} />
        <CardBody className='megaoptions-border-space-sm'>
          <Form className='mega-inline'>
            <Row>
              <Col sm='6'>
                <Card>
                  <Media className=' p-20'>
                    <div className='radio radio-primary me-3'>
                      <Input id='radio14' type='radio' name='radio1' value='option1' />
                      <Label htmlFor='radio14'></Label>
                    </div>
                    <Media body>
                      <h6 className='mt-0 mega-title-badge'>
                        {COD}
                        <Badge color='primary' className=' pull-right digits'>
                          {'50 INR'}
                        </Badge>
                      </h6>
                      <p>{'Estimated 1 Day Shipping ( Duties end tax may be due delivery )'}</p>
                    </Media>
                  </Media>
                </Card>
              </Col>
              <Col sm='6'>
                <Card>
                  <div className='p-20 d-flex'>
                    <div className='radio radio-secondary me-3'>
                      <Input id='radio13' type='radio' name='radio1' value='option1' />
                      <Label htmlFor='radio13'></Label>
                    </div>
                    <div className='flex-grow-1'>
                      <h6 className='mt-0 mega-title-badge'>
                        {Fast}
                        <Badge color='secondary' className=' pull-right digits'>
                          {'50 INR'}
                        </Badge>
                      </h6>
                      <p>{'Estimated 1 Day Shipping ( Duties end tax may be due delivery )'}</p>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </Form>
        </CardBody>
        <FooterCard />
      </Card>
    </Col>
  );
};
export default DefaultStyles;
