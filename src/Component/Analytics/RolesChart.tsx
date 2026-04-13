'use client';

import Chart from 'react-apexcharts';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { repartitionRoles } from '@/Data/analyticsMock';
import { useHeaderStore } from '@/Store/useHeaderStore';

const PRIMARY   = '#24695c';
const SECONDARY = '#f0b54d';

const RolesChart = () => {
  const isDark  = useHeaderStore((s) => s.logoToggle);
  const border  = isDark ? '#374151' : '#f3f4f6';
  const subText = '#9ca3af';

  return (
    <Card style={{ height: '100%' }}>
      <CardHeader style={{ padding: '16px 20px', borderBottom: `1px solid ${border}` }}>
        <h6 style={{ margin: 0, fontWeight: 700, fontSize: 14 }}>Répartition par rôle</h6>
        <small style={{ color: subText }}>Réel vs Cible — exercice en cours</small>
      </CardHeader>
      <CardBody style={{ padding: '0 0 8px' }}>
        <Chart
          type='bar'
          height={240}
          series={[
            { name: 'Réel',  data: repartitionRoles.map((r) => r.reel)  },
            { name: 'Cible', data: repartitionRoles.map((r) => r.cible) },
          ]}
          options={{
            chart: { type: 'bar', toolbar: { show: false }, background: 'transparent' },
            theme: { mode: isDark ? 'dark' : 'light' },
            plotOptions: { bar: { borderRadius: 4, columnWidth: '60%' } },
            dataLabels: { enabled: false },
            colors: [PRIMARY, SECONDARY],
            xaxis: { categories: repartitionRoles.map((r) => r.role) },
            yaxis: { labels: { style: { fontSize: '11px' } } },
            legend: { position: 'top', fontSize: '12px' },
            grid: { borderColor: border },
            tooltip: { y: { formatter: (v: number) => `${v} encadreurs` } },
          }}
        />
      </CardBody>
    </Card>
  );
};

export default RolesChart;
