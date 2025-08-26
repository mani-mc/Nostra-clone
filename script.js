// Banner
document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("banner");
  const closeBtn = document.getElementById("closeban");

  closeBtn.addEventListener("click", function () {
    banner.style.display =("none");
  });
});

// Drop Down 
const toggleBtn = document.getElementById("togglebtn");
const dropdownMenu = document.getElementById("dropdown-menu");
const navCloseBar = document.getElementById("navclosebar");

// Open menu
toggleBtn.addEventListener("click", () => {
  dropdownMenu.classList.remove("-translate-x-full", "hidden");
  dropdownMenu.classList.add("translate-x-0");
});

// Close menu
navCloseBar.addEventListener("click", () => {
  dropdownMenu.classList.add("-translate-x-full");
  setTimeout(() => dropdownMenu.classList.add("hidden"), 300); 
});


// Silde Image 
currentSlideID = 1;

sliderElement = document.getElementById('slider');
totalSlides = sliderElement.childElementCount;

function next() {
  if (currentSlideID < totalSlides) {
    currentSlideID++;
    showSlide()
  }

}

function prev() {
  if (currentSlideID > 1) {
    currentSlideID--;
    showSlide()
  }

}

function showSlide() {
  slides = document.getElementById('slider').getElementsByTagName('li')
  for (let index = 0; index < totalSlides; index++) {
    const element = slides[index];
    if (currentSlideID === index + 1) {
      element.classList.remove('hidden')
    }
    else {
      element.classList.add('hidden')
    }
  }

}

// Wishlist
    document.addEventListener("DOMContentLoaded", () => {
      const likeBtns = document.querySelectorAll(".likeBtn");

      likeBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          btn.classList.toggle("text-red-500"); 
          btn.classList.toggle("scale-110");     
        });
      });
    });


