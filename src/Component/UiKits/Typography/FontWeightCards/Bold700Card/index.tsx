import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Bold700 } from '../../../../../Constant/index';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const Bold700Card = () => {
  return (
    <Card>
      <CardHeaderCommon title={Bold700} />
      <CardBody className='typography'>
        <h1 className='f-w-700'>{Heading1}</h1>
        <h2 className='f-w-700'>{Heading2}</h2>
        <h3 className='f-w-700'>{Heading3}</h3>
        <h4 className='f-w-700'>{Heading4}</h4>
        <h5 className='f-w-700'>{Heading5}</h5>
        <h6 className='f-w-700'>{Heading6}</h6>
      </CardBody>
    </Card>
  );
};
export default Bold700Card;
