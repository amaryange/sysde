import { ABCSeller, BuyingOption, XYZSeller } from '@/Constant';
import { Fragment } from 'react';
import { Col, Card, Label, Input } from 'reactstrap';

const VerticalStyles2 = () => {
  return (
    <Fragment>
      <Col sm='12'>
        <p className='mega-title mb-2'>{BuyingOption}</p>
      </Col>
      <Col sm='6'>
        <Card className='mb-0'>
          <div className='p-20 d-flex'>
            <div className='radio radio-warning me-3'>
              <Input id='radio26' type='radio' name='radio1' value='option1' />
              <Label htmlFor='radio26'></Label>
            </div>
            <div className='flex-grow-1'>
              <h6 className='mt-0 mega-title-badge'>
                {XYZSeller}
                <span className='badge badge-warning pull-right digits'>{'250 INR'}</span>
              </h6>
              <p className='rating-star-wrapper'>
                <i className='icofont icofont-star txt-warning'></i>
                <i className='icofont icofont-star txt-warning'></i>
                <i className='icofont icofont-star txt-warning'></i>
                <i className='icofont icofont-star txt-warning'></i>
                <i className='icofont icofont-star txt-warning m-r-5'></i>
                {'5 start rating'}
              </p>
            </div>
          </div>
        </Card>
      </Col>
      <Col sm='6'>
        <Card className='mb-0'>
          <div className='p-20 d-flex'>
            <div className='radio radio-danger me-3'>
              <Input id='radio27' type='radio' name='radio1' value='option1' />
              <Label htmlFor='radio27'></Label>
            </div>
            <div className='flex-grow-1'>
              <h6 className='mt-0 mega-title-badge'>
                {ABCSeller}
                <span className='badge badge-danger pull-right digits'>{'150 INR'}</span>
              </h6>
              <p className='rating-star-wrapper'>
                <i className='icofont icofont-star txt-warning'></i>
                <i className='icofont icofont-star'></i>
                <i className='icofont icofont-star'></i>
                <i className='icofont icofont-star'></i>
                <i className='icofont icofont-star m-r-5'></i>
                {'1 start rating'}
              </p>
            </div>
          </div>
        </Card>
      </Col>
    </Fragment>
  );
};
export default VerticalStyles2;
