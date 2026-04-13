import { Card, CardBody, Col } from 'reactstrap';
import { apexRadarPolygonfillCharts } from '../../../Data/Charts/ApexChart';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { RadarChart } from '@/Constant';
import ReactApexChart from 'react-apexcharts'

const RadarChartClass = () => {
  return (
    <Col sm='12' xl='6' className='box-col-6'>
      <Card>
        <CardHeaderCommon title={RadarChart} />
        <CardBody>
          <div id='radarchart'>
            <ReactApexChart options={apexRadarPolygonfillCharts} series={apexRadarPolygonfillCharts.series} type='radar' height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RadarChartClass;
