export default class Data {
  url: string;
  result: { results: [] };
  sections: {
    [key: string]: {
      dob: { age: number };
      name: { first: string; last: string };
      location: { city: string; country: string };
    }[];
  };
  data: {};
  tableData: {
    name: { first: string; last: string };
    dob: { age: number };
    location: { city: string; country: string };
  }[];

  constructor(url: string) {
    this.url = url;
    this.result = { results: [] };
    this.sections = {};
    this.data = {};
    this.tableData = [];
  }

  async fetchData() {
    const response = await fetch(this.url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    this.result = data;
  }

  getData() {
    return this.data;
  }

  createSections() {
    let sections = this.sections;
    sections = this.result.results.reduce(
      (
        sections: {
          [key: string]: {
            dob: { age: number };
            name: { first: string; last: string };
            location: { city: string; country: string };
          }[];
        },
        item: {
          dob: { age: number };
          name: { first: string; last: string };
          location: { city: string; country: string };
        }
      ) => {
        const divider = 9;
        let label = "";
        label = `${Math.floor(item.dob.age / 10) * 10}-${
          Math.ceil((item.dob.age + 1) / 10) * 10 - 1
        }`;
        if (!sections.hasOwnProperty(label)) {
          sections[`${label}`] = [];
        }
        sections[`${label}`].push(item);
        return sections;
      },
      {}
    );
    this.sections = sections;
  }

  prepareData() {
    let data: { [key: string]: number } = {};
    for (const section in this.sections) {
      let sectionArray = this.sections[section.toString()];
      data[`${section}`] = sectionArray.length;
    }
    this.data = Object.fromEntries(Object.entries(data).sort());
  }

  prepareTableData() {
    let lastKey = Object.keys(this.data).pop();
    if (lastKey) {
      let lastGroup = this.sections[lastKey];
      console.log(lastGroup);
      lastGroup.sort(function (
        a: { dob: { age: number } },
        b: { dob: { age: number } }
      ) {
        return b.dob.age - a.dob.age;
      });
      this.tableData = lastGroup.slice(0, 10 - lastGroup.length);
    }
  }

  getTableData() {
    return this.tableData;
  }
}
