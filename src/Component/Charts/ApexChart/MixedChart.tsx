import React, { Fragment } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { apexMixedCharts } from '../../../Data/Charts/ApexChart';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { MixedChart } from '@/Constant';
import ReactApexChart from 'react-apexcharts'

const MixedChartClass = () => {
  return (
    <Col sm='12' xl='12' className='box-col-12'>
      <Card>
        <CardHeaderCommon title={MixedChart} />
        <CardBody>
          <div id='mixedchart'>
            <ReactApexChart options={apexMixedCharts} series={apexMixedCharts.series} type='line' height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MixedChartClass;
