const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function LoginBtnClick(){
   console.log(loginInput.value);
}

loginButton.addEventListener("click",LoginBtnClick);