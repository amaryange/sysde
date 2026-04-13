import { tableTypes, tablesData } from '../../TablesType';
import { useSelector } from 'react-redux';

const HoverableRowsTBody = () => {
  const { items } = useSelector((state: tableTypes) => state.TableSlice);

  return (
    <tbody>
      {items.map((item: tablesData) => (
        <tr key={item.id}>
          <th scope='row'>{item.id}</th>
          <td>{item.first_name}</td>
          <td>{item.last_name}</td>
          <td>{item.user_name}</td>
          <td>{item.role}</td>
          <td>{item.country}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default HoverableRowsTBody;
