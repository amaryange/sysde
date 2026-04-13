import React, { Fragment, useState } from 'react';
import { ModalTitle, Simple } from '../../../../../Constant';
import CommonModal from '../../common/modal';
import { Button } from 'reactstrap';

const BasicBtn = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <Fragment>
      <Button color='primary' onClick={toggle}>
        {Simple}
      </Button>
      <CommonModal isOpen={modal} title={ModalTitle} toggler={toggle}>
        ....
      </CommonModal>
    </Fragment>
  );
};

export default BasicBtn;
