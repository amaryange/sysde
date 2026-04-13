import React, { Fragment } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { apexPieChart } from '../../../Data/Charts/ApexChart';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { PieChart } from '@/Constant';
import ReactApexChart from 'react-apexcharts'

const PieChartClass = () => {
  return (
    <Col sm='12' xl='6' className='box-col-6'>
      <Card>
        <CardHeaderCommon title={PieChart} />
        <CardBody className='apex-chart'>
          <div id='piechart'>
            <ReactApexChart options={apexPieChart} series={apexPieChart.series} type='pie' width={380} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PieChartClass;
