import { AssetsImagePath } from '@/Constant';
import { LatestPhotosData } from '@/Data/SocialApp';
import Image from 'next/image';
import React, { useState } from 'react';
import { Col, Card, CardHeader, CardBody, Button } from 'reactstrap';

const LatestPhotos = () => {
  const [isShow, setIsShow] = useState(true);

  const toggleClick = () => {
    setIsShow(!isShow);
  };

  return (
    <Col xl='12' lg='6' md='12' sm='6'>
      <Card>
        <CardHeader>
          <h5 className='p-0'>
            <Button className='btn-link ps-0' color='transperant' onClick={toggleClick}>
              Latest Photos
            </Button>
          </h5>
        </CardHeader>
        <div className={`collapse ${isShow && 'show'}`} id='collapseicon4'>
          <CardBody className=' photos filter-cards-view'>
            <ul className=' flex-row'>
              {LatestPhotosData.map((item, i) => (
                <li key={i}>
                  <div className='latest-post'>
                    <Image className='img-fluid' width={50} height={50} alt='' src={`${AssetsImagePath}/social-app/${item}`} />
                  </div>
                </li>
              ))}
            </ul>
          </CardBody>
        </div>
      </Card>
    </Col>
  );
};

export default LatestPhotos;
