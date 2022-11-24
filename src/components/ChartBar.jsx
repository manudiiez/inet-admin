import React from 'react'
import { Bar } from 'react-chartjs-2'
import '../css/component/chart.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import useFetch from '../hooks/useFetch';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const ChartBar = () => {

  const { data, loading, reFetch } = useFetch(`/alert/chart/area`);


    const date = new Date().getMonth()

    const labels = ['Alertas']

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Alertas por area',
            },
        },
    };

    return (
        <div className='bar'>
            <Bar options={options} data={{ labels: labels, datasets: data }} />

        </div>
    )
}

export default ChartBar