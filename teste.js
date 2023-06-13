var slideData = [
  { image: 'slide1.jpg', caption: 'Slide 1' },
  { image: 'slide2.jpg', caption: 'Slide 2' },
  { image: 'slide3.jpg', caption: 'Slide 3' },
];

function createSlide(slide) {
  var slideElement = document.createElement('div');
  slideElement.classList.add('slide');

  var imageElement = document.createElement('img');
  imageElement.src = slide.image;
  slideElement.appendChild(imageElement);

  var captionElement = document.createElement('div');
  captionElement.textContent = slide.caption;
  slideElement.appendChild(captionElement);

  return slideElement;
}

function populateCarousel() {
  var slidesContainer = document.querySelector('.slides');
  slidesContainer.innerHTML = '';

  for (var i = 0; i < slideData.length; i++) {
    var slide = slideData[i];
    var slideElement = createSlide(slide);
    slidesContainer.appendChild(slideElement);
  }
}

populateCarousel();