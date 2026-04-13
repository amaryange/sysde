import React from 'react';
import { Card, Col, Row } from 'reactstrap';
import Image from 'next/image';
import { BlogDetailsHeading, BlogDetailsImage, BlogDetailsParagraph } from '@/Data/Blog';
import { AssetsImagePath } from '@/Constant';

const RightSection = () => {
  return (
    <>
      <Col xxl='6' className='set-col-12 box-col-12'>
        <Row>
          {BlogDetailsImage.map((item, i) => (
            <Col key={i} xl='12' md='6'>
              <Card>
                <Row className='blog-box blog-list'>
                  <Col xl='6' xs='12'>
                    <div className='blog-wrraper'>
                      <Image height={217} width={305} className='p-0' src={`${AssetsImagePath}/blog/blog-${item}.jpg`} alt='' unoptimized/>
                    </div>
                  </Col>
                  <Col xl='6' xs='12'>
                    <div className='blog-details'>
                      <div className='blog-date'>
                        <span>{i + 2}</span> January 2023
                      </div>
                      <h6>{BlogDetailsHeading} </h6>
                      <div className='blog-bottom-content'>
                        <ul className='flex-row blog-social'>
                          <li>by: Admin</li>
                          <li>0 Hits</li>
                        </ul>
                        <hr />
                        <p className='mt-0'>{BlogDetailsParagraph}</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    </>
  );
};

export default RightSection;
