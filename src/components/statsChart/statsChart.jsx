
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { ChartWrapper } from "./style";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StatsChart = ({ stats }) => {
  const labels = [
    "PS",
    "Ataque",
    "Defesa",
    "Ataque Especial",
    "Defesa Especial",
    "Velocidade",
  ];

  const safeStats = Array.isArray(stats) && stats.length === labels.length ? stats : [30, 30, 30, 40, 40, 30];

  const data = {
    labels,
    datasets: [
      {
        label: "Status",
        data: safeStats , 
        backgroundColor: [
          "#ff6384",
          "#36a2eb",
          "#ffcd56",
          "#4bc0c0",
          "#9966ff",
          "#ff9f40",
        ],
        borderRadius: 8,
      },
    ],
  };

  const options = {
    indexAxis: "y", 
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: "Estatísticas do Pokémon" },
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 200, 
      },
    },
  };

  return (
    <ChartWrapper>
        <Bar data={data} options={options} />
    </ChartWrapper> 
    );
};

export default StatsChart;
