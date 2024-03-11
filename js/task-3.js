const input = document.querySelector("#name-input");

input.addEventListener("input", onInput);

function onInput(event) {
  const name = document.querySelector("#name-output");

  name.textContent = event.currentTarget.value.trim() || "Anonymous";
}
