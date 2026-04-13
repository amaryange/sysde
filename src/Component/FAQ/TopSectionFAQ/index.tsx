import React, { Fragment } from 'react';
import { Card, CardBody, Col, Media } from 'reactstrap';
import { Javascript } from '@/Constant';
import { FAQData, TopSectionFAQData } from '@/Data/FAQ/Faq';

const TopSectionFAQ = () => {
  return (
    <>
      {TopSectionFAQData.map((item, i) => {
        return (
          <Col xl='4' lg='6' sm='6' key={i}>
            <Card className='bg-primary'>
              <CardBody>
                <Media className='faq-widgets'>
                  <Media body>
                    <a href={Javascript}>
                      <h5>{item.title}</h5>
                    </a>
                    <p>{FAQData}</p>
                  </Media>
                  {item.icon}
                </Media>
              </CardBody>
            </Card>
          </Col>
        );
      })}
    </>
  );
};
export default TopSectionFAQ;
