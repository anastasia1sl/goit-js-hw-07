function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("input");
const createEl = document.querySelector("button[data-create]");
const destroyEl = document.querySelector("button[data-destroy]");
const divEl = document.querySelector("#boxes");

let amount = "";
let width = 30;
let height = 30;

inputEl.addEventListener("input", onInput);
createEl.addEventListener("click", onCreate);
destroyEl.addEventListener("click", destroyBoxes);

function onInput(event) {
  amount = event.currentTarget.value;
}

function onCreate() {
  if (amount < 1 || amount > 100) {
    return;
  }
  createBoxes(amount);
}

function createBoxes(amount) {
  divEl.innerHTML = "";
  for (let i = 0; i < amount; i++) {
    let newItems = document.createElement("div");

    width += 10;
    height += 10;

    newItems.style.width = `${width}px`;
    newItems.style.height = `${height}px`;
    newItems.style.backgroundColor = getRandomHexColor();

    divEl.appendChild(newItems);
  }
}

function destroyBoxes() {
  divEl.innerHTML = "";

  inputEl.value = "";

  width = 30;
  height = 30;
}
