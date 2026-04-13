import React from 'react';
import { Button, CardHeader, Form, Input, Media } from 'reactstrap';
import SearchBar from './SearchBar';
import { PlusSquare, Upload } from 'react-feather';
import { AddNew } from '@/Constant';
import { RightFileManagerHeaderSectionType } from '@/Type/SideBarType';

const RightFileManagerHeaderSection = ({ searchTerm, setSearchTerm, getFile, onFileChange, onFileUpload }: RightFileManagerHeaderSectionType) => {
  return (
    <CardHeader>
      <Media>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Media body className='text-end'>
          <Form className='d-inline-flex'>
            <Button color='primary me-2' onClick={getFile}>
              <PlusSquare />
              {AddNew}
            </Button>
            <div style={{ height: '0px', width: '0px', overflow: 'hidden' }}>
              <Input id='upfile' multiple type='file' onChange={(e) => onFileChange(e)} />
            </div>
          </Form>
          <Button color='primary' tag='div' outline onClick={onFileUpload}>
            <Upload />
            {'Upload'}
          </Button>
        </Media>
      </Media>
    </CardHeader>
  );
};

export default RightFileManagerHeaderSection;
