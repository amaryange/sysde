import React, { Fragment } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { apexColumnChartsone } from '../../../Data/Charts/ApexChart';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { CandlestickChart } from '@/Constant';
import ReactApexChart from 'react-apexcharts'

const ColumnChartClass = () => {
  return (
    <Col sm='12' xl='6' className='box-col-6'>
      <Card>
        <CardHeaderCommon title={CandlestickChart} />
        <CardBody>
          <div id='column-chart'>
            <ReactApexChart options={apexColumnChartsone} series={apexColumnChartsone.series} type='bar' height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ColumnChartClass;
