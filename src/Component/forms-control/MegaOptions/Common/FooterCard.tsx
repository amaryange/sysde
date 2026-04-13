import { Cancel, Submit } from '@/Constant';
import React from 'react';
import { Button, CardFooter } from 'reactstrap';

const FooterCard = () => {
  return (
    <CardFooter className='text-end'>
      <Button color='primary' className='m-r-15' type='submit'>
        {Submit}
      </Button>
      <Button color='light' type='submit'>
        {Cancel}
      </Button>
    </CardFooter>
  );
};

export default FooterCard;
