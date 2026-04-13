import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import Chart from 'react-apexcharts';
import { GrowthChart } from '@/Data/Apexchart';
import CardHeaderComponent from '../Common/CardHeader';

const GrowthOverview = () => {
  return (
    <Card>
      <CardHeader>
        <CardHeaderComponent title='Growth Overview' subtitle='80% Growth' />
      </CardHeader>
      <CardBody className='p-0 growth-overview'>
        <div id='chart-dashbord'>
          <Chart options={GrowthChart.options} series={GrowthChart.series} type='radialBar' height={380} />
        </div>
      </CardBody>
    </Card>
  );
};

export default GrowthOverview;
