const emailsStoraged = localStorage.getItem("escolaEmail");
const emails = JSON.parse(emailsStoraged);
const logado = localStorage.getItem("posição");
const test = document.getElementById("test");
const loggedIn = document.getElementById("logged");
const loggedOut = document.getElementById("notLogged");
const btnLogin = document.querySelector("input[name=login]");
const btnLogout = document.querySelector("input[name=logout]");
const btnTicket = document.getElementById("abrirTicket");
const btnAcompanhe = document.getElementById("acompanheBtn");
const popup = document.getElementById("overflow");
const logarBtn = document.getElementById("logar");
const cancelarBtn = document.getElementById("cancelar");
const loginPopup = document.getElementById("loginPopup");

if (logado >= 0) {
  loggedIn.style.display = "block";
  loggedOut.style.display = "none";
} else {
  loggedIn.style.display = "none";
  loggedOut.style.display = "block";
}

loggedIn.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("posição", -1);
  window.location.href = "/index.html";
});

loggedOut.addEventListener("submit", (e) => {
  e.preventDefault();
  window.location.href = "/index.html";
});

btnAcompanhe.addEventListener("click", (e) => {
  if (logado < 0) {
    loginPopup.style.transform = "scale(1)";

    return;
  } else {
    window.location.href = "/acompanhe.html";
  }
});

btnTicket.addEventListener("click", (e) => {
  if (logado < 0) {
    loginPopup.style.transform = "scale(1)";
    return;
  } else {
    window.location.href = "/suporte.html";
  }
});

cancelarBtn.addEventListener("click", () => {
  loginPopup.style.transform = "scale(0)";
});

logarBtn.addEventListener("click", () => {
  window.location.href = "/index.html";
});
