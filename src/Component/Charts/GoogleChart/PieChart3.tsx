import { Card, CardBody, Col } from 'reactstrap';
import { Chart } from 'react-google-charts';
import { PieChart3ClassPropsType } from '@/Type/SideBarType';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { DonutChart } from '@/Constant';

const PieChart3Class = ({ data, pieHole }: PieChart3ClassPropsType) => {
  return (
    <Col sm='12' xl='6'>
      <Card>
        <CardHeaderCommon title={DonutChart} />
        <CardBody className='chart-block'>
          <div className='chart-overflow' id='pie-chart1'>
            <Chart width={data?.width} height={data?.height} chartType={data?.chartType} loader={<div>{'Loading Chart'}</div>} data={data?.data} options={data?.options && { pieHole: pieHole }} rootProps={data?.rootProps} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PieChart3Class;
