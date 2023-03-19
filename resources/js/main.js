// Facts Counter

$('.facts-count').counterUp({
    delay: 10,
    time: 1500
});

// ACCORDION 

const accHeaders = document.querySelectorAll('.accordion-item-header');
const accConents = document.querySelectorAll('.accordion-item-body');

accHeaders.forEach((accHeader) => {
    accHeader.addEventListener('click', (e) => {
        accConents.forEach((accContent) => {
            if (
                e.target.nextElementSibling !== accContent &&
                accContent.classList.contains('active')
            ) {
                accContent.classList.remove('active');
                accHeaders.forEach((accHeader) => accHeader.classList.remove('active'));
            }
        });

        const panel = accHeader.nextElementSibling;
        panel.classList.toggle('active');
        accHeader.classList.toggle('active');
    });
});

// TESTIMONIAL SLIDER

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slideItem = document.querySelector('.t-slide-row');
const slideWidth = 1100;
let slideIndex = 0;

function showSlide(index) {
    slideItem.style.transform = "translateX(-" + (index * slideWidth) + "px)";
  }

  function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = 2;
    }
    showSlide(slideIndex);
  }

  function nextSlide() {
    slideIndex++;
    if (slideIndex > 2) {
      slideIndex = 0;
    }
    showSlide(slideIndex);
  }

  prevButton.addEventListener("click", prevSlide);
  nextButton.addEventListener("click", nextSlide);
  
  setInterval(() => {
    nextSlide();
  }, 5000);
  showSlide(slideIndex);

// STORY ABOUT US OVERLAY

const aboutImageOverlay = document.querySelectorAll('.team-info');

aboutImageOverlay.forEach((over) => {
  over.addEventListener('mouseover', function() {
    over.previousElementSibling.style.marginTop = '-5px';
    over.previousElementSibling.style.marginLeft = '-5px';
    over.style.marginTop = '-5px';
    over.style.marginLeft = '-5px';
    over.style.opacity = '1';
  });

  over.addEventListener('mouseout', function() {
    over.previousElementSibling.style.margin = '0';
    over.style.margin = '0';
    over.style.opacity = '0';
  })
})


// TEAM OVERLAY 

const teamImageOverlay = document.querySelectorAll('.overlay');

teamImageOverlay.forEach((over) => {
  over.addEventListener('mouseover', function() {
    over.previousElementSibling.style.marginTop = '-5px';
    over.previousElementSibling.style.marginLeft = '-5px';
    over.style.marginTop = '-5px';
    over.style.marginLeft = '-5px';
    over.style.opacity = '1';
  });

  over.addEventListener('mouseout', function() {
    over.previousElementSibling.style.margin = '0';
    over.style.margin = '0';
    over.style.opacity = '0';
  })
})

// P Slider

const pSlidePrevBtn = document.querySelector('.prev-btn');
const pSlideNextBtn = document.querySelector('.next-btn');
const pSlideItem = document.querySelector('.p-slider-row');
let pSlideIndex = 0;

function showPSlide(index) {
  pSlideItem.style.transform = "translateX(-" + (index * slideWidth) + "px)";
}

function pSlidePrev() {
  pSlideIndex--;
    if (pSlideIndex < 0) {
      pSlideIndex = 2;
    }
    showPSlide(pSlideIndex);
}

function pSlideNext() {
  pSlideIndex++;
    if (pSlideIndex > 2) {
      pSlideIndex = 0;
    }
    showPSlide(pSlideIndex);
}

setInterval(() => {
  pSlideNext();
}, 5000);
showPSlide(pSlideIndex);

pSlidePrevBtn.addEventListener('click', pSlidePrev);
pSlideNextBtn.addEventListener('click', pSlideNext);

// SHOW GOOGLE MAP

const showMapBtn = document.querySelector('.map-comp');
const mapItemElement = document.querySelector('.map-modal');
const backdropItemElement = document.querySelector('.backdrop');

function showMap() {
  mapItemElement.style.display = 'block';
}

function hideMap() {
  mapItemElement.style.display = 'none';
}

showMapBtn.addEventListener('click', showMap);
backdropItemElement.addEventListener('click', hideMap);