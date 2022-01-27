import Data from "./Data";

const button = document.getElementById("fetch-data");
const urlOneThousandMaleFrenchUsers: string =
  "https://randomuser.me/api/?results=1000&gender=male&nat=fr&inc=name,dob,location";

button?.addEventListener("click", async function () {
  const dataObject = new Data(urlOneThousandMaleFrenchUsers);
  await dataObject.fetchData();
  console.log(dataObject.getData());
});
