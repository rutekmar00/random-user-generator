import Chart from "chart.js/auto";

export default class Plot {
  dataChart: HTMLCanvasElement;
  labels: string[];
  values: string[];

  constructor(dataChart: HTMLCanvasElement, data: {}) {
    this.dataChart = dataChart;
    this.labels = Object.keys(data);
    this.values = Object.values(data);
    let isChartCreated = Chart.getChart("data-chart");
    if (isChartCreated != undefined) {
      isChartCreated.destroy();
    }
  }

  chartPlot() {
    const ctx = this.dataChart.getContext("2d");
    if (ctx != null) {
      const chart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: this.labels,
          datasets: [
            {
              label: "Number of person",
              data: this.values,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          maintainAspectRatio: false,
        },
      });
    }
  }
}
