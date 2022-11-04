const login = document.getElementById("log-in");
const loginForm = document.querySelector("#log-in form");
const loginInput = document.createElement("input");
const loginBtn = document.createElement("button");

loginInput.placeholder = "Write your ID";
loginBtn.innerText = "LOG IN";

loginForm.appendChild(loginInput);
loginForm.appendChild(loginBtn);

function loadID() {
  if (localStorage["ID"] !== undefined) {
    login.innerHTML = `Hello ${localStorage.getItem("ID")}`;
  }
}

function onSubmit(event) {
  event.preventDefault();
  localStorage.setItem("ID", loginInput.value);
  loadID();
}

loadID();
loginForm.addEventListener("submit", onSubmit);
