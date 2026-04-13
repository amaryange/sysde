import { Col, Card, Table } from 'reactstrap';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { BorderBottomColor } from '@/Constant';
import { BorderBottomClassDescription } from '@/Data/CardHeaderCommonData';

const BorderBottomClass = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={BorderBottomColor} description={BorderBottomClassDescription} />
        <div className='table-responsive'>
          <Table>
            <thead>
              <tr className='border-bottom-primary'>
                <th scope='col'>{'#'}</th>
                <th scope='col'>{'First Name'}</th>
                <th scope='col'>{'Last Name'}</th>
                <th scope='col'>{'Username'}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-bottom-secondary">
                <th scope="row">{"3"}</th>
                <td>{"Jacob"}</td>
                <td>{"Thornton"}</td>
                <td>{"@fat"}</td>
              </tr>
              <tr className="border-bottom-success">
                <th scope="row">{"3"}</th>
                <td>{"Jacob"}</td>
                <td>{"Thornton"}</td>
                <td>{"@fat"}</td>
              </tr>
              <tr className="border-bottom-info">
                <th scope="row">{"3"}</th>
                <td>{"Jacob"}</td>
                <td>{"Thornton"}</td>
                <td>{"@fat"}</td>
              </tr>
              <tr className="border-bottom-warning">
                <th scope="row">{"3"}</th>
                <td>{"Jacob"}</td>
                <td>{"Thornton"}</td>
                <td>{"@fat"}</td>
              </tr>
              <tr className="border-bottom-danger">
                <th scope="row">{"3"}</th>
                <td>{"Jacob"}</td>
                <td>{"Thornton"}</td>
                <td>{"@fat"}</td>
              </tr>
              <tr>
                <th scope="row">{"3"}</th>
                <td>{"Jacob"}</td>
                <td>{"Thornton"}</td>
                <td>{"@fat"}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Card>
    </Col>
  );
};

export default BorderBottomClass;
