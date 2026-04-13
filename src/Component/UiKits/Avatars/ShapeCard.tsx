import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { AssetsImagePath, Shape } from '@/Constant';
import { ShapeCardData } from '@/Data/UiKitsData/Avtars/ShapeCardData';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import Image from 'next/image';

const ShapeCard = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={Shape} />
        <CardBody className='avatar-showcase'>
          <div className='avatars'>
            <div className='avatar'>
              <Image className='rounded-circle b-r-8' width={100} height={100} src={`${AssetsImagePath}/user/1.jpg`} alt='Shape Image' unoptimized/>
            </div>
            {ShapeCardData.map((element, index) => (
              <div key={index} className='avatar'>
                <Image className={`rounded-circle ${element.statusClass}`} width={element.size} height={element.size} src={`${AssetsImagePath}/user/1.jpg`} alt='Sizing Image' unoptimized/>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ShapeCard;
