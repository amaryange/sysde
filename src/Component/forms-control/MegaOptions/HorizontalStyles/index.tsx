import { Card, CardBody, Col, Form, Input, Label, Media, Row } from 'reactstrap';
import HorizontalStyleHeader from './HorizontalStyleHeader';
import FooterCard from '../Common/FooterCard';
import { ABCSeller, BuyingOption, COD, DeliveryOption, Fast, XYZSeller } from '@/Constant';

const HorizontalStyles = () => {
  return (
    <Col sm='12' xl='6'>
      <Card className='height-equal'>
        <HorizontalStyleHeader />
        <CardBody>
          <Form className="mega-horizontal">
            <Row>
              <Col sm="3">
                <p className='mega-title'>{DeliveryOption}</p>
              </Col>
              <Col sm="9">
                <Card>
                  <Media className="p-20">
                    <div className="radio radio-primary me-3">
                      <Input id="radio30" type="radio" name="radio1" value="option1" />
                      <Label for="radio30"></Label>
                    </div>
                    <Media body>
                      <h6 className='mt-0 mega-title-badge'>{COD}<span className="badge badge-primary pull-right digits">{'50 INR'}</span></h6>
                      <p>{'Estimated 5 Day Shipping ( Duties end tax may be due delivery )'}</p>
                    </Media>
                  </Media>
                </Card>
              </Col>
              <Col sm="9 offset-sm-3">
                <Card>
                  <Media className="p-20">
                    <div className="radio radio-secondary me-3">
                      <Input id="radio31" type="radio" name="radio1" value="option1" />
                      <Label for="radio31"></Label>
                    </div>
                    <Media body>
                      <h6 className='mt-0 mega-title-badge'>{Fast} <span className="badge badge-secondary pull-right digits">{'100 INR'}</span></h6>
                      <p>{'Estimated 1 Day Shipping ( Duties end tax may be due delivery )'}</p>
                    </Media>
                  </Media>
                </Card>
              </Col>
              <Col sm="3">
                <p className='mega-title'>{BuyingOption}</p>
              </Col>
              <Col sm="9">
                <Card>
                  <Media className="p-20">
                    <div className="radio radio-success me-3">
                      <Input id="radio32" type="radio" name="radio1" value="option1" />
                      <Label for="radio32"></Label>
                    </div>
                    <Media body>
                      <h6 className='mt-0 mega-title-badge'>{XYZSeller}<span className="badge badge-success pull-right digits">{'250 INR'}</span></h6>
                      <p className='rating-star-wrapper'><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star txt-warning m-r-5"></i>{'5 start rating'}</p>
                    </Media>
                  </Media>
                </Card>
              </Col>
              <Col sm="9 offset-sm-3">
                <div className="card mb-0">
                  <Media className="p-20">
                    <div className="radio radio-info me-3">
                      <Input id="radio33" type="radio" name="radio1" value="option1" />
                      <Label for="radio33"></Label>
                    </div>
                    <Media body>
                      <h6 className='mt-0 mega-title-badge'>{ABCSeller}<span className="badge badge-info pull-right digits">{'150 INR'}</span></h6>
                      <p className='rating-star-wrapper'><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star"></i><i className="icofont icofont-star"></i><i className="icofont icofont-star"></i><i className="icofont icofont-star m-r-5"></i>{'1 start rating'}</p>
                    </Media>
                  </Media>
                </div>
              </Col>
            </Row>
          </Form>
        </CardBody>
        <FooterCard />
      </Card>
    </Col>
  );
};

export default HorizontalStyles;
