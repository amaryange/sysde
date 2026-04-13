import React, { Fragment } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { SteplineChart } from '../../../Constant/index';
import { apexSteplineChart } from '../../../Data/Charts/ApexChart';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import ReactApexChart from 'react-apexcharts'

const SteplineChartClass = () => {
  return (
    <Col sm='12' xl='6' className='box-col-12'>
      <Card>
        <CardHeaderCommon title={SteplineChart} />
        <CardBody>
          <div id='stepline'>
            <ReactApexChart options={apexSteplineChart} series={apexSteplineChart.series} type='line' height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SteplineChartClass;
