import { Javascript } from '@/Constant';
import { DyanmicWithIconsData } from '@/Data/UiKitsData/Lists';
import { Fragment } from 'react';
import { ListGroupItem } from 'reactstrap';

const DynamicWithIcons = () => {
  return (
    <Fragment>
      {DyanmicWithIconsData.map((data, index) => (
        <ListGroupItem key={index} className={`list-group-item-action ${data.liClass && data.liClass}`} tag='a' href={Javascript}>
          {data.icon}
          {data.text}
        </ListGroupItem>
      ))}
    </Fragment>
  );
};

export default DynamicWithIcons;
