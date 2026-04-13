import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { TableFooterStyling } from '@/Constant';
import { TableFooterStylingClassDescription } from '@/Data/CardHeaderCommonData';
import { useSelector } from 'react-redux';
import { Row, Col, Card, Table } from 'reactstrap';
import { tableTypes, tablesData } from '../TablesType';

const TableFooterStylingClass = () => {
  const { items } = useSelector((state: tableTypes) => state.TableSlice);
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={TableFooterStyling} description={TableFooterStylingClassDescription} />
        <Row className='card-block'>
          <Col sm='12' lg='12' xl='12'>
            <div className='table-responsive table-border-radius'>
              <Table>
                <thead>
                  <tr>
                    <th scope='col'>{'#'}</th>
                    <th scope='col'>{'First Name'}</th>
                    <th scope='col'>{'Last Name'}</th>
                    <th scope='col'>{'Username'}</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map(
                    (item: tablesData) =>
                      item.id < 2 && (
                        <tr key={item.id} className={`border-bottom-${item.name}`}>
                          <th scope='row'>{item.id}</th>
                          <td>{item.first_name}</td>
                          <td>{item.last_name}</td>
                          <td>{item.user_name}</td>
                        </tr>
                      ),
                  )}
                </tbody>
                <tfoot className='table-success'>
                  <tr>
                    <th scope='row'>{'3'}</th>
                    <td>{'Larry'}</td>
                    <td>{'the Bird'}</td>
                    <td>{'@twitter'}</td>
                  </tr>
                </tfoot>
              </Table>
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default TableFooterStylingClass;
