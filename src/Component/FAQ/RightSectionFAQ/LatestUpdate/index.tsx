import { Javascript, LatestUpdates, SeeAll } from '@/Constant';
import { LatestUpdatesData } from '@/Data/FAQ/Faq';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Media } from 'reactstrap';

const LatestUpdate = () => {
  return (
    <Col lg='12'>
      <Card>
        <CardHeader className='faq-header'>
          <h5 className='d-inline-block'>{LatestUpdates}</h5>
          <span className='pull-right d-inline-block'>{SeeAll}</span>
        </CardHeader>
        <CardBody className='faq-body'>
          {LatestUpdatesData.map((item, i) => {
            return (
              <Media className='updates-faq-main' key={i}>
                <div className='updates-faq'>{item.icon}</div>
                <Media body className='updates-bottom-time'>
                  <p>
                    {item.name} <a href={Javascript}>{item.value}</a> {item.title}
                  </p>
                  <p>{item.time}</p>
                </Media>
              </Media>
            );
          })}
        </CardBody>
      </Card>
    </Col>
  );
};

export default LatestUpdate;
