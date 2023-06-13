var caixaBtn1 = document.getElementById("button1");
var caixaBtn2 = document.getElementById("button2");
var caixaBtn3 = document.getElementById("button3");
var caixaBtn4 = document.getElementById("button4");
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

function getNumBox() {
  var caixas = document.querySelectorAll(".myGrap");
  var change = document.getElementsByClassName("change");
  var change1 = document.getElementsByClassName("change1");
  for(var i = 0; i < caixas.length; i++){
    numCaixa = caixas[i].getAttribute('data-caixa');
    var element = change[i];
    element.textContent = numCaixa;
  }
}
getNumBox();
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

caixaBtn1.addEventListener("click", () => {
  popupCaixa.style.display = "block";
});
caixaBtn2.addEventListener("click", () => {
  popupCaixa.style.display = "block";
});
caixaBtn3.addEventListener("click", () => {
  popupCaixa.style.display = "block";
});
// caixaBtn4.addEventListener("click", () => {
//   popupCaixa.style.display = "block";
// });

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

// close.addEventListener("click", () => {
//   console.log("Popup undisplayed");
//   popupCaixa.style.display = "none";
// });

var yArray = [1, 2, 3, 4, 5]; // Initial array

var data = [
  {
    type: "indicator",
    mode: "number+delta",
    value: 110,
    delta: { reference: 100, valueformat: ".0f" },
    domain: { y: [0, 1], x: [0.25, 0.75] },
  },
  {
    y: yArray,
  },
];

var layout = {
  title: "Chart Title",
  // Add any other layout options as needed
};

Plotly.newPlot("myGrap1", data, layout);
Plotly.newPlot("myGrap2", data, layout);
Plotly.newPlot("myGrap3", data, layout);

setInterval(function () {
  updateArray();
  Plotly.update("myGrap1", { y: [yArray] });
  Plotly.update("myGrap2", { y: [yArray] });
  Plotly.update("myGrap3", { y: [yArray] });
}, 5000);

function updateArray() {
  yArray.shift(); // Remove the first element
  var newValue = Math.floor(Math.random() * 100); // Generate a new random value
  yArray.push(newValue); // Add the new value at the end
  console.log(yArray);
}

// setInterval(function () {
//   updateArray();
//   Plotly.update("myGrap", { y: [yArray] });
//   Plotly.react("myGrap", data);
// }, 5000);

// var smallest = Math.min(...data[1].y);
