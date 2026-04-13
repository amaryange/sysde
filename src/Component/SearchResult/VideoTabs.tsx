import { Javascript } from '@/Constant';
import PagesSort from './Pages';
import React, { Fragment, useEffect, useState } from 'react';
import { Col, ListGroup, ListGroupItem, Media, Row } from 'reactstrap';
import { AllTabsPropsType } from '@/Type/SideBarType';

const VideoTabs = () => {
  const [tabsDatas, setTabsDatas] = useState<AllTabsPropsType[]>();
  useEffect(() => {
    fetch('/api/SearchAllTabApi')
      .then((res) => res.json())
      .then((resp) => {
        setTabsDatas(resp);
      });
  }, []);
  return (
    <Fragment>
      <Row>
        <Col xl='6' className='xl-100 box-col-12'>
          <p className='pb-4'>About 6,000 results (0.60 seconds)</p>
          {tabsDatas &&
            tabsDatas.map((item) => {
              return (
                <Media className='info-block' key={item.id}>
                  <iframe className='me-3 mb-3' title='1' width='200' height='100' src={item.videoLink}></iframe>
                  <Media body>
                    <h6>{item.title}</h6>
                    <a href={Javascript}>{item.url}</a>
                    <p>{item.detail}</p>
                    <div className='star-ratings'>
                      <ListGroup className='search-info d-flex flex-row'>
                        <ListGroupItem>{item.star}</ListGroupItem>
                        <ListGroupItem>{item.vote}</ListGroupItem>
                        <ListGroupItem>{item.news}</ListGroupItem>
                      </ListGroup>
                    </div>
                  </Media>
                </Media>
              );
            })}
          <PagesSort />
        </Col>
        <Col xl='6' className='xl-100 box-col-12'>
          <Row className='search-vid-block'>
            <Col xl='12' className='xl-50 box-col-6'>
              <div className='embed-responsive embed-responsive-21by9'>
                <iframe className='w-100' title='1' height='315' src='https://www.youtube.com/embed/wpmHZspl4EM' allowFullScreen={true}></iframe>
              </div>
            </Col>
            <Col className='col-xl-12 xl-50 box-col-6'>
              <div className='embed-responsive embed-responsive-21by9'>
                <iframe className='w-100' title='1' height='315' src='https://www.youtube.com/embed/I0-vBdh4sZ8' allowFullScreen={true}></iframe>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
};
export default VideoTabs;
