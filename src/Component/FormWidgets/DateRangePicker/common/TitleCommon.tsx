import { DataRangePickerDescriptionType } from '@/Type/SideBarType';
import React from 'react';

const TitleCommon = ({ data }: DataRangePickerDescriptionType) => {
  return (
    <>
      <h6>{data.title}</h6>
      <p>{data.description}</p>
    </>
  );
};

export default TitleCommon;
