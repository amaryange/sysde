import { badgeWithPillData } from '@/Data/UiKitsData/Lists';
import { Fragment } from 'react';
import { ListGroupItem } from 'reactstrap';

const DynamicWithBadge = () => {
  return badgeWithPillData.map((data, index) => (
    <ListGroupItem key={index} className='d-flex justify-content-between align-items-center'>
      {data.heading}
      <span className={`badge counter digits ${data.spanClassName}`}>{data.spanText}</span>
    </ListGroupItem>
  ));
};

export default DynamicWithBadge;
