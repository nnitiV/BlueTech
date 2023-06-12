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

Plotly.newPlot("myGraph", data, layout);

setInterval(function () {
  updateArray();
  Plotly.update("myGraph", { y: [yArray] });
}, 500);

function updateArray() {
  yArray.shift(); // Remove the first element
  var newValue = Math.floor(Math.random() * 100); // Generate a new random value
  yArray.push(newValue); // Add the new value at the end
  console.log(yArray);
}
