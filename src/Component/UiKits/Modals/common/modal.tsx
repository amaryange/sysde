import { Close, SaveChanges } from '@/Constant';
import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { CommonModelType } from '@/Type/SideBarType';

const CommonModal = (props: CommonModelType) => {
  return (
    <Modal isOpen={props.isOpen} toggle={props.toggler} size={props.size} centered>
      <ModalHeader toggle={props.toggler}>{props.title}</ModalHeader>
      <ModalBody className={props.bodyClass}>{props.children}</ModalBody>
      <ModalFooter>
        <Button color='secondary' onClick={props.toggler}>
          {Close}
        </Button>
        <Button color='primary' onClick={props.toggler}>
          {SaveChanges}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CommonModal;
