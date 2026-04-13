'use client';

import Chart from 'react-apexcharts';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { performanceOperateurs } from '@/Data/analyticsMock';
import { useHeaderStore } from '@/Store/useHeaderStore';

const OperateursChart = () => {
  const isDark  = useHeaderStore((s) => s.logoToggle);
  const border  = isDark ? '#374151' : '#f3f4f6';
  const subText = '#9ca3af';

  return (
    <Card style={{ height: '100%' }}>
      <CardHeader style={{ padding: '16px 20px', borderBottom: `1px solid ${border}` }}>
        <h6 style={{ margin: 0, fontWeight: 700, fontSize: 14 }}>Performance opérateurs</h6>
        <small style={{ color: subText }}>Taux de remplissage des postes</small>
      </CardHeader>
      <CardBody style={{ padding: '0 0 8px' }}>
        <Chart
          type='bar'
          height={240}
          series={[{ name: 'Taux (%)', data: performanceOperateurs.map((o) => o.taux) }]}
          options={{
            chart: { type: 'bar', toolbar: { show: false }, background: 'transparent' },
            theme: { mode: isDark ? 'dark' : 'light' },
            plotOptions: {
              bar: {
                horizontal: true,
                borderRadius: 6,
                barHeight: '55%',
                distributed: true,
              },
            },
            dataLabels: {
              enabled: true,
              formatter: (v: number) => `${v}%`,
              style: { fontSize: '12px', fontWeight: 600 },
            },
            colors: ['#24695c', '#2d8c77', '#f0b54d', '#e74c3c'],
            xaxis: {
              categories: performanceOperateurs.map((o) => o.operateur),
              max: 100,
              labels: { formatter: (v: string) => `${v}%` },
            },
            yaxis: { labels: { style: { fontSize: '12px', fontWeight: 600 } } },
            legend: { show: false },
            grid: { borderColor: border },
            tooltip: {
              y: {
                formatter: (_: number, { dataPointIndex }: { dataPointIndex: number }) => {
                  const o = performanceOperateurs[dataPointIndex];
                  return `${o.postesPouvus} / ${o.postesAttribues} postes (${o.taux}%)`;
                },
              },
            },
          }}
        />
      </CardBody>
    </Card>
  );
};

export default OperateursChart;
