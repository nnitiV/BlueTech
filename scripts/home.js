const emailsStoraged = localStorage.getItem("escolaEmail");
const emails = JSON.parse(emailsStoraged);
const posição = localStorage.getItem("posição");
const test = document.getElementById("test");
const loggedIn = document.getElementById("logged");
const loggedOut = document.getElementById("notLogged");
const btnLogin = document.querySelector("input[name=login]");
const btnLogout = document.querySelector("input[name=logout]");
const btnTicket = document.getElementById("abrirTicket");
const btnAcompanhe = document.getElementById("acompanhe");

if (posição >= 0) {
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
  if (posição < 0) {
    alert("Logue-se primeiro!");
    return;
  } else {
    window.location.href = "/acompanhe.html";
  }
});

btnTicket.addEventListener("click", (e) => {
  if (posição < 0) {
    alert("Logue-se primeiro!");
    return;
  } else {
    window.location.href = "/ticket.html";
  }
});
