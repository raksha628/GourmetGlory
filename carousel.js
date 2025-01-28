// JavaScript for Carousel Functionality
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".carousel img");
  const captions = [
    "abcd"
  ];

  let currentIndex = 0;

  const prevButton = document.querySelector("#prev");
  const nextButton = document.querySelector("#next");
  const captionElement = document.querySelector(".carousel-caption");

  // Function to update the carousel
  function updateCarousel(index) {
    images.forEach((img, i) => {
      img.classList.remove("active");
      if (i === index) {
        img.classList.add("active");
      }
    });
    captionElement.textContent = captions[index];
  }

  // Event listeners for navigation buttons
  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateCarousel(currentIndex);
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateCarousel(currentIndex);
  });

  // Initialize the carousel
  updateCarousel(currentIndex);
});
