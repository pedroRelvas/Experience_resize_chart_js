import React, { useEffect, useRef, useState } from "react";
import Chartjs from "chart.js";
import "./chart.css";

const chartConfig1 = {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)"
        ],
        borderWidth: 1
      }
    ]
  },
  options: {
    maintainAspectRatio: true,
    responsive: true,
    aspectRatio: 2,
    layout: {}
  }
};

const Chart1 = () => {
  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(
        chartContainer.current,
        chartConfig1
      );
      setChartInstance(newChartInstance);
    }
  }, [chartContainer]);

  return (
    <div className="chart-container1">
      <canvas ref={chartContainer} className="chart1" />
    </div>
  );
};

export default Chart1;
