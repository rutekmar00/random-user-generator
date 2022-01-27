export default class Table {
  table: HTMLTableElement;

  constructor(tableElement: HTMLTableElement) {
    this.table = tableElement;
  }

  updateTable(
    tableData: {
      name: { first: string; last: string };
      dob: { age: number };
      location: { city: string; country: string };
    }[]
  ) {
    this.table.children[1].innerHTML = "";
    for (const item of tableData) {
      this.table.children[1].innerHTML += `
        <tr>
          <td>${item.name.first}</td>
          <td>${item.name.last}</td>
          <td>${item.dob.age}</td>
          <td>${item.location.city}</td>
          <td>${item.location.country}</td>
        </tr>
        `;
    }
  }

  fillTable() {
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");
    thead.innerHTML = `
      <tr>
        <th>First name</th>
        <th>Last name</th>
        <th>Age</th>
        <th>City</th>
        <th>Country</th>
      </tr>`;
    this.table.appendChild(thead);
    this.table.appendChild(tbody);
    this.table.children[1].innerHTML = "";
    for (let i = 0; i < 10; i++) {
      this.table.children[1].innerHTML += `
        <tr>
          <td>${undefined}</td>
          <td>${undefined}</td>
          <td>${undefined}</td>
          <td>${undefined}</td>
          <td>${undefined}</td>
        </tr>
        `;
    }
  }
}
