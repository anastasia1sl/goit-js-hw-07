const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = formEl.elements.email.value;
  const password = formEl.elements.password.value;

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  }

  const formData = { email, password };
  console.log(formData);

  event.currentTarget.reset();
}
