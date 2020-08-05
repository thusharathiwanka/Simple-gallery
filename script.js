const fullSize = document.querySelector(".full-size");
const previews = document.querySelectorAll(".container img");
const fullImg = document.querySelector(".full-img");

previews.forEach((preview) => {
  preview.addEventListener("click", () => {
    fullSize.classList.add("open");
    fullImg.classList.add("open");

    const fullSrc = preview.getAttribute("data-original");
    fullImg.src = `./img/${fullSrc}`;
  });
});

fullSize.addEventListener("click", (event) => {
  if (event.target.classList.contains("full-size")) {
    fullSize.classList.remove("open");
    fullImg.classList.remove("open");
  }
});
