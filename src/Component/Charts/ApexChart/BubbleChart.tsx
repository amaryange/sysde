import React, { Fragment } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { apex3DbubbleCharts } from '../../../Data/Charts/ApexChart';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { BubbleChart } from '@/Constant';
import ReactApexChart from 'react-apexcharts'

const BubbleChartClass = () => {
  return (
    <Col sm='12' xl='6' className='box-col-12'>
      <Card>
        <CardHeaderCommon title={BubbleChart} />
        <CardBody>
          <div id='chart-bubble'>
            <ReactApexChart options={apex3DbubbleCharts} series={apex3DbubbleCharts.series} type='bubble' height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BubbleChartClass;
