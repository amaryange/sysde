import React, { Fragment, useState } from 'react';
import CommonModal from '../../common/modal';
import { ScrollBtnData } from '@/Data/UiKitsData/Modal/ScrollBtnData';
import { Button } from 'reactstrap';
import { ModalTitle, ScrollingLongContent } from '@/Constant';

const ScrollBtn = () => {
  const [scrollingModal, setScrollingModal] = useState(false);
  const ScrollModalToggle = () => setScrollingModal(!scrollingModal);
  return (
    <Fragment>
      <Button color='primary' onClick={ScrollModalToggle}>
        {ScrollingLongContent}
      </Button>
      <CommonModal isOpen={scrollingModal} title={ModalTitle} toggler={ScrollModalToggle}>
        {ScrollBtnData.map((element, index) => (
          <p key={index}>{element}</p>
        ))}
      </CommonModal>
    </Fragment>
  );
};

export default ScrollBtn;
