import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: { display: false },
    },
    y: {
      grid: { display: false },
      ticks: {
        display: false,
      },
    },
  },
};

const labels = ["April 1 2022", "April 30 2022"];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "#FF5403",
      backgroundColor: (context: any) => {
        const bgColor = ["rgba(255, 84, 3, 0.2)", "rgba(255, 84, 3, 0)"];
        if (!context.chart.chartArea) {
          return;
        }

        const {
          ctx,
          data,
          chartArea: { top, bottom },
        } = context.chart;
        const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
        gradientBg.addColorStop(0, bgColor[0]);
        gradientBg.addColorStop(1, bgColor[1]);
        return gradientBg;
      },
    },
  ],
};

export function LineChart() {
  return (
    <div className="w-full h-1/5">
      <Line options={options} data={data} />
    </div>
  );
}
