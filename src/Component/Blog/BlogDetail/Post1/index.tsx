import React from 'react';
import { Card, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { AssetsImagePath, MarkJecno } from '@/Constant';
import Image from 'next/image';

const Post1 = () => {
  return (
    <Col xl='6' className='set-col-12 box-col-12 '>
      <Card>
        <div className='blog-box blog-shadow'>
          <Image height={479} width={766} className='w-100 img-fluid bg-img-cover' src={`${AssetsImagePath}/blog/blog.jpg`} alt='' unoptimized/>
          <div className='blog-details'>
            <p>{'25 July 2023'}</p>
            <h4>{'Accusamus et iusto odio dignissimos ducimus qui blanditiis.'}</h4>
            <ListGroup className=' blog-social flex-row'>
              <ListGroupItem>
                <i className='icofont icofont-user'></i>
                {MarkJecno}
              </ListGroupItem>
              <ListGroupItem>
                <i className='icofont icofont-thumbs-up'></i>
                {'02 Hits'}
              </ListGroupItem>
              <ListGroupItem>
                <i className='icofont icofont-ui-chat'></i>
                {'598 Comments'}
              </ListGroupItem>
            </ListGroup>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default Post1;
