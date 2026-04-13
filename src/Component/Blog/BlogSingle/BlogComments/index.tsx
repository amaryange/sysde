import React, { Fragment } from 'react';
import { Row, Col, Media, Card, CardBody, ListGroup, ListGroupItem } from 'reactstrap';
import { Comment, AssetsImagePath } from '@/Constant';
import { BlogSingleCommentsData } from '@/Data/Blog';
import Image from 'next/image';

const BlogComments = () => {
  return (
    <Card className='comment-box'>
      <CardBody>
        <h4>{Comment}</h4>
        <ListGroup>
          {BlogSingleCommentsData.map((item) => (
            <Fragment key={item.id}>
              <ListGroupItem>
                <Col tag={item.class ? 'ul' : 'div'}>
                  <Media className='align-self-center'>
                    <Image height={50} width={50} className='align-self-center' src={`${AssetsImagePath}/blog/comment.jpg`} alt='' unoptimized/>
                    <Media body>
                      <Row>
                        <Col md='4'>
                          <h6 className='mt-0'>
                            {item.name}
                            <span> {`( ${item.post} ) `}</span>
                          </h6>
                        </Col>
                        {!item.class && (
                          <Col md='8'>
                            <ListGroup className='comment-social '>
                              <ListGroupItem>
                                <i className='icofont icofont-thumbs-up'></i>
                                {item.hits}
                              </ListGroupItem>
                              <ListGroupItem>
                                <i className='icofont icofont-ui-chat'></i>
                                {item.comments}
                              </ListGroupItem>
                            </ListGroup>
                          </Col>
                        )}
                      </Row>
                      <p>{item.paragraph}</p>
                    </Media>
                  </Media>
                </Col>
              </ListGroupItem>
            </Fragment>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  );
};
export default BlogComments;
