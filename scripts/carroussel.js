var slideData = [
  { image: "Caixa 1", caption: "Slide 1" },
  { image: "Caixa 2", caption: "Slide 2" },
  { image: "Caixa 3", caption: "Slide 3" },
];

var currentIndex = 0;
var slidesContainer = document.querySelector(".slides");
var prevButton = document.querySelector(".prev-button");
var nextButton = document.querySelector(".next-button");
var firstEl = 0;
function populateCarousel() {
  slidesContainer.innerHTML = "";

  for (var i = 0; i < slideData.length; i++) {
    var slide = slideData[i];

    var slideElement = document.createElement("div");
    slideElement.classList.add("slide");

    var titleElement = document.createElement("div");
    titleElement.id = "carouselTitle";

    var pElement = document.createElement("p");
    pElement.classList.add("text");
    pElement.textContent = "Caixa D'Água ";
    titleElement.appendChild(pElement);

    var pElement1 = document.createElement("p");
    pElement1.classList.add("change");
    pElement1.id = "change" + (i + 1);
    titleElement.appendChild(pElement1);
    slideElement.appendChild(titleElement);

    var graphElement = document.createElement("div");
    graphElement.id = "myGrap" + (i + 1);
    graphElement.classList.add("myGrap");
    graphElement.setAttribute("data-caixa", i + 1);
    slideElement.appendChild(graphElement);

    slidesContainer.appendChild(slideElement);
  }
}

function showSlide(index) {
  var slides = slidesContainer.querySelectorAll(".slide");

  slides.forEach(function (slide, i) {
    slide.style.display = i === index ? "block" : "none";
  });
}

function goToPreviousSlide() {
  currentIndex = (currentIndex - 1 + slideData.length) % slideData.length;
  showSlide(currentIndex);
}

function goToNextSlide() {
  currentIndex = (currentIndex + 1) % slideData.length;
  showSlide(currentIndex);
}

prevButton.addEventListener("click", goToPreviousSlide);
nextButton.addEventListener("click", goToNextSlide);

populateCarousel();
showSlide(currentIndex);
