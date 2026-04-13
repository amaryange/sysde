import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import ScrollBar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import Image from 'next/image';
import { AssetsImagePath } from '@/Constant';

const VerticalScroll = () => {
  return (
    <Col sm='6'>
      <Card>
        <CardHeaderCommon title='Vertical Scroll' />
        <CardBody>
          <ScrollBar className='scroll-vertical' options={{ suppressScrollX: true }}>
            <div>
              <Image src={`${AssetsImagePath}/banner/3.jpg`} alt='Vertical scroll image' height={600} width={704} unoptimized/>
            </div>
          </ScrollBar>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VerticalScroll;
