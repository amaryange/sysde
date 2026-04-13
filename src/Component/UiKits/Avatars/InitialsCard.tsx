import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { SizingCardData } from '@/Data/UiKitsData/Avtars/SizingCardData';
import { AssetsImagePath, Initials } from '@/Constant';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import Image from 'next/image';

const InitialsCard = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={Initials} />
        <CardBody className='avatar-showcase'>
          <div className='avatars'>
            <div className='avatar'>
              <Image className='rounded-circle' width={100} height={100} src={`${AssetsImagePath}/user/16.png`} alt='Initial card image' unoptimized/>
            </div>
            {SizingCardData.map((element, index) => (
              <div key={index} className='avatar'>
                <Image className='rounded-circle' width={element} height={element} src={`${AssetsImagePath}/user/16.png`} alt='Initial card image' unoptimized/>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default InitialsCard;
