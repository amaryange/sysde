import { Bar } from 'react-chartjs-2';
import { Col, Card, CardBody } from 'reactstrap';
import { BarChart } from '../../../Constant/index';
import { barChartData, barChartOptions } from '../../../Data/Charts/ChartJsData';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const BarChartClass = () => {
  return (
    <Col xl='6' md='12' className='box-col-12'>
      <Card>
        <CardHeaderCommon title={BarChart} />
        <CardBody className='chart-block'>
          <Bar data={barChartData} options={barChartOptions} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default BarChartClass;
