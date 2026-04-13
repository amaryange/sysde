import { AssetsImagePath, LatestPhotosConst } from '@/Constant';
import { LatestPhotosData } from '@/Data/BonusUiData/Tour';
import Image from 'next/image';
import React, { Fragment, useState } from 'react';
import { Col, Card, CardHeader, CardBody, Button, Collapse } from 'reactstrap';

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
              {LatestPhotosConst}
            </Button>
          </h5>
        </CardHeader>
        <Collapse className={isShow ? 'show' : ''} id='collapseicon4'>
          <CardBody className=' photos filter-cards-view'>
            <ul className=' flex-row'>
              {LatestPhotosData.map((item, index) => (
                <li key={index}>
                  <div className='latest-post'>
                    <Image className='img-fluid' width={50} height={50} alt='' src={`${AssetsImagePath}/social-app/post-${item.img}.png`} unoptimized/>
                  </div>
                </li>
              ))}
            </ul>
          </CardBody>
        </Collapse>
      </Card>
    </Col>
  );
};

export default LatestPhotos;
