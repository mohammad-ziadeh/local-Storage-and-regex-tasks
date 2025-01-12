let email = document.getElementById("email");
let pass = document.getElementById("password");
let passCon = document.getElementById("passwordCon");
let err;
let btn = document.getElementById("btn");
btn.disabled = true;
function req() {
  let errors = document.querySelectorAll(".error");
  if (email.value === "") {
    errors[0].innerHTML = "required";
  } else {
    errors[0].innerHTML = "";
  }
  if (pass.value === "") {
    errors[1].innerHTML = "required";
  } else {
    errors[1].innerHTML = "";
  }
  if (passCon.value !== pass.value) {
    errors[2].innerHTML = "your passwords are not the same >-<";
  } else {
    errors[2].innerHTML = "";
  }
  if (email.value !== "" && pass.value !== "" && passCon.value === pass.value) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}
function emailValidate() {
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let mail = email.value;
  let errors = document.querySelectorAll(".error");

  if (!mail) {
    errors[0].innerHTML = "Email is required";
  } else if (regex.test(mail)) {
    errors[0].innerHTML = "";
  } else {
    errors[0].innerHTML = "Invalid Email address";
  }
}
email.addEventListener("input", emailValidate);

pass.addEventListener("blur", req);
passCon.addEventListener("input", req);
email.addEventListener("blur", () => {
  let errors = document.querySelectorAll(".error");
  errors.forEach((errorPop) => (errorPop.innerHTML = ""));
});
btn.addEventListener("click", (event) => {
  event.preventDefault();
  alert("U have successfully registered Yippeee!!!!!!!");
  setTimeout(() => {
    window.location.href = "toDo/index.html";
  }, 1000);
});
btn.addEventListener("click", (event) => {
  event.preventDefault();
  let emailValue = email.value;
  localStorage.setItem("email", emailValue);
});
