import { Radar } from 'react-chartjs-2';
import { Col, Card, CardBody } from 'reactstrap';
import { RadarChart } from '../../../Constant/index';
import { RadarChartData } from '../../../Data/Charts/ChartJsData';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const RadarChartClass = () => {
  return (
    <Col xl='6' md='12' className='box-col-12'>
      <Card>
        <CardHeaderCommon title={RadarChart} />
        <CardBody className='radar-chartjs'>
          <Radar id='myRadarGraph' data={RadarChartData} width='600px' height='300px' />
        </CardBody>
      </Card>
    </Col>
  );
};

export default RadarChartClass;
