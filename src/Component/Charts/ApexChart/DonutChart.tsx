import React, { Fragment } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { apexDonutCharts } from '../../../Data/Charts/ApexChart';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { CandlestickChart } from '@/Constant';
import ReactApexChart from 'react-apexcharts'

const DonutChartClass = () => {
  return (
    <Col sm='12' xl='6' className='box-col-6'>
      <Card>
        <CardHeaderCommon title={CandlestickChart} />
        <CardBody className='apex-chart'>
          <div id='donutchart'>
            <ReactApexChart options={apexDonutCharts} series={apexDonutCharts.series} type='donut' />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DonutChartClass;
