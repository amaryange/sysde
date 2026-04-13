import React, { useState } from 'react';
import { Button, Card, CardBody, Col, ListGroup, ListGroupItem, Progress } from 'reactstrap';
import { Database, Grid } from 'react-feather';
import { AssetsImagePath, ContactUs, FREE, Premium, PricingPlan, Selected, Storage, TrialVersion } from '@/Constant';
import Image from 'next/image';
import { SideButtons } from '@/Data/FileManagerData';

const LeftFileManager = () => {
  const [SideBarOpen, setSidebarOpen] = useState(false);
  const onClickHandle = () => {
    setSidebarOpen(!SideBarOpen);
  };
  return (
    <Col xl='3' className='box-col-3 pe-0 file-spacing '>
      <div className='md-sidebar job-sidebar'>
        <Button color='primary' className='md-sidebar-toggle' onClick={onClickHandle}>
          File filter
        </Button>
        <div className={`md-sidebar-aside job-left-aside mb-3 custom-scrollbar ${SideBarOpen ? 'open' : ''}`}>
          <div className='file-sidebar'>
            <Card>
              <CardBody>
                <ListGroup>
                  {SideButtons.map((item) => {
                    return (
                      <ListGroupItem key={item.id}>
                        <Button block color={item.className} className='text-start'>
                          {item.icon}
                          {item.title}
                        </Button>
                      </ListGroupItem>
                    );
                  })}
                </ListGroup>
                <hr />
                <ul>
                  <li>
                    <Button tag={'div'} outline color='primary'>
                      <Database />
                      {Storage}
                    </Button>
                    <div className='m-t-15'>
                      <div className='progress sm-progress-bar mb-1'>
                        <Progress className=' bg-primary' role='progressbar' style={{ width: '25%' }}></Progress>
                      </div>
                      <h6>{'25 GB of 100 GB used'}</h6>
                    </div>
                  </li>
                </ul>
                <hr />
                <ul>
                  <li>
                    <Button tag={'div'} outline color='primary'>
                      <Grid />
                      {PricingPlan}
                    </Button>
                  </li>
                  <li>
                    <div className='pricing-plan'>
                      <h6>{TrialVersion} </h6>
                      <h5>{FREE}</h5>
                      <p>{'100 GB Space'}</p>
                      <Button size='xs' color='primary' outline>
                        {Selected}
                      </Button>
                      <Image className='bg-img' src={`${AssetsImagePath}/dashboard/folder.png`} alt='' height={100} width={100} unoptimized/>
                    </div>
                  </li>
                  <li>
                    <div className='pricing-plan'>
                      <h6>{Premium}</h6>
                      <h5>{'$5/month'}</h5>
                      <p> {'200 GB Space'}</p>
                      <Button size='xs' color='primary' outline>
                        {ContactUs}
                      </Button>
                      <Image className='bg-img' src={`${AssetsImagePath}/dashboard/folder1.png`} alt='' height={100} width={100} unoptimized/>
                    </div>
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </Col>
  );
};
export default LeftFileManager;
