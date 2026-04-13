import { ContextualClassData } from '@/Data/UiKitsData/Lists';
import { ListGroupItem } from 'reactstrap';

const DynamicContextualClass = () => {
  return ContextualClassData.map((data, index) => (
    <ListGroupItem key={index} className={data.className}>
      {data.text}
    </ListGroupItem>
  ));
};

export default DynamicContextualClass;
