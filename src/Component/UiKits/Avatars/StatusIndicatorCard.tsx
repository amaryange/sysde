import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { AssetsImagePath, StatusIndicator } from '@/Constant';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { StatusIndicatorCardData } from '@/Data/UiKitsData/Avtars/StatusIndicatorCardData';
import Image from 'next/image';

const StatusIndicatorCard = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={StatusIndicator} />
        <CardBody className='avatar-showcase'>
          <div className='avatars'>
            <div className='avatar'>
              <Image className='rounded-circle' height={100} width={100} src={`${AssetsImagePath}/user/1.jpg`} alt='Status Indicator image' unoptimized/>
              <div className='status status-100 bg-success'> </div>
            </div>
            {StatusIndicatorCardData.map((element, index) => (
              <div key={index} className='avatar'>
                <Image className=' rounded-circle' height={element.size} width={element.size} src={`${AssetsImagePath}/user/1.jpg`} alt='Status Indicator image' unoptimized/>
                <div className={`status ${element.statusClass}`}></div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StatusIndicatorCard;
