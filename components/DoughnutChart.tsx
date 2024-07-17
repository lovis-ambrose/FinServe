"use client";

import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJs.register(ArcElement, Tooltip, Legend);


const DoughnutChart = ({accounts}: DoughnutChartProps) => {
    const data = {
        datasets: [{
            label: 'Bank',
            data: [1250, 1100, 1456],
            backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'],
        }],
        labels: [
            'Bank 1',
            'Bank 2',
            'Bank 3'
        ]
    }

  return (
    <Doughnut 
        data={data}
        options={{
            cutout: '50%',
            plugins: {
                legend: {
                    display: false
                }
            }
        }}
    />
  )
}

export default DoughnutChart