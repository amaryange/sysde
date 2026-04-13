import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import ScrollBar from 'react-perfect-scrollbar';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { AssetsImagePath } from '@/Constant';
import Image from 'next/image';

const HorizontalSizeScroll = () => {
  return (
    <Col sm='6'>
      <Card>
        <CardHeaderCommon title={'Horizontal Scrollbar'} />
        <CardBody>
          <ScrollBar className='scroll-vertical' options={{ suppressScrollY: true }}>
            <div>
              <Image src={`${AssetsImagePath}/banner/3.jpg`} alt='Horizontal scroll image' height={600} width={903} unoptimized/>
            </div>
          </ScrollBar>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HorizontalSizeScroll;
