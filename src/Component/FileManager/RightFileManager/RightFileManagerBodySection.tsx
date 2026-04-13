import { AllFiles, Files, Folders, RecentlyOpenedFiles } from '@/Constant';
import { FileListType } from '@/Type/SideBarType';
import React from 'react';
import { CardBody, ListGroup, ListGroupItem, Media } from 'reactstrap';

const RightFileManagerBodySection = ({ myfile, fileList }: any) => {
  return (
    <CardBody className='file-manager'>
      <h4>{AllFiles}</h4> <h6>{RecentlyOpenedFiles}</h6>
      <ListGroup className='files d-flex flex-row'> {fileList}</ListGroup>
      <h5 className='mt-4'>{Folders}</h5>
      <ListGroup className=' folder d-flex flex-row'>
        {myfile.map((item: FileListType) => {
          return (
            <ListGroupItem className='folder-box' key={item.id}>
              <Media>
                <i className={item.folderClass}></i>
                <Media body className='ms-3'>
                  <h6 className='mb-0'>{item.title}</h6>
                  <p>{item.folderSize}</p>
                </Media>
              </Media>
            </ListGroupItem>
          );
        })}
      </ListGroup>
      <h5 className='mt-4'>{Files}</h5>
      <ListGroup className='files d-flex flex-row'>{fileList} </ListGroup>
    </CardBody>
  );
};

export default RightFileManagerBodySection;
