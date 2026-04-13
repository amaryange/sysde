import { LatestArticlesData } from '@/Data/FAQ/Faq';
import React, { Fragment } from 'react';
import { Card, CardBody, Col, Media, Row } from 'reactstrap';

const LatestArticles = () => {
  return (
    <Fragment>
      <Row>
        <Col lg='12'>
          <div className='header-faq'>
            <h5>Latest articles and videos</h5>
          </div>
          <Row>
            {LatestArticlesData.map((item, i) => (
              <Col xl='4' md='6'>
                <Card key={i}>
                  <CardBody>
                    <Media>
                      {item.IconClass}
                      <Media body>
                        <h6 className='f-w-600'>{item.title}</h6>
                        <p>Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
                      </Media>
                    </Media>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
};
export default LatestArticles;
