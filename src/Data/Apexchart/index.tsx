import ConfigDB from '@/config/ThemeConfig';
import { ApexOptions } from 'apexcharts';

const primary = localStorage.getItem('default_color') || ConfigDB.data.color.primary_color;
const secondary = localStorage.getItem('secondary_color') || ConfigDB.data.color.secondary_color;

export const TransactionChart: any = {
  series: [
    {
      name: 'series1',
      data: [90, 78, 90, 84, 94, 60, 95, 88, 95],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
      height: 400,
      type: 'area',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
    colors: [secondary],
    xaxis: {
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    responsive: [
      {
        breakpoint: 1365.98,
        options: {
          chart: {
            height: 220,
          },
        },
      },
    ],
    fill: {
      type: 'gradient',
      colors: [secondary],
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
  },
};

export const UserChart: any = {
  series: [
    {
      data: [21, 22, 10, 28, 16, 21, 13, 30],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: 'bar',
      toolbar: {
        show: false,
      },
    },
    colors: primary,
    plotOptions: {
      bar: {
        borderRadius: 10,
        rangeBarOverlap: true,
        columnWidth: '30%',
        colors: {
          backgroundBarColors: ['#e5edef', '#e5edef', '#e5edef', '#e5edef'],
          backgroundBarOpacity: 1,
          backgroundBarRadius: 9,
        },
        dataLabels: {
          position: 'top', // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: [['Jan'], ['Feb'], ['Mar'], ['Apr'], ['May'], ['Jun'], ['Jul'], ['Sep'], ['Oct']],
      labels: {
        style: {
          fontSize: '12px',
        },
      },
    },
  },
};

export const Currentlysale: any = {
  series: [
    {
      data: [
        [1327359600000, 30.95],
        [1327446000000, 31.34],
        [1327532400000, 31.18],
        [1327618800000, 31.05],
        [1327878000000, 31.0],
        [1327964400000, 30.95],
        [1328050800000, 31.24],
        [1328137200000, 31.29],
        [1328223600000, 31.85],
        [1328482800000, 31.86],
        [1328569200000, 32.28],
        [1328655600000, 32.1],
        [1328742000000, 32.65],
        [1328828400000, 32.21],
        [1329087600000, 32.35],
        [1329174000000, 32.44],
        [1329260400000, 32.46],
        [1329346800000, 32.86],
        [1329433200000, 32.75],
        [1329778800000, 32.54],
        [1329865200000, 32.33],
        [1329951600000, 32.97],
        [1330038000000, 33.41],
        [1330297200000, 33.27],
        [1330383600000, 33.27],
        [1330470000000, 32.89],
        [1330556400000, 33.1],
        [1330642800000, 33.73],
        [1330902000000, 33.22],
        [1330988400000, 31.99],
        [1331074800000, 32.41],
        [1331161200000, 33.05],
        [1331247600000, 33.64],
        [1331506800000, 33.56],
        [1331593200000, 34.22],
        [1331679600000, 33.77],
        [1331766000000, 34.17],
        [1331852400000, 33.82],
        [1332111600000, 34.51],
        [1332198000000, 33.16],
        [1332284400000, 33.56],
        [1332370800000, 33.71],
        [1332457200000, 33.81],
        [1332712800000, 34.4],
        [1332799200000, 34.63],
        [1332885600000, 34.46],
        [1332972000000, 34.48],
        [1333058400000, 34.31],
        [1333317600000, 34.7],
        [1333404000000, 34.31],
        [1333490400000, 33.46],
        [1333576800000, 33.59],
        [1333922400000, 33.22],
        [1334008800000, 32.61],
        [1334095200000, 33.01],
        [1334181600000, 33.55],
        [1334268000000, 33.18],
        [1334527200000, 32.84],
        [1334613600000, 33.84],
        [1334700000000, 33.39],
        [1334786400000, 32.91],
        [1334872800000, 33.06],
        [1335132000000, 32.62],
        [1335218400000, 32.4],
        [1335304800000, 33.13],
        [1335391200000, 33.26],
        [1335477600000, 33.58],
        [1335736800000, 33.55],
        [1335823200000, 33.77],
        [1335909600000, 33.76],
        [1335996000000, 33.32],
        [1336082400000, 32.61],
        [1336341600000, 32.52],
        [1336428000000, 32.67],
        [1336514400000, 32.52],
        [1336600800000, 31.92],
        [1336687200000, 32.2],
        [1336946400000, 32.23],
        [1337032800000, 32.33],
        [1337119200000, 32.36],
        [1337205600000, 32.01],
        [1337292000000, 31.31],
        [1337551200000, 32.01],
        [1337637600000, 32.01],
        [1337724000000, 32.18],
        [1337810400000, 31.54],
        [1337896800000, 31.6],
        [1338242400000, 32.05],
        [1338328800000, 31.29],
        [1338415200000, 31.05],
        [1338501600000, 29.82],
        [1338760800000, 30.31],
        [1338847200000, 30.7],
        [1338933600000, 31.69],
        [1339020000000, 31.32],
        [1339106400000, 31.65],
        [1339365600000, 31.13],
        [1339452000000, 31.77],
        [1339538400000, 31.79],
        [1339624800000, 31.67],
        [1339711200000, 32.39],
        [1339970400000, 32.63],
        [1340056800000, 32.89],
        [1340143200000, 31.99],
        [1340229600000, 31.23],
        [1340316000000, 31.57],
        [1340575200000, 30.84],
        [1340661600000, 31.07],
        [1340748000000, 31.41],
        [1340834400000, 31.17],
        [1340920800000, 32.37],
        [1341180000000, 32.19],
        [1341266400000, 32.51],
        [1341439200000, 32.53],
        [1341525600000, 31.37],
        [1341784800000, 30.43],
        [1341871200000, 30.44],
        [1341957600000, 30.2],
        [1342044000000, 30.14],
        [1342130400000, 30.65],
        [1342389600000, 30.4],
        [1342476000000, 30.65],
        [1342562400000, 31.43],
        [1342648800000, 31.89],
        [1342735200000, 31.38],
        [1342994400000, 30.64],
        [1343080800000, 30.02],
        [1343167200000, 30.33],
        [1343253600000, 30.95],
        [1343340000000, 31.89],
        [1343599200000, 31.01],
        [1343685600000, 30.88],
        [1343772000000, 30.69],
        [1343858400000, 30.58],
        [1343944800000, 32.02],
        [1344204000000, 32.14],
        [1344290400000, 32.37],
        [1344376800000, 32.51],
        [1344463200000, 32.65],
        [1344549600000, 32.64],
        [1344808800000, 32.27],
        [1344895200000, 32.1],
        [1344981600000, 32.91],
        [1345068000000, 33.65],
        [1345154400000, 33.8],
        [1345413600000, 33.92],
        [1345500000000, 33.75],
        [1345586400000, 33.84],
        [1345672800000, 33.5],
        [1345759200000, 32.26],
        [1346018400000, 32.32],
        [1346104800000, 32.06],
        [1346191200000, 31.96],
        [1346277600000, 31.46],
        [1346364000000, 31.27],
        [1346709600000, 31.43],
        [1346796000000, 32.26],
        [1346882400000, 32.79],
        [1346968800000, 32.46],
        [1347228000000, 32.13],
        [1347314400000, 32.43],
        [1347400800000, 32.42],
        [1347487200000, 32.81],
        [1347573600000, 33.34],
        [1347832800000, 33.41],
        [1347919200000, 32.57],
        [1348005600000, 33.12],
        [1348092000000, 34.53],
        [1348178400000, 33.83],
        [1348437600000, 33.41],
        [1348524000000, 32.9],
        [1348610400000, 32.53],
        [1348696800000, 32.8],
        [1348783200000, 32.44],
        [1349042400000, 32.62],
        [1349128800000, 32.57],
        [1349215200000, 32.6],
        [1349301600000, 32.68],
        [1349388000000, 32.47],
        [1349647200000, 32.23],
        [1349733600000, 31.68],
        [1349820000000, 31.51],
        [1349906400000, 31.78],
        [1349992800000, 31.94],
        [1350252000000, 32.33],
        [1350338400000, 33.24],
        [1350424800000, 33.44],
        [1350511200000, 33.48],
        [1350597600000, 33.24],
        [1350856800000, 33.49],
        [1350943200000, 33.31],
        [1351029600000, 33.36],
        [1351116000000, 33.4],
        [1351202400000, 34.01],
        [1351638000000, 34.02],
        [1351724400000, 34.36],
        [1351810800000, 34.39],
        [1352070000000, 34.24],
        [1352156400000, 34.39],
        [1352242800000, 33.47],
        [1352329200000, 32.98],
        [1352415600000, 32.9],
        [1352674800000, 32.7],
        [1352761200000, 32.54],
        [1352847600000, 32.23],
        [1352934000000, 32.64],
        [1353020400000, 32.65],
        [1353279600000, 32.92],
        [1353366000000, 32.64],
        [1353452400000, 32.84],
        [1353625200000, 33.4],
        [1353884400000, 33.3],
        [1353970800000, 33.18],
        [1354057200000, 33.88],
        [1354143600000, 34.09],
        [1354230000000, 34.61],
        [1354489200000, 34.7],
        [1354575600000, 35.3],
        [1354662000000, 35.4],
        [1354748400000, 35.14],
        [1354834800000, 35.48],
        [1355094000000, 35.75],
        [1355180400000, 35.54],
        [1355266800000, 35.96],
        [1355353200000, 35.53],
        [1355439600000, 37.56],
        [1355698800000, 37.42],
        [1355785200000, 37.49],
        [1355871600000, 38.09],
        [1355958000000, 37.87],
        [1356044400000, 37.71],
        [1356303600000, 37.53],
        [1356476400000, 37.55],
        [1356562800000, 37.3],
        [1356649200000, 36.9],
        [1356908400000, 37.68],
        [1357081200000, 38.34],
        [1357167600000, 37.75],
        [1357254000000, 38.13],
        [1357513200000, 37.94],
        [1357599600000, 38.14],
        [1357686000000, 38.66],
        [1357772400000, 38.62],
        [1357858800000, 38.09],
        [1358118000000, 38.16],
        [1358204400000, 38.15],
        [1358290800000, 37.88],
        [1358377200000, 37.73],
        [1358463600000, 37.98],
        [1358809200000, 37.95],
        [1358895600000, 38.25],
        [1358982000000, 38.1],
        [1359068400000, 38.32],
        [1359327600000, 38.24],
        [1359414000000, 38.52],
        [1359500400000, 37.94],
        [1359586800000, 37.83],
        [1359673200000, 38.34],
        [1359932400000, 38.1],
        [1360018800000, 38.51],
        [1360105200000, 38.4],
        [1360191600000, 38.07],
        [1360278000000, 39.12],
        [1360537200000, 38.64],
        [1360623600000, 38.89],
        [1360710000000, 38.81],
        [1360796400000, 38.61],
        [1360882800000, 38.63],
        [1361228400000, 38.99],
        [1361314800000, 38.77],
        [1361401200000, 38.34],
        [1361487600000, 38.55],
        [1361746800000, 38.11],
        [1361833200000, 38.59],
        [1361919600000, 39.6],
      ],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
      type: 'area',
      stacked: false,
      zoom: {
        type: 'x',
        enabled: true,
        autoScaleYaxis: true,
      },
    },
    annotations: {
      yaxis: [
        {
          y: 30,
          borderColor: primary,
          label: {
            show: true,
            text: 'Support',
            style: {
              color: '#fff',
              background: primary,
            },
          },
        },
      ],
      xaxis: [
        {
          x: new Date('14 Nov 2012').getTime(),
          borderColor: primary,
          // yAxisIndex: 0,
          label: {
            show: true,
            text: '$859.432',
            style: {
              color: '#fff',
              background: primary,
            },
          },
        },
      ],
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      // size: 0,
      style: 'hollow',
    },
    xaxis: {
      type: 'datetime',
      min: new Date('01 April 2012').getTime(),
      tickAmount: 11,
    },
    colors: [primary],
    tooltip: {
      x: {
        format: 'dd MMM yyyy',
      },
      autoSelected: 'zoom',
    },
    fill: {
      colors: primary,
      borderColor: primary,
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
      },
    },
  },
};

export const GrowthChart: any = {
  series: [76, 67, 61, 90],
  options: {
    chart: {
      height: 390,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: '30%',
          background: 'transparent',
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          },
        },
      },
    },
    stroke: {
      lineCap: 'round',
    },
    colors: [primary, secondary, primary, secondary],
    labels: ['Total order', 'Total product', 'Quantity', 'Page views'],
    legend: {
      show: true,
      floating: true,
      fontSize: '16px',
      position: 'left',
      offsetX: 60,
      offsetY: 15,
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: 0,
      },
      formatter: function (seriesName: any, opts: any) {
        return seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex];
      },
      itemMargin: {
        vertical: 3,
      },
    },
    responsive: [
      {
        breakpoint: 481,
        options: {
          chart: {
            height: 330,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
  },
};

function generateDayWiseTimeSeries(s:any, count:any) {
  var values = [[
    4,3,10,9,29,19,25,9,12,7,19,5,13,9,17,2,7,5
  ], [
    2,3,8,7,22,16,23,7,11,5,12,5,10,4,15,2,6,2
  ]];
  var i = 0;
  var series = [];
  var x = new Date("11 Nov 2012").getTime();
  while (i < count) {
    series.push([x, values[s][i]]);
    x += 86400000;
    i++;
  }
  return series;
}

export const timelineChart: any = {
  series: [{
    name: 'Total Views',
    data: generateDayWiseTimeSeries(0, 18)
  }, {
    name: 'Unique Views',
    data: generateDayWiseTimeSeries(1, 18)
  }],
  options: {
    chart:{
      type: "line",
      height: 450,
      foreColor: "#999",
      stacked: true,
      dropShadow: {
        enabled: true,
        enabledSeries: [0],
        top: -2,
        left: 2,
        blur: 5,
        opacity: 0.06
      },
      toolbar: {
          show:false,
        },
    },responsive: [
        {
          breakpoint:1470,
          options:{
            chart:{
              height:440
            }
          }
        },
        {
          breakpoint:1365,
          options:{
            chart:{
              height:300
            }
          }
        },
        {
          breakpoint:991,
          options:{
            chart:{
              height:250
            }
          }
        },
      ],
    colors:[primary, secondary],
    stroke:{       
      width:3
    },
    dataLabels: {
      enabled:false
    },
    markers: {
      size: 5,
      strokeColor: "#e3e3e3",
      strokeWidth: 3,
      strokeOpacity: 1,
      fillOpacity: 1,
      hover: {
        size: 6
      }
    },
    xaxis: {
      type: "datetime",
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      tooltip: {
        enabled: true
      },
      labels: {
          formatter: function (value:any) {
            return value + "k";
          },
        },
    },
    grid: {
      padding: {
        left: -5,
        right: 5
      }
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy"
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      show:false
    },
    fill: {
       type: "solid",
      fillOpacity: 0.7
    },
  },
};

export const TotalSellingChart: any = {
  series: [
    {
      name: 'TEAM A',
      type: 'area',
      data: [44, 48, 38, 47],
    },
    {
      name: 'TEAM B',
      type: 'line',
      data: [42, 38, 48, 30],
    },
  ],
  options: {
    chart: {
      height: 470,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: [5, 2],
      dashArray: [0, 8],
    },
    colors: [primary, secondary],
    fill: {
      type: 'solid',
      opacity: [0.35, 1],
    },
    labels: ['2010', '2011', '2012', '2013'],
    markers: {
      size: 5,
    },
    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 1500,
        options: {
          chart: {
            height: 315,
          },
        },
      },
    ],
    yaxis: [
      {
        labels: {
          formatter: function (value: any) {
            return value + 'k';
          },
        },
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y: any) {
          if (typeof y !== 'undefined') {
            return y.toFixed(0) + ' points';
          }
          return y;
        },
      },
    },
    legend: {
      show: false,
    },
  },
};

export const AcivityChart: any = {
  series: [
    {
      name: 'Inflation',
      data: [2.3, 5.1, 3.0, 9.1, 2.0, 4.6, 2.2, 9.3, 5.4, 4.8, 3.5, 5.2, 2.3, 5.1, 3.0, 9.1, 2.0, 4.6, 2.2, 9.3, 5.4, 4.8, 3.5, 5.2],
    },
  ],
  options: {
    chart: {
      height: 90,
      type: 'bar',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        dataLabels: {
          position: 'top', // top, center, bottom
        },

        columnWidth: '20%',
        startingShape: 'rounded',
        endingShape: 'rounded',
        colors: {
          backgroundBarColors: ['#d8e3e5'],
          backgroundBarOpacity: 1,
          backgroundBarRadius: 9,
        },
      },
    },
    dataLabels: {
      enabled: false,
      formatter: function (val: any) {
        return val + '%';
      },
      offsetY: -10,
      style: {
        fontSize: '12px',
        colors: ['#912efc'],
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      position: 'bottom',

      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: 'gradient',
          gradient: {
            colorFrom: primary,
            colorTo: '#c481ec',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val: any) {
          return val + '%';
        },
      },
    },
    colors: [secondary],
  },
};

export const YearlyGrowthChart: any = {
  series: [
    {
      name: 'Yearly Profit',
      data: [
        {
          x: '2001',
          y: 5500,
        },
        {
          x: '2002',
          y: 3800,
        },
        {
          x: '2003',
          y: 5500,
        },
        {
          x: '2004',
          y: 7700,
        },
        {
          x: '2005',
          y: 1500,
        },
        {
          x: '2006',
          y: 1000,
          fillColor: primary,
        },
        {
          x: '2007',
          y: 5000,
          fillColor: primary,
        },
        {
          x: '2008',
          y: 6000,
          fillColor: primary,
        },
        {
          x: '2009',
          y: 7900,
          fillColor: primary,
        },
        {
          x: '2010',
          y: 4700,
          fillColor: primary,
        },
        {
          x: '2011',
          y: 4000,
          fillColor: primary,
        },
        {
          x: '2012',
          y: 5000,
          fillColor: primary,
        },
        {
          x: '2013',
          y: 7500,
        },
        {
          x: '2014',
          y: 3500,
        },
        {
          x: '2015',
          y: 4000,
        },
        {
          x: '2016',
          y: 6500,
        },
        {
          x: '2017',
          y: 4000,
        },
        {
          x: '2018',
          y: 5853,
        },
        {
          x: '2019',
          y: 6553,
        },
        {
          x: '2020',
          y: 5200,
        },
        {
          x: '2021',
          y: 6200,
        },
        {
          x: '2023',
          y: 880,
          fillColor: secondary,
        },
        {
          x: '2023',
          y: 1200,
          fillColor: secondary,
        },
        {
          x: '2024',
          y: 8010,
          fillColor: secondary,
        },
        {
          x: '2025',
          y: 6053,
          fillColor: secondary,
        },
        {
          x: '2026',
          y: 4000,
          fillColor: secondary,
        },
        {
          x: '2027',
          y: 1000,
          fillColor: secondary,
        },
        {
          x: '2028',
          y: 6200,
        },
        {
          x: '2029',
          y: 6200,
        },
        {
          x: '2030',
          y: 7500,
        },
        {
          x: '2031',
          y: 7000,
        },
        {
          x: '2032',
          y: 5000,
        },
        {
          x: '2033',
          y: 6000,
        },
        {
          x: '2034',
          y: 8000,
        },
        {
          x: '2035',
          y: 4000,
        },
        {
          x: '2036',
          y: 4500,
        },
        {
          x: '2037',
          y: 4800,
        },
        {
          x: '2038',
          y: 3000,
          fillColor: secondary,
        },
        {
          x: '2039',
          y: 4200,
          fillColor: secondary,
        },
        {
          x: '2040',
          y: 7900,
          fillColor: secondary,
        },
        {
          x: '2041',
          y: 4000,
          fillColor: secondary,
        },
        {
          x: '2042',
          y: 5500,
          fillColor: secondary,
        },
        {
          x: '2043',
          y: 1000,
        },
        {
          x: '2044',
          y: 5500,
        },
        {
          x: '2045',
          y: 7000,
        },
        {
          x: '2046',
          y: 6500,
        },
        {
          x: '2047',
          y: 4000,
        },
      ],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
      height: 350,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '70%',
      },
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    xaxis: {
      type: 'datetime',
      axisBorder: {
        show: false,
      },
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        formatter: function (val: any) {
          return val / 100 + 'K';
        },
      },
    },
    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            height: 250,
          },
        },
      },
    ],
    colors: ['#d8e3e5'],
  },
};

export const progressDonutChart: any = {
  series: [70],
  options: {
    chart: {
      height: 200,
      type: 'radialBar',
    },
    colors: [primary],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 1,
          size: '70%',
          imageWidth: 64,
          imageHeight: 64,
          imageClipped: false,
        },
        dataLabels: {
          name: {
            show: false,
            color: '#fff',
          },
          value: {
            show: true,
            color: '#333',
            fontSize: '22px',
          },
        },
      },
    },
    states: {
      hover: {
        filter: {
          type: 'none',
        },
      },
    },
    stroke: {
      lineCap: 'round',
    },
    responsive: [
      {
        breakpoint: 360,
        options: {
          chart: {
            height: 300,
          },
        },
      },
    ],
    labels: [''],
  },
};

export const progressDonutChart1: any = {
  series: [68],
  options: {
    chart: {
      height: 200,
      type: 'radialBar',
    },
    colors: [secondary],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 1,
          size: '70%',
          imageWidth: 64,
          imageHeight: 64,
          imageClipped: false,
        },
        dataLabels: {
          name: {
            show: false,
            color: '#fff',
          },
          value: {
            show: true,
            color: '#333',
            fontSize: '22px',
          },
        },
      },
    },
    states: {
      hover: {
        filter: {
          type: 'none',
        },
      },
    },
    stroke: {
      lineCap: 'round',
    },
    responsive: [
      {
        breakpoint: 360,
        options: {
          chart: {
            height: 300,
          },
        },
      },
    ],
    labels: [''],
  },
};
