// NAVBAR MENU BUTTON
const navbarNav = document.querySelector(".navbar-nav");
const menuButton = document.querySelector(".menu");
const menuImg = document.querySelector(".menu-img");
const overlay = document.querySelector(".overlay");
const body = document.body;

function updateVisibility() {
  const visibility = navbarNav.getAttribute("data-visible");
  const newVisibility = visibility === "false" ? "true" : "false";

  navbarNav.setAttribute("data-visible", newVisibility);
  menuButton.setAttribute("aria-expanded", newVisibility);
  if (newVisibility === "false") {
    menuImg.src = "assets/svg/menu.svg";
  } else {
    menuImg.src = "assets/svg/close.svg";
  }
  overlay.setAttribute("data-visible", newVisibility);
}

menuButton.addEventListener("click", () => {
  updateVisibility();
});

overlay.addEventListener("click", () => {
  updateVisibility();
});

// ERNA - CAROUSEL SERVIVE
const carousel = document.querySelector(".carousel");
const services = document.querySelectorAll(".service");
const serviceCount = services.length;

let currentIndex = 0;
const intervalTime = 5000; // Change slide every 5 seconds

function nextService() {
  services[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % serviceCount;
  services[currentIndex].classList.add("active");
  updateCarousel();
}

function updateCarousel() {
  const translateXValue = -currentIndex * 100;
  carousel.style.transform = `translateX(${translateXValue}%)`;
}

setInterval(nextService, intervalTime);

// Accordion
const labels = document.querySelectorAll(".label");

labels.forEach(function (label) {
  label.addEventListener("click", function () {
    this.classList.toggle("active");
    const content = this.nextElementSibling;

    content.style.maxHeight =
      !content.style.maxHeight || content.style.maxHeight === "0px"
        ? content.scrollHeight + "px"
        : "0px";
  });
});
