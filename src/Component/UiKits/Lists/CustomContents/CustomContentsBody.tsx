import { CustomContentsBodydatas } from '@/Data/UiKitsData/Lists/CustomContentsBody';
import { ListGroup, ListGroupItem } from 'reactstrap';

const CustomContentsBody = () => {
  return (
    <ListGroup>
      {CustomContentsBodydatas.map((data, index) => (
        <ListGroupItem key={index} className={data.LiClass}>
          <div className='d-flex w-100 justify-content-between'>
            <h5 className='mb-1'>{data.Heading}</h5>
            <small className={data?.SmallCLass}>{'3 days ago'}</small>
          </div>
          <p className='mb-0 mt-1'>{data.paragraphText}</p>
          <small className={data?.SmallCLass}>{'Donec id elit non mi porta.'}</small>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default CustomContentsBody;
