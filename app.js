const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputEmailTwo = document.getElementById("email2");
const inputPassword = document.getElementById("password");
const confirmPassword = document.getElementById("password2");
const passwordThree = document.getElementById("password3");
const btnSignUp = document.getElementById("sign-up");
const btnLogIn = document.getElementById("log-in");
let errorMessage1 = document.getElementById("error-message1");
let errorMessage2 = document.getElementById("error-message2");
let errorMessage3 = document.getElementById("error-message3");
let errorMessage4 = document.getElementById("error-message4");
let errorMessage5 = document.getElementById("error-message5");
let errorMessage6 = document.getElementById("error-message6");
let errorMessage7 = document.getElementById("error-message7");

let emailRe =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let passwordRe = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/;

btnSignUp.addEventListener("click", function (e) {
  e.preventDefault();
  errorMessage1.innerHTML = "";
  errorMessage2.innerHTML = "";
  errorMessage3.innerHTML = "";
  errorMessage4.innerHTML = "";
  if (inputName.value === "" || inputName.value === null) {
    errorMessage1.innerHTML = "الاسم لا يجب ان يكون فارغا";
  } else {
    errorMessage1.classList.toggle("error");
    inputName.style.border = "none";
    inputName.style.color = "green";
  }

  if (!emailRe.test(inputEmail.value)) {
    errorMessage2.innerHTML = "هذا الايميل غير صالح";
  } else {
    errorMessage2.classList.toggle("error");
    inputName.style.border = "none";
    inputName.style.color = "green";
    window.sessionStorage.setItem("email", inputEmail.value);
  }

  if (!passwordRe.test(inputPassword.value.trim())) {
    errorMessage3.innerHTML = "يجب ان تكون كلمة المرور 8 حروف و رموز او اكثر";
  } else {
    errorMessage3.classList.toggle("error");
    inputName.style.border = "none";
    inputName.style.color = "green";
    window.sessionStorage.setItem("password", inputPassword.value);
  }

  if (
    confirmPassword.value !== inputPassword.value ||
    confirmPassword.value === ""
  ) {
    errorMessage4.innerHTML = "كلمة المرور غير مطابقة";
  } else {
    errorMessage4.classList.toggle("error");
    inputName.style.border = "none";
    inputName.style.color = "green";
  }
  inputName.value = "";
  inputEmail.value = "";
  inputPassword.value = "";
  confirmPassword.value = "";
});

btnLogIn.addEventListener("click", function (e) {
  e.preventDefault();
  errorMessage5.innerHTML = "";
  errorMessage6.innerHTML = "";
  errorMessage7.innerHTML = "";
  if (!emailRe.test(inputEmailTwo.value)) {
    errorMessage5.innerHTML = "هذا الايميل غير صحيح";
  } else {
    errorMessage5.classList.toggle("error");
    inputEmailTwo.style.border = "none";
    inputEmailTwo.style.color = "green";
  }

  if (!passwordRe.test(passwordThree.value)) {
    errorMessage6.innerHTML = "كلمة المرور خاطئة";
  } else {
    errorMessage6.classList.toggle("error");
    passwordThree.style.border = "none";
    passwordThree.style.color = "green";
  }

  let storageEmail = window.sessionStorage.getItem("email");
  let storagePass = window.sessionStorage.getItem("password");

  if (
    storageEmail === inputEmailTwo.value &&
    storagePass === passwordThree.value
  ) {
    window.location.href = "./data.html";
  } else {
    errorMessage7.innerHTML = "عليك تسجيل اشتراك اولا";
  }
  inputEmailTwo.value = "";
  passwordThree.value = "";
});


