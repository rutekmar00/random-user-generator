export default class Background {
  setEventListenerForIncreasingCounter() {
    window.addEventListener("unload", function () {
      let count: number = parseInt(localStorage.getItem("counter") || "0");
      localStorage.setItem("counter", (++count).toString());
    });
  }

  checkTextBackgroundColor() {
    if (localStorage.getItem("counter") === "5") {
      let textContainer = document.getElementsByClassName(
        "text-2"
      )[0] as HTMLElement;
      textContainer ? (textContainer.style.backgroundColor = "grey") : null;
      localStorage.setItem("counter", "0");
    }
  }
}
