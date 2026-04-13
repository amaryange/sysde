import { Card, CardBody, Col } from 'reactstrap';
import { Chart } from 'react-google-charts';
import { PieChart4ClassPropType } from '@/Type/SideBarType';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { RotatingPieChart } from '@/Constant';

const PieChart4Class = ({ data, pieStartAngle, pieSliceText }: PieChart4ClassPropType) => {
  return (
    <Col sm='12' xl='6'>
      <Card>
        <CardHeaderCommon title={RotatingPieChart} />
        <CardBody className='chart-block'>
          <div className='chart-overflow' id='pie-chart1'>
            <Chart
              width={data?.width}
              height={data?.height}
              chartType={data?.chartType}
              loader={<div>{'Loading Chart'}</div>}
              data={data?.data}
              options={
                data?.options && { pieStartAngle: pieStartAngle } && {
                  pieSliceText: pieSliceText,
                }
              }
              rootProps={data?.rootProps}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PieChart4Class;
