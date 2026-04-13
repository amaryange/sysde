import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { AssetsImagePath } from '@/Constant';
import Image from 'next/image';
import ScrollBar from 'react-perfect-scrollbar';

const NoScrollbar = () => {
  return (
    <Col sm='6'>
      <Card>
        <CardHeaderCommon title={'Horizontal Scrollbar'} />
        <CardBody>
          <ScrollBar className='scroll-vertical' options={{ suppressScrollX: true, suppressScrollY: true }}>
            <div>
              <Image src={`${AssetsImagePath}/banner/3.jpg`} alt='NoScrollbar scroll image' height={600} width={704} unoptimized/>
            </div>
          </ScrollBar>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NoScrollbar;
