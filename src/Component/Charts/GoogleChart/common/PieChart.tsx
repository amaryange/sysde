import { Card, CardBody, Col } from 'reactstrap';
import { Chart } from 'react-google-charts';
import { PieChartClassPropsType } from '@/Type/SideBarType';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const PieChartClass = ({ data, title, colClass }: PieChartClassPropsType) => {
  return (
    <Col className={colClass ? 'col-sm-12' : 'col-sm-12 col-xl-6 col-12'}>
      <Card>
        <CardHeaderCommon title={title} />
        <CardBody className='chart-block'>
          <div className='chart-overflow' id='pie-chart1'>
            <Chart width={data?.width} height={data?.height} chartType={data?.chartType} loader={<div>{'Loading Chart'}</div>} data={data?.data} options={data?.options} rootProps={data?.rootProps} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PieChartClass;
