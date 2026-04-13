import { AssetsImagePath, Javascript } from '@/Constant';
import { WithImageRoundBodyData } from '@/Data/UiKitsData/Lists';
import Image from 'next/image';
import { ListGroup, ListGroupItem } from 'reactstrap';

const WithImageRoundBody = () => {
  return (
    <ListGroup>
      <ListGroupItem className={`list-group-item-action`} tag='a' href={Javascript}>
        <Image src={`${AssetsImagePath}/user/1.jpg`} alt='image round body' height={40} width={40} className='rounded-circle' unoptimized/>
        Cras justo odio
      </ListGroupItem>
      {WithImageRoundBodyData.map((data, index) => (
        <ListGroupItem key={index} className={`list-group-item-action ${data.liClass}`} tag='a' href={Javascript}>
          <Image src={`${AssetsImagePath}/user/1.jpg`} alt='image round body' height={40} width={40} className='rounded-circle' unoptimized/>
          {data.liText}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default WithImageRoundBody;
