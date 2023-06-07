var caixaBtn1 = document.getElementById("button1");
var caixaBtn2 = document.getElementById("button2");
var caixaBtn3 = document.getElementById("button3");
var popupCaixa = document.getElementById("caixa");
var change = document.getElementById("change");
var numCaixa;
var titulo;
var close = document.getElementById("close");
const emailsStoraged = localStorage.getItem("escolaEmail");
const emails = JSON.parse(emailsStoraged);
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

function getNumBox(item) {
  numCaixa = item.getAttribute("data-caixa");
  change.innerHTML = numCaixa;
}
caixaBtn1.addEventListener("click", () => {
  popupCaixa.style.display = "block";
});
caixaBtn2.addEventListener("click", () => {
  popupCaixa.style.display = "block";
});
caixaBtn3.addEventListener("click", () => {
  popupCaixa.style.display = "block";
});
caixaBtn4.addEventListener("click", () => {
  popupCaixa.style.display = "block";
});

var data = [
  {
    type: "indicator",
    mode: "number+delta",
    value: 110,
    delta: { reference: 100, valueformat: ".0f" },
    domain: { y: [0, 1], x: [0.25, 0.75] },
  },
  {
    y: [
      325, 324, 405, 400, 424, 404, 417, 432, 419, 394, 410, 426, 413, 419, 404,
      408, 401, 377, 368, 361, 356, 359, 375, 397, 394, 418, 437, 450, 430, 442,
      424, 443, 420, 418, 423, 423, 426, 440, 437, 436, 447, 460, 478, 472, 450,
      456, 436, 418, 429, 412, 429, 442, 464, 447, 434, 457, 474, 480, 499, 497,
      480, 502, 512, 492, 550,
    ],
  },
];
// var layout = {
//   yaxis: {
//     title: "Porcentagem da Caixa",
//     ticktext: ["20%", "40%", "60%", "80%", "100%"],
//     tickvals: [1, 2, 3, 4, 5],
//     tickmode: "array",
//     automargin: true,
//     titlefont: { size: 30 },
//   },
//   xaxis: {
//     title: "Meses",
//   },
//   title: titulo,
//   width: 850,
//   height: 625,
//   font: { size: 18 },
// };
var layout = {
  yaxis: {
    title: "Porcentagem da Caixa",
    ticktext: ["20%", "40%", "60%", "80%", "100%"],
    tickvals: [1, 2, 3, 4, 5],
    tickmode: "array",
    automargin: true,
    titlefont: { size: 30 },
  },
  xaxis: {
    title: "Meses",
  },
  width: 850,
  height: 500,
  paper_bgcolor: "rgba(0,0,0,0)",
  plot_bgcolor: "rgba(0,0,0,0)",
  font: { size: 18 },
};
var config = { responsive: true };

Plotly.newPlot("myGrap", data, layout, config);

close.addEventListener("click", () => {
  popupCaixa.style.display = "none";
});
