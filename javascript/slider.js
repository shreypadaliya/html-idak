const sliderItems = document.querySelectorAll(".slider-item");

const nextBtn = document.querySelector(".slider-controls button:last-child");

let currentIndex = 0;

function updateActiveItem() {
  sliderItems.forEach((item, index) => {
    item.classList.toggle("active", index === currentIndex);
  });
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % sliderItems.length;
  updateActiveItem();
});
