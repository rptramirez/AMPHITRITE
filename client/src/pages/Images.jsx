import React from 'react';

import { useSelector } from 'react-redux';
import PhotoListContainer from '../components/PhotoList';
import config from '../config/config';
import { CloudinaryContext } from 'cloudinary-react';
import '../components/layout/layout.css';

const chartOptions = {
  series: [
    {
      name: 'Online Customers',
      data: [40, 70, 20, 90, 36, 80, 30, 91, 60],
    },
    {
      name: 'Store Customers',
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
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
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

const { cloud_name, upload_preset } = config;

const Images = (props) => {
  const themeReducer = useSelector((state) => state.ThemeReducer.mode);

  return (
    <div>
      <h2 className="page-header">Dashboard</h2>
      <div className="card full-height">
        {/* chart */}
        <PhotoListContainer
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
          height="100%"
          cloudName={cloud_name}
          uploadPreset={upload_preset}
        />
      </div>
    </div>
  );
};

export default Images;
