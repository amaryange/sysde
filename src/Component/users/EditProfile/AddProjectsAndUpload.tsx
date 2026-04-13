import { Card, CardHeader, Col, Table } from 'reactstrap';
import { AddprojectAndUpload, Date, Price, ProjectName, Status } from '@/Constant';
import AddProjectsAndUploadTableBody from './AddProjectsAndUploadTableBody';

const AddProjectsAndUpload = () => {
  return (
    <Col md='12'>
      <Card>
        <CardHeader>
          <h4 className='card-title mb-0'>{AddprojectAndUpload}</h4>
        </CardHeader>
        <div className='table-responsive'>
          <Table className=' card-table table-vcenter text-nowrap'>
            <thead>
              <tr>
                <th>{ProjectName}</th>
                <th>{Date}</th>
                <th>{Status}</th>
                <th>{Price}</th>
              </tr>
            </thead>
            <AddProjectsAndUploadTableBody />
          </Table>
        </div>
      </Card>
    </Col>
  );
};

export default AddProjectsAndUpload;
