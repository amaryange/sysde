import { DynamicLinkButtonData } from '@/Data/UiKitsData/Lists';
import { Fragment } from 'react';
import { ListGroupItem } from 'reactstrap';

const DynamicLinkButton = () => {
  return (
    <Fragment>
      {DynamicLinkButtonData.map((data, index) => (
        <ListGroupItem key={index} className='list-group-item-action'>
          {data.text}
        </ListGroupItem>
      ))}
    </Fragment>
  );
};

export default DynamicLinkButton;
