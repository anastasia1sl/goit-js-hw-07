const input = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

input.addEventListener("input", onInput);

function onInput(event) {
  nameOutput.textContent = event.currentTarget.value.trim() || "Anonymous";
}
