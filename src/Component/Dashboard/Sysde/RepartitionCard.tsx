import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import Chart from 'react-apexcharts';
import { RepartitionChart } from '@/Data/Apexchart/SysdeCharts';
import CardHeaderComponent from '../Common/CardHeader';

const RepartitionCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardHeaderComponent title='Postes par opérateur' subtitle='Répartition actuelle' />
      </CardHeader>
      <CardBody>
        <Chart
          options={RepartitionChart.options}
          series={RepartitionChart.series}
          type='donut'
          height={280}
        />
      </CardBody>
    </Card>
  );
};

export default RepartitionCard;
