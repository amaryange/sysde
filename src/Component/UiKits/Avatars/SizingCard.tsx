import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import Image from 'next/image';
import { AssetsImagePath, Sizing } from '@/Constant';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { SizingCardData } from '@/Data/UiKitsData/Avtars/SizingCardData';

const SizingCard = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={Sizing} />
        <CardBody className='avatar-showcase'>
          <div className='avatars'>
            <div className='avatar'>
              <Image className='img-100 rounded-circle' width={100} height={100} src={`${AssetsImagePath}/user/1.jpg`} alt='Sizing Image' unoptimized/>
            </div>
            {SizingCardData.map((element, index) => (
              <div key={index} className='avatar'>
                <Image className={`img-${element} rounded-circle`} width={element} height={element} src={`${AssetsImagePath}/user/1.jpg`} alt='Sizing Image' unoptimized/>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SizingCard;
