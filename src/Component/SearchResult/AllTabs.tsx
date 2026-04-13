import PagesSort from './Pages';
import React, { Fragment, useEffect, useState } from 'react';
import { Card, Col, ListGroup, ListGroupItem, Row } from 'reactstrap';
import { AssetsImagePath, Javascript } from '@/Constant';
import Image from 'next/image';
import { AllTabsPropsType } from '@/Type/SideBarType';

const AllTabs = () => {
  const [tabsData, setTabsData] = useState<AllTabsPropsType[]>();
  const fetchSearchAllTabApi = async () => {
    const res = await fetch('/api/SearchAllTabApi');
    const result = await res.json();
    setTabsData(result);
  };
  useEffect(() => {
    fetchSearchAllTabApi();
  }, []);
  return (
    <Fragment>
      <div className='search-links tab-pane fade show active' id='all-links' role='tabpanel' aria-labelledby='all-link'>
        <Row>
          <Col xl='6' className='box-col-6'>
            <p className='pb-4'>About 6,000 results (0.60 seconds)</p>
            {tabsData &&
              tabsData.map((item) => {
                return (
                  <div className='info-block' key={item.id}>
                    <h6>{item.title}</h6>
                    <a href={Javascript}>{item.url}</a>
                    <p>{item.detail}</p>
                    <div className='star-ratings'>
                      <ListGroup className='search-info d-flex flex-row'>
                        <ListGroupItem>
                          <ListGroup className=' rating d-flex flex-row'>
                            <ListGroupItem>
                              <i className='icofont icofont-ui-rating'></i>
                            </ListGroupItem>
                            <ListGroupItem>
                              <i className='icofont icofont-ui-rating'></i>
                            </ListGroupItem>
                            <ListGroupItem>
                              <i className='icofont icofont-ui-rating'></i>
                            </ListGroupItem>
                            <ListGroupItem>
                              <i className='icofont icofont-ui-rate-blank'></i>
                            </ListGroupItem>
                            <ListGroupItem>
                              <i className='icofont icofont-ui-rate-blank'></i>
                            </ListGroupItem>
                          </ListGroup>
                        </ListGroupItem>
                        <ListGroupItem>{item.star}</ListGroupItem>
                        <ListGroupItem>{item.vote}</ListGroupItem>
                        <ListGroupItem>{item.news}</ListGroupItem>
                      </ListGroup>
                    </div>
                  </div>
                );
              })}
            <PagesSort />
          </Col>
          <Col xl='6 ' className='box-col-6 search-banner'>
            <Card className='mb-0'>
              <div className='blog-box blog-shadow'>
                <Image width={735} height={459} className='img-fluid bg-img-cover' src={`${AssetsImagePath}/blog/blog.jpg`} alt='' unoptimized/>
                <div className='blog-details'>
                  <p className='digits'>25 July 2023</p>
                  <h4>People just do not do it anymore. We have to change that. Sometimes the simplest things are the most profound.</h4>
                  <ListGroup className=' blog-social digits d-flex flex-row'>
                    <ListGroupItem>
                      <i className='icofont icofont-user'></i>Mark Jecno
                    </ListGroupItem>
                    <ListGroupItem>
                      <i className='icofont icofont-thumbs-up'></i>02 Hits
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};
export default AllTabs;
