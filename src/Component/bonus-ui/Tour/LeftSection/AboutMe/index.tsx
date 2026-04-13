import { Aboutme, Dribbble, Facebook, SocialNetworks, Twitter } from '@/Constant';
import { AboutMeData } from '@/Data/BonusUiData/Tour';
import Link from 'next/link';
import React, { Fragment, useState } from 'react';
import { Col, Card, CardHeader, CardBody, Button } from 'reactstrap';

const AboutMe = () => {
  const [isShow, setIsShow] = useState(true);
  const toggleClick = () => {
    setIsShow(!isShow);
  };

  return (
    <Col xl='12'>
      <Card className='step4'>
        <CardHeader>
          <h5 className='p-0'>
            <Button className='btn-link ps-0' color='transperant' onClick={toggleClick}>
              {Aboutme}
            </Button>
          </h5>
        </CardHeader>
        <div className={`collapse ${isShow && 'show'}`} id='collapseicon2'>
          <CardBody className='post-about'>
            <ul>
              {AboutMeData.map((item, i) => (
                <li key={i}>
                  <div className='icon'>{item.icon}</div>
                  <div>
                    <h5>{item.designation}</h5>
                    <p>{item.place}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className='social-network theme-form'>
              <span className='f-w-600'>{SocialNetworks}</span>
              <Link href="https://www.facebook.com/" className='btn social-btn btn-fb mb-2 text-center' color='transperent' target='_blank'>
                <i className='fa fa-facebook m-r-5'></i>
                {Facebook}
              </Link>
              <Link href="https://twitter.com/" className='btn social-btn btn-twitter mb-2 text-center' color='transperent' target='_blank'>
                <i className='fa fa-twitter m-r-5'></i>
                {Twitter}
              </Link>
              <Link href="https://dribbble.com/" className='btn social-btn btn-google text-center' color='transperent' target='_blank'>
                <i className='fa fa-dribbble m-r-5'></i>
                {Dribbble}
              </Link>
            </div>
          </CardBody>
        </div>
      </Card>
    </Col>
  );
};

export default AboutMe;
