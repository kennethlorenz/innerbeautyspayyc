// Scroll function
const body = document.body;

let lastScroll = 0;

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
