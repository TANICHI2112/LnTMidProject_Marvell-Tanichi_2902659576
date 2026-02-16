const text = "Welcome to Portfolio Marvell Tanichi";
let index = 0;
const speed = 100;
const typing = document.getElementById("typing");

typing.textContent = "";

function typeEffect() {
  if (index < text.length) {
    typing.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

typeEffect();

const faders = document.querySelectorAll(".fade-section");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.8;

  faders.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("show");
    }
  });
});
