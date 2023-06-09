import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
        ticks: {
            font: {
                size: 15,
                color:"#000" //this change the font size
            }
        }
    },
    y: {
        ticks: {
            font: {
                size: 15,
                color:"#000" //this change the font size
            },
            stepSize: 1
        }
    }
}
};
const numbers = [1, 2, 3, 4, 15, 2];
const labels = ["STR", "FIN", "QTY", "MAN", "STO", "HR"];

const data = {
  labels,
  datasets: [
    {
      label: "Open",
      data: numbers.map((el) => {
        return el;
      }),
      backgroundColor: "blue",
      barPercentage: 1,
      categoryPercentage: 0.25,
      textColor: "#000",
      
    },
    {
      label: "Closed",
      data: numbers.map((el) => {
        return el;
      }),
      backgroundColor: "green",
      barPercentage: 1,
      categoryPercentage: 0.25,
    },
  ],
};

const VerticalBarChart = ({open,closed}) => {
  
  const data = {
    labels,
    datasets: [
      {
        label: "Total",
        data: open.map((el) => {
          return el;
        }),
        backgroundColor: "#04559eff",
        barPercentage: 0.3 ,
        categoryPercentage: 0.7,
        textColor: "#000",
        
      },
      {
        label: "Closed",
        data: closed.map((el) => {
          return el;
        }),
        backgroundColor: "green",
        barPercentage: 0.3,
        categoryPercentage: 0.7,
      },
    ],
  };

  return (
    <Bar
      options={options}
      style={{
        padding: "20px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
      data={data}
    />
  );
};

export default VerticalBarChart;
