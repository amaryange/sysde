import { FlushStylesData } from '@/Data/UiKitsData/Lists';
import React from 'react';
import { Fragment } from 'react';
import { ListGroupItem } from 'reactstrap';

const DynamicFlushStyle = () => {
  return FlushStylesData.map((data, index) => <ListGroupItem key={index}>{data}</ListGroupItem>);
};

export default DynamicFlushStyle;
