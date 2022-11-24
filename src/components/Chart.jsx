// import '../css/component/chart.css'
// import {
//   LineChart,
//   Line,
//   XAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// function Chart({ title, data, dataKey, grid }) {

//   return (
//     <div className="chart">
//       <h3 className="chartTitle">{title}</h3>
//       <ResponsiveContainer width="100%" aspect={4 / 1}>
//         <LineChart data={data}>
//           <XAxis dataKey="name" stroke="#5550bd" />
//           <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
//           <Tooltip />
//           {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

// export default Chart;
import { Bar } from 'react-chartjs-2'
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import useFetch from '../hooks/useFetch';
import '../css/component/chart.css'

ChartJS.register(ArcElement, Tooltip, Legend);





const Chart = () => {
  const labels = ['Baño', 'Cama']
  const { data, loading, reFetch } = useFetch(`/alert/chart/pie`);
  return (
    <div className='pie'>
      Origen de las alertas
      <Pie data={{ labels: labels, datasets: data }} />
    </div>
  )
}

export default Chart