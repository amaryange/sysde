import React, { Fragment } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import Chart from 'react-apexcharts';
import { progressDonutChart, progressDonutChart1 } from '@/Data/Apexchart';

const KnobChart = () => {
  return (
    <Fragment>
      <Col xl='3' sm='6' className='box-col-3 chart_data_right'>
        <Card className='income-card card-secondary'>
          <CardBody>
            <div className='round-progress knob-block text-center'>
              <Chart options={progressDonutChart.options} series={progressDonutChart.series} type='radialBar' height={145} />
              <h5>{'$9,84,235'}</h5>
              <p>{'Our Annual Income'}</p>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col xl='3' sm='6' className='box-col-3 chart_data_right second'>
        <Card className='income-card card-secondary'>
          <CardBody>
            <div className='round-progress knob-block text-center'>
              <Chart options={progressDonutChart1.options} series={progressDonutChart1.series} type='radialBar' height={145} />
              <h5>{'$4,55,462'}</h5>
              <p>{'Our Annual Income'}</p>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default KnobChart;
