
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Graf3(){
  const options = {
    responsive: true,
    stepped:true,
    plugins: {
      legend: {
        display:false,
        position: 'top',
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
    aspectRatio:3
  };
  const data = {
    labels:[0,1,2,3,4,5],
    datasets: [
      {
        label: '',
        data: [0,1,2,3,4],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  return(
    <>
    <Line data={data} options={options}/>
    </>
  )
  

}