const carousel = document.getElementsByClassName("carouselData");
const allCarousels = document.querySelectorAll(".carouselData");
const proximo = document.getElementById("próximo");
const anterior = document.getElementById("anterior");
var active = 0;
var lastEl = allCarousels.length - 1;
// for (const car of allCarousels) {
//   car.style.background = "red";
// }
function nextElement() {
  allCarousels[active].classList.remove("activeCar");
  allCarousels[active].classList.add("inactiveCar");
  active++;
  if (active == allCarousels.length) {
    allCarousels[0].classList.remove("inactiveCar");
    allCarousels[0].classList.add("activeCar");
    active = 0;
    return;
  }
  allCarousels[active].classList.remove("inactiveCar");
  allCarousels[active].classList.add("activeCar");
}
function previousElement() {
  allCarousels[active].classList.remove("activeCar");
  allCarousels[active].classList.add("inactiveCar");
  active--;
  if (active < 0) {
    allCarousels[lastEl].classList.remove("inactiveCar");
    allCarousels[lastEl].classList.add("activeCar");
    active = lastEl;
    return;
  }
  allCarousels[active].classList.remove("inactiveCar");
  allCarousels[active].classList.add("activeCar");
}

proximo.addEventListener("click", nextElement);
anterior.addEventListener("click", previousElement);
