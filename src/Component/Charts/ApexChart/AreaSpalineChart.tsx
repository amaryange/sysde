import { Card, CardBody, Col } from 'reactstrap';
import { areaSpaline } from '../../../Data/Charts/ApexChart';
import { AreaSpalineChart } from '@/Constant';
import ReactApexChart from 'react-apexcharts'
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const AreaSpalineChartClass = () => {
  return (
    <Col sm='12' xl='6' className='box-col-6'>
      <Card>
        <CardHeaderCommon title={AreaSpalineChart} />
        <CardBody>
          <div id='basic-apex'>
            <ReactApexChart options={areaSpaline} series={areaSpaline.series} height='350' type='area' />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AreaSpalineChartClass;
