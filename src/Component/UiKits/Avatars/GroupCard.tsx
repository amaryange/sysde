import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { GroupCardData } from '@/Data/UiKitsData/Avtars/GroupCardData';
import { AssetsImagePath, Groups } from '@/Constant';
import Image from 'next/image';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const GroupCard = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={Groups} />
        <CardBody className='avatar-showcase'>
          {GroupCardData.map((element, index) => (
            <div key={index} className='customers d-inline-block avatar-group'>
              <ul>
                {element.path.map((item, index) => (
                  <li key={index} className='d-inline-block'>
                    <Image className='rounded-circle' height={element.size} width={element.size} src={`${AssetsImagePath}/${item}`} alt='group image' unoptimized/>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default GroupCard;
