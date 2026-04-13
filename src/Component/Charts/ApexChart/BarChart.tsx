import { Card, CardBody, Col } from 'reactstrap';
import { apexBarChart } from '../../../Data/Charts/ApexChart';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { BarChart } from '@/Constant';
import ReactApexChart from 'react-apexcharts'

const BarChartClass = () => {
  return (
    <Col sm='12' xl='6' className='box-col-6'>
      <Card>
        <CardHeaderCommon title={BarChart} />
        <CardBody>
          <div id='basic-bar'>
            <ReactApexChart options={apexBarChart} series={apexBarChart.series} type='bar' height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BarChartClass;
