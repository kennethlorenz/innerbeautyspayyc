// Scroll function
const body = document.body;
let lastScroll = 0;

const bookButton = document.querySelector(".book");

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  console.log(currentScroll);

  if (currentScroll <= 0) {
    body.classList.remove("scroll-up");
  }

  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
  }

  if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-down");
    body.classList.add("scroll-up");
  }

  lastScroll = currentScroll;
});

document.querySelector(".currentYear").textContent = new Date().getFullYear();

function displayWindowSize() {
  let width = window.innerWidth;
  let height = window.innerHeight;
  if (width <= 1075) {
    bookButton.style.display = "unset";
  } else if (width > 1000) {
    bookButton.style.display = "none";
  }
  console.log(`${width} + ${height}`);
}

// nav
const menu = document.querySelector(".menuIcon");
const close = document.querySelector(".close");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
  nav.classList.add("open-nav");
});

close.addEventListener("click", () => {
  nav.classList.remove("open-nav");
});

window.onload = () => {
  displayWindowSize();
};
window.onresize = () => {
  displayWindowSize();
};
