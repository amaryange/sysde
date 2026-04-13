import CommonFileUpload from '@/Component/bonus-ui/Dropzone/Common/CommonFileUpload';
import { Discard, Post } from '@/Constant';
import React from 'react';
import { Button, Form } from 'reactstrap';

const DropItems = () => {
  return (
    <>
      <Form suppressHydrationWarning className='m-b-20'>
        <div className='m-0 dz-message needsclick'>
          <CommonFileUpload/>
        </div>
      </Form>
      <div className='btn-showcase text-end'>
        <Button color='primary' type='submit'>
          {Post}
        </Button>
        <Button color='light' type='reset'>
          {Discard}
        </Button>
      </div>
    </>
  );
};

export default DropItems;
