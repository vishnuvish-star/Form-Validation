"use strict";

// select the elements
const userNameInput = document.getElementById("username");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");
const userConfirmPassword = document.getElementById("re-password");
const userSubmitBtn = document.getElementById("btn");
const formEl = document.querySelector(".validate-form");

// global variables
// const input = [
//   { inputBox: userNameInput, name: "username" },
//   { inputBox: userEmail, name: "Email" },
//   { inputBox: userPassword, name: "Password" },
//   { inputBox: userConfirmPassword, name: "re-password" },
// ];

// console.log(input.length);
// functions
const errorMsg = (element, message) => {
  let formControl = element.parentElement;
  console.log(formControl);
  formControl.className = "input-box error";
  let smallTag = formControl.querySelector(".error-txt");
  smallTag.innerText = `${message}Name is invalid!`;
};
// success function

const successMsg = (element) => {
  let formControl = element.parentElement;
  formControl.className = "input-box success";
};
// required function

// function checkRequired(inputArray, message) {}
// eventListeners

formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  const userNameValue = userNameInput.value.trim();
  const userEmailValue = userEmail.value.trim();
  const userPasswordValue = userPassword.value.trim();
  const userConfirmPasswordValue = userConfirmPassword.value.trim();

  // checkRequired(input);

  if (userNameValue) {
    successMsg(userNameInput);
  } else {
    errorMsg(userNameInput, "Username");
  }
  if (userEmailValue) {
    successMsg(userEmail);
  } else {
    errorMsg(userEmail, "E-mail");
  }
  if (userPasswordValue) {
    successMsg(userPassword);
  } else {
    errorMsg(userPassword, "Password");
  }
  if (userConfirmPasswordValue) {
    //password === confirm password
    if (userPasswordValue === userConfirmPasswordValue) {
      successMsg(userConfirmPassword);
    } else {
      errorMsg(userConfirmPassword, "Confirm-password doesn't match ");
    }
  } else {
    errorMsg(userConfirmPassword, "Re-Enter Password");
  }
});

// initial setup
