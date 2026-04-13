import React from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader } from 'reactstrap';
import BacicGroup2CardBody from './BasicGroup2CardBody';
import { BasicInputGroups, Cancel, Submit } from '@/Constant';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const BasicGroup2 = () => {
  return (
    <Card>
      <CardHeaderCommon title={BasicInputGroups} />
      <CardBody>
        <BacicGroup2CardBody />
      </CardBody>
      <CardFooter>
        <Button color='primary' type='submit' className='me-2'>
          {Submit}
        </Button>
        <Button color='light' type='reset'>
          {Cancel}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BasicGroup2;
