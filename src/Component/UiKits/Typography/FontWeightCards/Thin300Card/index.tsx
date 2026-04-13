import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Thin300 } from '../../../../../Constant/index';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const Thin300Card = () => {
  return (
    <Card>
      <CardHeaderCommon title={Thin300} />
      <CardBody className='typography'>
        <h1 className='f-w-300'>{Heading1}</h1>
        <h2 className='f-w-300'>{Heading2}</h2>
        <h3 className='f-w-300'>{Heading3}</h3>
        <h4 className='f-w-300'>{Heading4}</h4>
        <h5 className='f-w-300'>{Heading5}</h5>
        <h6 className='f-w-300'>{Heading6}</h6>
      </CardBody>
    </Card>
  );
};
export default Thin300Card;
