// InventoryChart.js

import React from 'react';
import { Bar } from 'react-chartjs-2';

const Blog = () => {
  // Sample data for the chart
  const data = {
    labels: ['Football', 'Basketball', 'Tennis', 'Golf', 'Baseball'],
    datasets: [
      {
        label: 'Inventory Quantity',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [30, 45, 20, 15, 50],
      },
    ],
  };

  // Options for the chart
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Inventory Chart</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Blog;
