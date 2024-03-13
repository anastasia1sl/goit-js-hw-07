function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputElement = document.querySelector("input");
const createElement = document.querySelector("button[data-create]");
const destroyElement = document.querySelector("button[data-destroy]");
const divElement = document.querySelector("#boxes");

inputElement.addEventListener("input", (event) => {
  const amount = event.currentTarget.value;
});

createElement.addEventListener("click", onCreate);
destroyElement.addEventListener("click", destroyBoxes);

function onCreate() {
  const amount = parseInt(inputElement.value, 10);
  if (isNaN(amount) || amount < 1 || amount > 100) {
    return;
  }
  createBoxes(amount);
}

function createBoxes(amount) {
  divElement.innerHTML = "";

  let localWidth = 30;
  let localHeight = 30;

  for (let i = 0; i < amount; i++) {
    const newItems = document.createElement("div");

    newItems.style.width = `${localWidth}px`;
    newItems.style.height = `${localHeight}px`;
    newItems.style.backgroundColor = getRandomHexColor();

    divElement.appendChild(newItems);

    localWidth += 10;
    localHeight += 10;
  }
}

function destroyBoxes() {
  divElement.innerHTML = "";

  inputElement.value = "";
}
