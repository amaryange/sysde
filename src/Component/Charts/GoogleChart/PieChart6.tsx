import { Card, CardBody, Col } from 'reactstrap';
import { Chart } from 'react-google-charts';
import { PieChart6Data, PieChart6option } from '../../../Data/Charts/ChartData';
import { PieChart6ClassPropsType } from '@/Type/SideBarType';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { RotatingPieChart } from '@/Constant';

const PieChart6Class = ({ data }: PieChart6ClassPropsType) => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={RotatingPieChart} />
        <CardBody className='chart-block'>
          <div className='chart-overflow' id='pie-chart1'>
            <Chart width={data?.width} height={data?.height} chartType={data?.chartType} loader={<div>{'Loading Chart'}</div>} data={PieChart6Data} options={PieChart6option} rootProps={data?.rootProps} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PieChart6Class;
