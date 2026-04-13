import React from 'react';
import { Card, Col, Row } from 'reactstrap';
import Image from 'next/image';
import { Javascript, AssetsImagePath } from '@/Constant';
import { TopLearningListData } from '@/Data/Learning';
const TopLearningList = () => {
  return (
    <>
      {TopLearningListData.map((item, i) => (
        <Col key={i} xl='12' sm='6'>
          <Card>
            <Row className='blog-box blog-list'>
              <Col xl='5 ' xs='12'>
                <Image height={200} width={200} className='img-fluid sm-100-w' src={`${AssetsImagePath}/faq/${item.image}.jpg`} alt='' unoptimized/>
              </Col>
              <Col xl='7 col-12'>
                <div className='blog-details'>
                  <div className='blog-date'>
                    <span>{item.span}</span> {item.date}
                  </div>
                  <a href={Javascript}>
                    <h6>{item.heading} </h6>
                  </a>
                  <div className='blog-bottom-content'>
                    <ul className=' blog-social flex-row'>
                      <li>{item.author}</li>
                      <li>{item.hits}</li>
                    </ul>
                    <hr />
                    <p className='mt-0'>{'inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.'}</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default TopLearningList;
