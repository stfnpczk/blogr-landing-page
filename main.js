const hamburger = document.getElementById("hamburger");

const details = document.querySelectorAll("details");
details.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});

const toggleNavigation = () => {
  if (hamburger.classList.contains("header__hamburger-active")) {
    hamburger.classList.remove("header__hamburger-active");
  } else {
    hamburger.classList.add("header__hamburger-active");
  }
};

hamburger.addEventListener("click", toggleNavigation);
