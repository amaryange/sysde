import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { VerticalStyle } from '@/Constant';
import { VerticalStyleCardHeaderDescription } from '@/Data/CardHeaderCommonData';
import React from 'react';

const VerticalCardHeader = () => {
  return <CardHeaderCommon title={VerticalStyle} description={VerticalStyleCardHeaderDescription} />;
};

export default VerticalCardHeader;
