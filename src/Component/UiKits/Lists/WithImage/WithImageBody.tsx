import { AssetsImagePath, Javascript } from '@/Constant';
import { WithImageBodyData } from '@/Data/UiKitsData/Lists';
import Image from 'next/image';
import { CardBody, ListGroup, ListGroupItem } from 'reactstrap';

const WithImageBody = () => {
  return (
    <CardBody>
      <ListGroup>
        <ListGroupItem className={`list-group-item-action`} tag='a' href={Javascript}>
          <Image src={`${AssetsImagePath}/user/1.jpg`} alt='with Image body' height={40} width={40} unoptimized/>
          Cras justo odio
        </ListGroupItem>
        {WithImageBodyData.map((data, index) => (
          <ListGroupItem key={index} className={`list-group-item-action ${data.liClass}`} tag='a' href={Javascript}>
            <Image src={`${AssetsImagePath}/user/1.jpg`} alt='with Image body' height={40} width={40} unoptimized/>
            {data.liText}
          </ListGroupItem>
        ))}
      </ListGroup>
    </CardBody>
  );
};

export default WithImageBody;
