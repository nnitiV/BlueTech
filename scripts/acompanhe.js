// var popupCaixa = document.getElementById("caixa");
var caixaElements = document.querySelectorAll("[data-caixa]");
// var close = document.getElementById("close");
const emailsStoraged = localStorage.getItem("escolaEmail");
const emails = JSON.parse(emailsStoraged);
const posição = localStorage.getItem("posição");
const test = document.getElementById("test");
const loggedIn = document.getElementById("logged");
const loggedOut = document.getElementById("notLogged");
const btnLogin = document.querySelector("input[name=login]");
const btnLogout = document.querySelector("input[name=logout]");
const log = document.getElementById("noLogged");
var change = document.getElementById("change");
var numCaixa;
var titulo;
var data;

function changeTitle() {
  var caixas = document.querySelectorAll(".myGrap");
  var change = document.getElementsByClassName("change");
  for (var i = 0; i < caixas.length; i++) {
    numCaixa = caixas[i].getAttribute("data-caixa");
    var element = change[i];
    element.textContent = numCaixa;
  }
}
changeTitle();
var caixaValues = [];
for (var i = 0; i < caixaElements.length; i++) {
  var value = caixaElements[i].getAttribute("data-caixa");
  caixaValues.push(value);
}

if (posição >= 0) {
  loggedIn.style.display = "block";
  loggedOut.style.display = "none";
} else {
  loggedIn.style.display = "none";
  loggedOut.style.display = "block";
}

setTimeout(function () {
  if (posição < 0) {
    window.location.href = "/notlogged.html";
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

var layout = {
  yaxis: {
    // title: "Porcentagem da Caixa",
    ticktext: ["20%", "40%", "60%", "80%", "100%"],
    tickvals: [20, 40, 60, 80, 100],
    tickmode: "array",
    automargin: true,
    range: [0, 100],
    titlefont: { size: 30 },
  },
  xaxis: {
    // title: "Meses",
    tickvals: [1, 2, 3, 4, 5], // Defina aqui os valores dos pontos no eixo x
    ticktext: ["", "", "", "", ""], // Defina aqui os rótulos desejados para o eixo x
  },
  width: 850,
  height: 500,
  paper_bgcolor: "rgba(0,0,0,0)",
  plot_bgcolor: "rgba(0,0,0,0)",
  font: { size: 18 },
};

// close.addEventListener("click", () => {
//   console.log("Popup undisplayed");
//   popupCaixa.style.display = "none";
// });

var yArray = []; // Initial array
for (var i = 0; i < 10; i++) {
  var newValue = Math.floor(90 + Math.random() * 10);
  yArray.push(newValue);
}
var data = [
  {
    type: "scatter",
    // mode: "number+delta",
    // value: 0,
    // delta: { reference: 50, valueformat: ".0f" },
    // domain: { y: [0, 1], x: [0.25, 0.75] },
    // title: { text: "Users online" },
  },
  {
    y: yArray,
  },
];

var yArray2 = []; // Initial array
for (var i = 0; i < 10; i++) {
  var newValue = Math.floor(70 + Math.random() * 10);
  yArray2.push(newValue);
}
var data2 = [
  {
    type: "indicator",
    mode: "number+delta",
    // value: 0,
    // delta: { reference: 50, valueformat: ".0f" },
    domain: { y: [0, 1], x: [0.25, 0.75] },
    // title: { text: "Users online" },
  },
  {
    y: yArray2,
  },
];

var yArray3 = []; // Initial array
for (var i = 0; i < 10; i++) {
  var newValue = Math.floor(50 + Math.random() * 10);
  yArray3.push(newValue);
}
var data3 = [
  {
    type: "indicator",
    mode: "number+delta",
    // value: 0,
    // delta: { reference: 50, valueformat: ".0f" },
    domain: { y: [0, 1], x: [0.25, 0.75] },
    // title: { text: "Users online" },
  },
  {
    y: yArray3,
  },
];

Plotly.newPlot("myGrap1", data, layout);
Plotly.newPlot("myGrap2", data2, layout);
Plotly.newPlot("myGrap3", data3, layout);
Plotly.deleteTraces("myGrap1", 0);
Plotly.deleteTraces("myGrap2", 0);
Plotly.deleteTraces("myGrap3", 0);
setInterval(function () {
  updateArray();
  Plotly.update("myGrap1", { y: [yArray] });
  Plotly.update("myGrap2", { y: [yArray2] });
  Plotly.update("myGrap3", { y: [yArray3] });
}, 500);

function updateArray() {
  yArray.shift(); // Remove the first element
  var newValue = Math.floor(90 + Math.random() * 10); // Generate a new random value
  yArray.push(newValue); // Add the new value at the end
  yArray2.shift(); // Remove the first element
  var newValue = Math.floor(70 + Math.random() * 10); // Generate a new random value
  yArray2.push(newValue); // Add the new value at the end
  yArray3.shift(); // Remove the first element
  var newValue = Math.floor(50 + Math.random() * 10); // Generate a new random value
  yArray3.push(newValue); // Add the new value at the end
}
