import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { HorizontalStyle } from '@/Constant';
import { HorizontalStyleHeaderDescription } from '@/Data/CardHeaderCommonData';
import React from 'react';

const HorizontalStyleHeader = () => {
  return <CardHeaderCommon title={HorizontalStyle} description={HorizontalStyleHeaderDescription} />;
};

export default HorizontalStyleHeader;
