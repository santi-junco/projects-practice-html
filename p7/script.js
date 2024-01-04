const links = document.querySelector(".links")
const a = links.querySelectorAll("a");

a.forEach((element) => {
  element.addEventListener("click", () => {
    let elementActive = document.querySelector(".active");
    elementActive.classList.remove("active");
    element.classList.add("active");
  });
});

