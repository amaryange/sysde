import React, { Fragment } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { apexCandleStickCharts } from '../../../Data/Charts/ApexChart';
import { CandlestickChart } from '@/Constant';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import ReactApexChart from 'react-apexcharts'

const CandlestickChartClass = () => {
  return (
    <Col sm='12' xl='12' className='box-col-12'>
      <Card>
        <CardHeaderCommon title={CandlestickChart} />
        <CardBody>
          <div id='candlestick'>
            <ReactApexChart options={apexCandleStickCharts} series={apexCandleStickCharts.series} type='candlestick' height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CandlestickChartClass;
