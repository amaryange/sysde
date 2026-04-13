import React from 'react';
import { Card, CardBody, Col, ListGroup, ListGroupItem, Media, Row } from 'reactstrap';
import { Comment, Designer, AssetsImagePath, JolioMark } from '@/Constant';
import Image from 'next/image';
import Comments1 from './Comment1';
import { DetailCourseComment } from '@/Data/Learning';

const Comments = () => {
  const Image3 = true;
  return (
    <Card className='comment-box'>
      <CardBody>
        <h4>{Comment}</h4>
        <ListGroup>
          <Comments1 />
          <ListGroupItem>
            <ListGroup>
              <ListGroupItem>
                <Media>
                  <Image height={100} width={100} src={`${AssetsImagePath}/blog/9.jpg`} alt='' unoptimized/>
                  <Media body>
                    <Row>
                      <Col xl='12'>
                        <h6 className='mt-0'>
                          {JolioMark}
                          <span> {Designer} </span>
                        </h6>
                      </Col>
                    </Row>
                    <p>{DetailCourseComment}</p>
                  </Media>
                </Media>
              </ListGroupItem>
            </ListGroup>
          </ListGroupItem>
          <Comments1 Image3={Image3} />
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default Comments;
