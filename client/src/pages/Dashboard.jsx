import React, { useEffect } from 'react';

import Chart from 'react-apexcharts';

import { useSelector } from 'react-redux';

import StatusCard from '../components/status-card/StatusCard';

import statusCards from '../assets/JsonData/status-card-data.json';

const chartOptions = {
  series: [
    {
      name: 'Volume of a particular marine waste',
      data: [40, 70, 20, 90, 36, 80, 30, 91, 60],
    },
    {
      name: 'Location',
      data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10],
    },
  ],
  options: {
    color: ['#6ab04c', '#2980b9'],
    chart: {
      background: 'transparent',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      categories: [
        'Plastics',
        'Microplastics',
        'Derelict Fishing Gear',
        'Abandoned and Derelict Vessels',
        'Metal',
        'Paper',
        'Cloth',
        'Rubber',
        'Wood'
      ],
    },
    legend: {
      position: 'top',
    },
    grid: {
      show: false,
    },
  },
};

const Dashboard = () => {
  const themeReducer = useSelector((state) => state.ThemeReducer.mode);

  return (
    <div>
      <div>
        <h2 className="page-header">Dashboard</h2>
        <div className="card full-height">
          {/* chart */}
          <Chart
            options={
              themeReducer === 'theme-mode-dark'
                ? {
                    ...chartOptions.options,
                    theme: { mode: 'dark' },
                  }
                : {
                    ...chartOptions.options,
                    theme: { mode: 'light' },
                  }
            }
            series={chartOptions.series}
            type="line"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
