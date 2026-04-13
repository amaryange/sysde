'use client';

import Chart from 'react-apexcharts';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { kpiData } from '@/Data/analyticsMock';
import { useHeaderStore } from '@/Store/useHeaderStore';

const PRIMARY = '#24695c';

const DeploiementChart = () => {
  const isDark = useHeaderStore((s) => s.logoToggle);
  const border  = isDark ? '#374151' : '#f3f4f6';
  const subText = '#9ca3af';

  return (
    <Card style={{ height: '100%' }}>
      <CardHeader style={{ padding: '16px 20px', borderBottom: `1px solid ${border}` }}>
        <h6 style={{ margin: 0, fontWeight: 700, fontSize: 14 }}>Taux de déploiement global</h6>
        <small style={{ color: subText }}>Postes pourvus / prévus</small>
      </CardHeader>
      <CardBody style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px 0' }}>
        <Chart
          type='radialBar'
          height={240}
          series={[kpiData.tauxDeploiement]}
          options={{
            chart: { type: 'radialBar', background: 'transparent' },
            theme: { mode: isDark ? 'dark' : 'light' },
            plotOptions: {
              radialBar: {
                hollow: { size: '60%' },
                dataLabels: {
                  name: { fontSize: '13px', color: subText, offsetY: -10 },
                  value: { fontSize: '28px', fontWeight: 700, color: PRIMARY, offsetY: 6,
                    formatter: (v: number) => `${v}%` },
                },
                track: { background: isDark ? '#374151' : '#e8f5f2' },
              },
            },
            fill: { colors: [PRIMARY] },
            labels: [`${kpiData.postesPouvus} / ${kpiData.postesTotal} postes`],
          }}
        />
      </CardBody>
    </Card>
  );
};

export default DeploiementChart;
