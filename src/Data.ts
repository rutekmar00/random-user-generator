export default class Data {
  url: string;
  result: { results: [] };

  constructor(url: string) {
    this.url = url;
    this.result = { results: [] };
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
    return this.result;
  }
}
