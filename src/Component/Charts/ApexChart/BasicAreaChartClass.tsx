import { Card, CardBody, Col } from 'reactstrap';
import { apexAreaChart } from '../../../Data/Charts/ApexChart';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { BasicAreaChart } from '@/Constant';
import ReactApexChart from 'react-apexcharts'

const BasicAreaChartClass = () => {
  return (
    <Col sm='12' xl='6' className='box-col-6'>
      <Card>
        <CardHeaderCommon title={BasicAreaChart} />
        <CardBody>
          <div id='basic-apex'>
            <ReactApexChart options={apexAreaChart} series={apexAreaChart.series} type='area' height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicAreaChartClass;
