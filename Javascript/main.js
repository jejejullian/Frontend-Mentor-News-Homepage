const menuBtn = document.querySelector("#menuBtn");
const closeBtn = document.querySelector("#closeBtn");
const navbar = document.querySelector(".navbar");
const overlay = document.querySelector(".overlay");
const activeBtn = document.querySelector(".btn-readMore");
const wrapNewH3 = document.querySelectorAll(".wrap-new h3");
const listWrapH3 = document.querySelectorAll(".list-wrap h3");

wrapNewH3.forEach((h3) => {
  h3.addEventListener("click", () => {
    wrapNewH3.forEach((item) => item.classList.remove("active"));
    h3.classList.add("active");
  });
});

listWrapH3.forEach((h3) => {
  h3.addEventListener("click", () => {
    listWrapH3.forEach((item) => item.classList.remove("active"));
    h3.classList.add("active");
  });
});

activeBtn.addEventListener("click", () => {
  activeBtn.classList.toggle("active");
});

menuBtn.addEventListener("click", () => {
  navbar.classList.add("active");
  overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
});
