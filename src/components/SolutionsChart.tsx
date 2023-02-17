import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { ISolution } from "../interfaces/solutions";
import dayjs from "dayjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "top" as const,
    },
    // title: {
    //   display: true,
    //   text: "Chart.js Line Chart",
    // },
  },
};

// const labels = ["January", "February", "March", "April", "May", "June", "July"];

// export const data = {
//   labels,
//   datasets: [
//     {
//       //   label: "Dataset 1",
//       data: [500, 200, 300, 100, 400, 600, 800],
//   borderColor: "rgb(255, 99, 132)",
//   backgroundColor: "rgba(255, 99, 132, 0.5)",
//     },
//     // {
//     //   label: "Dataset 2",
//     //   data: [500, 200, 300, 100, 400, 600, 800],
//     //   borderColor: "rgb(53, 162, 235)",
//     //   backgroundColor: "rgba(53, 162, 235, 0.5)",
//     // },
//   ],
// };

interface ISolutionsChart {
  solutions: ISolution[];
}

const SolutionsChart = ({ solutions }: ISolutionsChart) => {
  const solutionCountByMonth: { [month: string]: number } = {};

  solutions.forEach((solution) => {
    const month = dayjs(solution.submissionDate).format("MMM YY");

    if (!solutionCountByMonth[month]) {
      solutionCountByMonth[month] = 0;
    }

    solutionCountByMonth[month]++;
  });

  const sortedEntries = Object.entries(solutionCountByMonth).sort(
    ([monthA], [monthB]) => {
      const dateA = Date.parse(`1 ${monthA} 2000`);
      const dateB = Date.parse(`1 ${monthB} 2000`);
      return dateA - dateB;
    }
  );

  const sortedDates = Object.fromEntries(sortedEntries);

  const data = {
    labels: Object.keys(sortedDates),
    datasets: [
      {
        label: "Submissions",
        data: Object.values(sortedDates),
        borderColor: "#ff9b35",
        backgroundColor: "#ff9b35",
        tension: 0.4,
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default SolutionsChart;
