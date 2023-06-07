const email = document.getElementById("inputEmail");
const nome = document.getElementById("inputName");
const telefone = document.getElementById("inputTelephone");
const emailLogged = localStorage.getItem("email");
const emailPosition = localStorage.getItem("posição");
const loggedEmail = JSON.parse(emailLogged);
const emailsStoraged = localStorage.getItem("escolaEmail");
const emails = JSON.parse(emailsStoraged);
const namesStoraged = localStorage.getItem("name");
const names = JSON.parse(namesStoraged);
const telephonesStoraged = localStorage.getItem("telefone");
const telephones = JSON.parse(telephonesStoraged);
const posição = localStorage.getItem("posição");
const test = document.getElementById("test");
const loggedIn = document.getElementById("logged");
const loggedOut = document.getElementById("notLogged");
const btnLogin = document.querySelector("input[name=login]");
const btnLogout = document.querySelector("input[name=logout]");

if (posição >= 0) {
  loggedIn.style.display = "block";
  loggedOut.style.display = "none";
} else {
  loggedIn.style.display = "none";
  loggedOut.style.display = "block";
}

setTimeout(function () {
  if (posição < 0) {
    alert("Logue-se primeiro!");
    window.location.href = "/home.html";
  }
}, 1);

loggedIn.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("posição", -1);
  window.location.href = "/index.html";
});

loggedOut.addEventListener("submit", (e) => {
  e.preventDefault();
  window.location.href = "/index.html";
});

if (
  (loggedEmail[emailPosition] !== "" && emailPosition >= 0) ||
  (loggedEmail[emailPosition] !== null && emailPosition >= 0)
) {
  email.value = loggedEmail[emailPosition];
  nome.value = names[emailPosition];
  telefone.value = telephones[emailPosition];
}
