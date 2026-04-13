import { Card, CardBody, Col } from 'reactstrap';
import { RadialBarChart } from '../../../Constant/index';
import { apexRadialBarChart } from '../../../Data/Charts/ApexChart';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import ReactApexChart from 'react-apexcharts'

const RadialBarChartClass = () => {
  return (
    <Col sm='12' xl='6' className='box-col-6'>
      <Card>
        <CardHeaderCommon title={RadialBarChart} />
        <CardBody>
          <div id='circlechart'>
            <ReactApexChart options={apexRadialBarChart} series={apexRadialBarChart.series} type='radialBar' height={380} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RadialBarChartClass;
