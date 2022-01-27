export default class Data {
  url: string;
  result: { results: [] };
  sections: { [key: string]: {}[] };
  data: {};

  constructor(url: string) {
    this.url = url;
    this.result = { results: [] };
    this.sections = {};
    this.data = {};
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
      (sections: { [key: string]: {}[] }, item: { dob: { age: number } }) => {
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
    // let data: any = {};
    let data: { [key: string]: number } = {};
    for (const section in this.sections) {
      let sectionArray = this.sections[section.toString()];
      data[`${section}`] = sectionArray.length;
    }
    this.data = Object.fromEntries(Object.entries(data).sort());
  }
}
