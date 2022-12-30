const timer = document.querySelector("#timer");

document.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    const date = new Date();
    const timerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    timer.textContent = timerText;
  }, 1000);
});

const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

console.log(fetchPromise);

fetchPromise.then((response) => {
  console.log(`Received response: ${response.status}`);
});

console.log("Started request…");
