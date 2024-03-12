function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector(".change-color");
const span = document.querySelector(".color");

buttonEl.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
  const currentColor = getRandomHexColor();
  span.textContent = currentColor;
  document.body.style.backgroundColor = currentColor;
}
