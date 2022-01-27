import Data from "./Data";
import Plot from "./Plot";
import Background from "./Background";

const button = document.getElementById("fetch-data");
const urlOneThousandMaleFrenchUsers: string =
  "https://randomuser.me/api/?results=1000&gender=male&nat=fr&inc=name,dob,location";

const background = new Background();
background.setEventListenerForIncreasingCounter();
background.checkTextBackgroundColor();

button?.addEventListener("click", async function () {
  const dataObject = new Data(urlOneThousandMaleFrenchUsers);
  await dataObject.fetchData();
  dataObject.createSections();
  dataObject.prepareData();
  const dataChart = <HTMLCanvasElement>document.getElementById("data-chart");
  const chartObject = new Plot(dataChart, dataObject.getData());
  chartObject.chartPlot();
});
