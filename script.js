const email = document.querySelector("#mail");
const country = document.querySelector("#country");
const postCode = document.querySelector("#post-code");
const password = document.querySelector("#password");
const secondPassword = document.querySelector("#password-confirmation");
const form = document.getElementsByTagName("form")[0];

email.addEventListener("input", function () {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
    email.style.borderColor = "#32CD32";
  }
});

country.addEventListener("input", function () {
  if (country.value) {
    country.setCustomValidity("");
    country.style.borderColor = "#32CD32";
  } else {
    country.setCustomValidity("Please select a country");
  }
});

postCode.validity.pattern = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/;

const passwordPattern = /[A-Za-z0-9_]{1,15}/;

//const postCodeResult = postCodePattern.test(postCode);

postCode.addEventListener("input", (event) => {
  if (/^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/.test(postCode)) {
    postCode.setCustomValidity("");
    postCode.style.borderColor = "#32CD32";
  } else {
    postCode.setCustomValidity("Please put in the correct post code");
    postCode.style.borderColor = "#FF0000";
  }
});

password.addEventListener("input", (event) => {
  if (passwordPattern.test(password.value)) {
    password.setCustomValidity("");
    password.style.borderColor = "#32CD32";
  } else {
    password.setCustomValidity("Please put in the password");
    password.style.borderColor = "#FF0000";
  }
});

secondPassword.addEventListener("input", (event) => {
  if (secondPassword.value == password.value) {
    secondPassword.setCustomValidity("");
    secondPassword.style.borderColor = "#32CD32";
  } else {
    secondPassword.setCustomValidity("Please put in the same password");
    secondPassword.style.borderColor = "#FF0000";
  }
});

form.addEventListener("submit", (event) => {
  if (
    !email.validity.valid ||
    !country.validity.valid ||
    !postCode.validity.valid ||
    !password.validity.valid ||
    !secondPassword.validity.valid
  ) {
    showError();
    event.preventDefault();
  }
});

showError = () => {
  if (!email.validity.valid) {
    alert("loser, type in your email");
  }
};
