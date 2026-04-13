import { Col, Card, Table } from 'reactstrap';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { ContextualClasses } from '@/Constant';
import { ContextualClassDescription } from '@/Data/CardHeaderCommonData';

const ContextualClass = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={ContextualClasses} description={ContextualClassDescription} />
        <div className='table-responsive'>
          <Table>
            <thead>
              <tr>
                <th scope='col'>{'Class'}</th>
                <th scope='col'>{'Heading'}</th>
                <th scope='col'>{'Heading'}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-primary">
                <th scope="row">{"Primary"}</th>
                <td>{"Cell"}</td>
                <td>{"Cell"}</td>
              </tr>
              <tr className="table-secondary">
                <th scope="row">{"Secondary"}</th>
                <td>{"Cell"}</td>
                <td>{"Cell"}</td>
              </tr>
              <tr className="table-success">
                <th scope="row">{"Success"}</th>
                <td>{"Cell"}</td>
                <td>{"Cell"}</td>
              </tr>
              <tr className="table-info">
                <th scope="row">{"Info"}</th>
                <td>{"Cell"}</td>
                <td>{"Cell"}</td>
              </tr>
              <tr className="table-warning">
                <th scope="row">{"Warning"}</th>
                <td>{"Cell"}</td>
                <td>{"Cell"}</td>
              </tr>
              <tr className="table-danger">
                <th scope="row">{"Danger"}</th>
                <td>{"Cell"}</td>
                <td>{"Cell"}</td>
              </tr>
              <tr className="table-light">
                <th scope="row">{"Light"}</th>
                <td>{"Cell"}</td>
                <td>{"Cell"}</td>
              </tr>
              <tr className="table-active">
                <th scope="row">{"Active"}</th>
                <td>{"Cell"}</td>
                <td>{"Cell"}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Card>
    </Col>
  );
};

export default ContextualClass;
