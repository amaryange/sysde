import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { COD, Fast, OfferStyleBorder } from '@/Constant';
import { Card, CardBody, Col, Form, Input, Label, Row } from 'reactstrap';
import FooterCard from './Common/FooterCard';

const OfferStyle = () => {
  return (
    <Col sm='12' xl='6 box-col-12'>
      <Card>
        <CardHeaderCommon title={OfferStyleBorder} description={'By adding .offer-style class to .mega-inline You can archive this style'} />
        <CardBody className='megaoptions-border-space-sm'>
          <Form className='mega-inline offer-style'>
            <Row>
              <Col sm='6'>
                <Card>
                  <div className='p-20 d-flex'>
                    <div className='radio radio-primary me-3'>
                      <Input id='radio17' type='radio' name='radio1' value='option1' />
                      <Label htmlFor='radio17'></Label>
                    </div>
                    <div className='flex-grow-1'>
                      <h6 className='mt-0 mega-title-badge'>
                        {COD}
                        <span className='badge badge-primary pull-right digits'>{'50 INR'}</span>
                      </h6>
                      <p>{'Estimated 1 Day Shipping ( Duties end tax may be due delivery )'}</p>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col sm='6'>
                <Card>
                  <div className='p-20 d-flex'>
                    <div className='radio radio-secondary me-3'>
                      <Input id='radio18' type='radio' name='radio1' value='option1' />
                      <Label htmlFor='radio18'></Label>
                    </div>
                    <div className='flex-grow-1'>
                      <h6 className='mt-0 mega-title-badge'>
                        {Fast}
                        <span className='badge badge-secondary pull-right digits'>{'50 INR'}</span>
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
export default OfferStyle;
