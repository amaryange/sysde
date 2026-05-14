'use client';

import Chart from 'react-apexcharts';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { useHeaderStore } from '@/Store/useHeaderStore';

const PRIMARY   = '#24695c';
const SECONDARY = '#d1d5db';

interface Props {
  evolutionEffectifs: {
    mois: string[];
    n1: number[];
    n: (number | null)[];
  };
}

const EvolutionChart = ({ evolutionEffectifs }: Props) => {
  const isDark  = useHeaderStore((s) => s.logoToggle);
  const border  = isDark ? '#374151' : '#f3f4f6';
  const subText = '#9ca3af';

  return (
    <Card>
      <CardHeader style={{ padding: '16px 20px', borderBottom: `1px solid ${border}` }}>
        <h6 style={{ margin: 0, fontWeight: 700, fontSize: 14 }}>Évolution des effectifs</h6>
        <small style={{ color: subText }}>Comparaison exercice en cours vs précédent</small>
      </CardHeader>
      <CardBody style={{ padding: '0 0 8px' }}>
        <Chart
          type='line'
          height={260}
          series={[
            { name: 'En cours', data: evolutionEffectifs.n  as (number | null)[] },
            { name: 'Précédent', data: evolutionEffectifs.n1 },
          ]}
          options={{
            chart: { type: 'line', toolbar: { show: false }, zoom: { enabled: false }, background: 'transparent' },
            theme: { mode: isDark ? 'dark' : 'light' },
            stroke: { curve: 'smooth', width: [3, 2], dashArray: [0, 5] },
            colors: [PRIMARY, SECONDARY],
            markers: { size: [4, 0] },
            xaxis: { categories: evolutionEffectifs.mois },
            yaxis: { labels: { style: { fontSize: '11px' } } },
            legend: { position: 'top', fontSize: '12px' },
            grid: { borderColor: border },
            tooltip: { y: { formatter: (v: number) => `${v} encadreurs` } },
            responsive: [
              { breakpoint: 992, options: { chart: { height: 220 } } },
              { breakpoint: 768, options: { chart: { height: 200 } } },
              { breakpoint: 480, options: { chart: { height: 180 }, legend: { position: 'bottom' }, xaxis: { labels: { rotate: -45 } } } },
            ],
          }}
        />
      </CardBody>
    </Card>
  );
};

export default EvolutionChart;
