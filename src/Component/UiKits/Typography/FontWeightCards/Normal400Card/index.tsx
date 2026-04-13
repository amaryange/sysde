import React from 'react';
import { Fragment } from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Normal400 } from '../../../../../Constant/index';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const Normal400Card = () => {
  return (
    <Card>
      <CardHeaderCommon title={Normal400} />
      <CardBody className='typography'>
        <h1 className='f-w-400'>{Heading1}</h1>
        <h2 className='f-w-400'>{Heading2}</h2>
        <h3 className='f-w-400'>{Heading3}</h3>
        <h4 className='f-w-400'>{Heading4}</h4>
        <h5 className='f-w-400'>{Heading5}</h5>
        <h6 className='f-w-400'>{Heading6}</h6>
      </CardBody>
    </Card>
  );
};
export default Normal400Card;
