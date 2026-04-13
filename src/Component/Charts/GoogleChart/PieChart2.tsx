import { Card, CardBody, Col } from 'reactstrap';
import { PieChart } from '../../../Constant/index';
import { Chart } from 'react-google-charts';
import { PieChart2ClassPropsType } from '@/Type/SideBarType';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const PieChart2Class = ({ data, is3D }: PieChart2ClassPropsType) => {
  return (
    <Col sm='12' xl='6'>
      <Card>
        <CardHeaderCommon title={PieChart} />
        <CardBody className='chart-block'>
          <div className='chart-overflow' id='pie-chart1'>
            <Chart width={data?.width} height={data?.height} chartType={data?.chartType} loader={<div>{'Loading Chart'}</div>} data={data?.data} options={data?.options && { is3D: is3D }} rootProps={data?.rootProps} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PieChart2Class;
