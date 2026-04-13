import { RibbonData } from '@/Data/BonusUiData/RibbonData';
import { Fragment } from 'react';

import { Col, Card, CardBody } from 'reactstrap';

const DynamicRibbon = () => {
  return (
    <Fragment>
      {RibbonData.map((item) => (
        <Col key={item.id} sm='14' md='6' lg='4'>
          <Card className={item.wrapperClass}>
            <CardBody>
              <div className={item.class}>{item?.title}</div>
              <p>{item.pera}</p>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Fragment>
  );
};

export default DynamicRibbon;
