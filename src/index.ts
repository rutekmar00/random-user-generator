import Data from "./Data";
import Plot from "./Plot";
import Background from "./Background";
import Table from "./Table";

const button = document.getElementById("fetch-data");
const urlOneThousandMaleFrenchUsers: string =
  "https://randomuser.me/api/?results=1000&gender=male&nat=fr&inc=name,dob,location";

const background = new Background();
background.setEventListenerForIncreasingCounter();
background.checkTextBackgroundColor();

const table = <HTMLTableElement>document.getElementById("data-table");
const tableObject = new Table(table);
tableObject.fillTable();

button?.addEventListener("click", async function () {
  const dataDiv = document.getElementsByClassName("data")[0];
  dataDiv?.classList.add("isBlur");
  const spanLoadingIcon = document.getElementsByClassName(
    "material-icons-outlined md-90"
  )[0];
  spanLoadingIcon?.classList.add("loading");
  const dataObject = new Data(urlOneThousandMaleFrenchUsers);
  await dataObject.fetchData();
  dataObject.createSections();
  dataObject.prepareData();
  const dataChart = <HTMLCanvasElement>document.getElementById("data-chart");
  const chartObject = new Plot(dataChart, dataObject.getData());
  chartObject.chartPlot();
  dataObject.prepareTableData();
  tableObject.updateTable(dataObject.getTableData());
  dataDiv?.classList.remove("isBlur");
  spanLoadingIcon?.classList.remove("loading");
});
