import { Card, CardBody, Col } from 'reactstrap';
import { apexLineWithAnnotationCharts } from '../../../Data/Charts/ApexChart';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { ColumnChart } from '@/Constant';
import ReactApexChart from 'react-apexcharts'

const ApexLineChartClass = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={ColumnChart} />
        <CardBody>
          <div id='annotationchart'>
            <ReactApexChart options={apexLineWithAnnotationCharts} series={apexLineWithAnnotationCharts.series} type='line' height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ApexLineChartClass;
