import { DefaultListData } from '@/Data/UiKitsData/Lists';
import { Fragment } from 'react';

const DynamicList = () => {
  return (
    <Fragment>
      {DefaultListData.map((data, index) => (
        <li key={index}>{data}</li>
      ))}
    </Fragment>
  );
};

export default DynamicList;
