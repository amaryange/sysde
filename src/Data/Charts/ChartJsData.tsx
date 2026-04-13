//@ts-nocheck
import ConfigDB from '@/config/ThemeConfig';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarController, BarElement, ArcElement, RadialLinearScale } from 'chart.js';

const primary = ConfigDB.data.color.primary_color;
const secondary = ConfigDB.data.color.secondary_color;
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarController, BarElement, ArcElement, RadialLinearScale);
export const barChartData = {
  labels: ['Mon', 'Tue', 'Wen', 'Thus', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'y',
      lagend: 'y',
      data: [35, 59, 80, 81, 56, 55, 40],
      borderColor: primary,
      backgroundColor: 'rgba(36, 105, 92, 0.4)',
      highlightFill: 'rgba(36, 105, 92, 0.4)',
      highlightStroke: primary,
      borderWidth: 2,
    },
    {
      label: 'z',
      lagend: 'z',
      data: [28, 48, 40, 19, 86, 27, 90],
      borderColor: secondary,
      backgroundColor: 'rgba(186, 137, 93, 0.4)',
      highlightFill: 'rgba(186, 137, 93, 0.4)',
      highlightStroke: secondary,
      borderWidth: 2,
    },
  ],
  plugins: {
    datalabels: {
      display: false,
      color: 'white',
    },
  },
};
export const barChartOptions = {
  responsive: true,
  legend: {
    display: false,
  },
};

export const lineChartData = {
  labels: ['Mon', 'Tue', 'Wen', 'Thus', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      data: [10, 59, 80, 81, 56, 55, 40],
      label: 'Data1',
      fill: true,
      borderColor: primary,
      backgroundColor: 'rgba(36, 105, 92, 0.4)',
      borderWidth: 2,
    },
    {
      data: [28, 48, 40, 19, 86, 27, 90],
      label: 'Data2',
      borderColor: secondary,
      backgroundColor: 'rgba(186, 137, 93, 0.4)',
      borderWidth: 2,
    },
  ],
  plugins: {
    datalabels: {
      display: false,
      color: 'white',
    },
  },
};

export const lineChartOptions = {
  responsive: true,
  legend: {
    display: false,
  },
  scales: {
    xAxes: {
      stacked: false,
    },
    yAxes: {
      stacked: false,
    },
  },
};
export const doughnutData = {
  labels: ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
  datasets: [
    {
      data: [350, 450, 100],
      backgroundColor: [primary, secondary, '#51bb25'],
    },
  ],
};
export const doughnutOption = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
};
export const polarData = {
  labels: ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'],
  datasets: [
    {
      data: [300, 500, 100, 40, 120],
      backgroundColor: [primary, secondary, '#f8d62b', '#51bb25', '#a927f9'],
    },
  ],
};

export const polarOption = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
};

export const RadarChartData = {
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [65, 59, 70, 79, 56, 55, 40],
      fill: true,
      backgroundColor: 'rgba(36, 105, 92, 0.4)',
      borderColor: primary,
      pointBackgroundColor: primary,
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: primary,
    },
    {
      label: 'My Second Dataset',
      data: [28, 48, 40, 19, 76, 27, 80],
      fill: true,
      backgroundColor: 'rgba(186, 137, 93, 0.4)',
      borderColor: secondary,
      pointBackgroundColor: secondary,
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: secondary,
    },
  ],
  options: {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      line: {
        borderWidth: 2,
      },
    },
  },
};
export const lineChart2Data = {
  labels: ['', '10', '20', '30', '40', '50', '60', '70', '80'],
  datasets: [
    {
      backgroundColor: 'rgba(20, 141, 246, 0.2)',
      strokeColor: '#717171',
      pointColor: '#717171',
      borderColor: secondary,
      data: [10, 20, 40, 30, 0, 20, 10, 30, 10],
    },
    {
      backgroundColor: 'rgba(94, 187, 37, 0.2)',
      strokeColor: secondary,
      pointColor: secondary,
      borderColor: '#51bb25',
      data: [20, 40, 10, 20, 40, 30, 40, 10, 20],
    },
    {
      backgroundColor: 'rgba(101, 90, 243, 0.2)',
      borderColor: primary,
      pointColor: primary,
      data: [60, 10, 40, 30, 80, 30, 20, 90, 0],
    },
  ],
};

export const lineChart2option = {
  responsive: false,
  animation: {
    duration: 0,
  },
  legend: {
    display: false,
  },
  scaleShowVerticalLines: false,
};
