import ConfigDB from '@/config/ThemeConfig';

const primary = typeof window !== 'undefined'
  ? localStorage.getItem('default_color') || ConfigDB.data.color.primary_color
  : ConfigDB.data.color.primary_color;

const secondary = typeof window !== 'undefined'
  ? localStorage.getItem('secondary_color') || ConfigDB.data.color.secondary_color
  : ConfigDB.data.color.secondary_color;

export const EffectifsChart: any = {
  series: [
    { name: 'Réel', data: [8, 22, 35, 18, 112, 5] },
    { name: 'Cible', data: [10, 24, 38, 20, 120, 6] },
  ],
  options: {
    chart: { type: 'bar', toolbar: { show: false }, height: 280 },
    plotOptions: { bar: { borderRadius: 4, columnWidth: '55%' } },
    dataLabels: { enabled: false },
    colors: [primary, secondary],
    xaxis: { categories: ['CS', 'CF', 'CO', 'FS', 'MO', 'ES'] },
    yaxis: { labels: { style: { fontSize: '12px' } } },
    legend: { position: 'top' },
    grid: { borderColor: '#f1f1f1' },
  },
};

export const RepartitionChart: any = {
  series: [35, 28, 22, 15],
  options: {
    chart: { type: 'donut', toolbar: { show: false } },
    labels: ['FIRCA', 'ANADER', 'CNRA', 'SODEFOR'],
    colors: [primary, secondary, '#54ba4a', '#f0b54d'],
    dataLabels: { enabled: true },
    legend: { position: 'bottom' },
    plotOptions: {
      pie: { donut: { size: '60%' } },
    },
    responsive: [{ breakpoint: 480, options: { chart: { height: 250 } } }],
  },
};
