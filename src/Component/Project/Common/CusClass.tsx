import { AssetsImagePath, Comments, Done, Issues, Resolved } from '@/Constant';
import Image from 'next/image';
import React from 'react';
import { Col, Row, Progress, ListGroup, ListGroupItem, Badge, Media } from 'reactstrap';

const CusClass = ({ item }: any) => {
  return (
    <Col xxl='4' lg='6'>
      <div className='project-box'>
        <Badge className={` ${item.badge === 'Done' ? 'badge-secondary' : 'badge-success'}`}>{item.badge}</Badge>
        <h6>{item.title}</h6>
        <Media>
          <Image className='img-20 me-1 rounded-circle' src={`${AssetsImagePath}/${item.img}`} alt='' width={20} height={20} unoptimized/>
          <Media body>
            <p>{item.sites}</p>
          </Media>
        </Media>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <Row className='details'>
          <Col xs='6'>
            <span>{Issues} </span>
          </Col>
          <Col xs='6' className={item.badge === 'Done' ? 'font-secondary' : 'font-primary'}>
            {Math.floor(Math.random() * 100)}
          </Col>
          <Col xs='6'>
            {' '}
            <span>{Resolved}</span>
          </Col>
          <Col xs='6' className={item.badge === 'Done' ? 'font-secondary' : 'font-primary'}>
            {Math.floor(Math.random() * 100)}
          </Col>
          <Col xs='6'>
            {' '}
            <span>{Comments}</span>
          </Col>
          <Col xs='6' className={item.badge === 'Done' ? 'font-secondary' : 'font-primary'}>
            {Math.floor(Math.random() * 100)}
          </Col>
        </Row>
        <div className='customers'>
          <ListGroup>
            <ListGroupItem className='d-inline-block'>
              <Image width={30} height={30} className='img-30 rounded-circle' src={`${AssetsImagePath}/${item.customers_img1}`} alt='' unoptimized/>
            </ListGroupItem>
            <ListGroupItem className='d-inline-block'>
              <Image width={30} height={30} className='img-30 rounded-circle' src={`${AssetsImagePath}/${item.customers_img2}`} alt='' unoptimized/>
            </ListGroupItem>
            <ListGroupItem className='d-inline-block'>
              <Image width={30} height={30} className='img-30 rounded-circle' src={`${AssetsImagePath}/${item.customers_img3}`} alt='' unoptimized/>
            </ListGroupItem>
            <ListGroupItem className='d-inline-block ms-2'>
              <p className='f-12'>{`+${item.like} More`}</p>
            </ListGroupItem>
          </ListGroup>
        </div>
        <div className='project-status mt-4'>
          <Media className=' mb-0'>
            <p>{item.progress}% </p>
            <Media body className='text-end'>
              <span>{Done}</span>
            </Media>
          </Media>
          {item.progress === '100' ? <Progress className='sm-progress-bar' color='secondary' value={item.progress} style={{ height: '5px' }} /> : <Progress className='sm-progress-bar' striped color='success' value={item.progress} style={{ height: '5px' }} />}
        </div>
      </div>
    </Col>
  );
};

export default CusClass;
