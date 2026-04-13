import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { COD, Fast, Free, InlineStyle, Local, Standard } from '@/Constant';
import { InlineStylesDescription } from '@/Data/CardHeaderCommonData';
import { Card, CardBody, Col, Form, Input, Label, Row } from 'reactstrap';
import FooterCard from './Common/FooterCard';

const InlineStyles = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={InlineStyle} description={InlineStylesDescription} />
        <CardBody className='megaoptions-border-space-sm'>
          <Form className='mega-inline'>
            <Row>
              <Col sm='6'>
                <Card>
                  <div className='p-20 d-flex'>
                    <div className='radio radio-primary me-3'>
                      <Input id='radio19' type='radio' name='radio1' value='option1' />
                      <Label htmlFor='radio19'></Label>
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
                      <Input id='radio20' type='radio' name='radio1' value='option1' />
                      <Label htmlFor='radio20'></Label>
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
              <Col sm='6'>
                <Card>
                  <div className='p-20 d-flex'>
                    <div className='radio radio-secondary me-3'>
                      <Input id='radio21' type='radio' name='radio1' value='option1' />
                      <Label htmlFor='radio21'></Label>
                    </div>
                    <div className='flex-grow-1'>
                      <h6 className='mt-0 mega-title-badge'>
                        {Standard}
                        <span className='badge badge-secondary pull-right digits'>{'80 INR'}</span>
                      </h6>
                      <p>{'Estimated 3 Day Shipping ( Duties end taxes may be due upon delivery )'}</p>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col sm='6'>
                <Card>
                  <div className='p-20 d-flex'>
                    <div className='radio radio-primary me-3'>
                      <Input id='radio22' type='radio' name='radio1' value='option1' />
                      <Label htmlFor='radio22'></Label>
                    </div>
                    <div className='flex-grow-1'>
                      <h6 className='mt-0 mega-title-badge'>
                        {Local} <span className='badge badge-primary pull-right digits'>{Free}</span>
                      </h6>
                      <p>{'Estimated 15 Day Shipping ( Duties end taxes may be due upon delivery )'}</p>
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
export default InlineStyles;
