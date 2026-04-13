import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { TextBackgroundUtilities } from '@/Constant';
import { TextBackgroundUtilitiesSubHeading } from '@/Data/CardHeaderCommonData';
import { TextClassData } from '@/Data/Table/ReactstrapTableData';
import { Col, Card, Table } from 'reactstrap';

const TextClass = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={TextBackgroundUtilities} description={TextBackgroundUtilitiesSubHeading} />
        <div className='table-responsive'>
          <Table className='table-borderedfor'>
            <thead>
              <tr>
                <th scope='col'>{'#'}</th>
                <th scope='col'>{'Heading'}</th>
                <th scope='col'>{'Heading'}</th>
              </tr>
            </thead>
            <tbody>
              {TextClassData.map((data, index) => (
                <tr className={data.trClass ? data.trClass : ''} key={index}>
                  <td className={data.tdClass}>{index + 1}</td>
                  <td className={data.tdClass}>{data.tdText1}</td>
                  <td className={data.tdClass}>{data.tdText1}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card>
    </Col>
  );
};

export default TextClass;
