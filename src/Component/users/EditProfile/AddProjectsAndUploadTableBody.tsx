import { Delete, Edit, Href, UntrammelledPrevents, Update } from '@/Constant';
import { AddProjectsAndUploadData } from '@/Data/Users/AddProjectData';
import { Button } from 'reactstrap';

const AddProjectsAndUploadTableBody = () => {
  return (
    <tbody>
      {AddProjectsAndUploadData.map((data, index) => (
        <tr key={index}>
          <td>
            <a className='text-inherit' href={Href}>
              {UntrammelledPrevents}
            </a>
          </td>
          <td>{data.date}</td>
          <td>
            <span className={`status-icon ${data.statusClass}`} /> {data.status}
          </td>
          <td>{data.price}</td>
          <td className='text-end'>
            <Button color='primary' size='sm' href={Href}>
              <i className='fa fa-pencil' /> {Edit}
            </Button>
            <Button size='sm' className='btn-transparent' href={Href}>
              <i className='fa fa-link' /> {Update}
            </Button>
            <Button color='danger' size='sm' href={Href}>
              <i className='fa fa-trash' /> {Delete}
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default AddProjectsAndUploadTableBody;
