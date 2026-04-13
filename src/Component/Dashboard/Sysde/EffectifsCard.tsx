import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import Chart from 'react-apexcharts';
import { EffectifsChart } from '@/Data/Apexchart/SysdeCharts';
import CardHeaderComponent from '../Common/CardHeader';

const EffectifsCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardHeaderComponent title='Effectifs par rôle' subtitle='Réel vs Cible' />
      </CardHeader>
      <CardBody className='p-0'>
        <Chart
          options={EffectifsChart.options}
          series={EffectifsChart.series}
          type='bar'
          height={280}
        />
      </CardBody>
    </Card>
  );
};

export default EffectifsCard;
