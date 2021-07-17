let links = document.querySelectorAll(".types__link");
let cards = document.querySelectorAll(".description__item");

const clearCurrent = () => {
  cards.forEach(card => {
    if (card.classList.contains("description__item--current"))
    card.classList.remove("description__item--current");
  });
}

const addCurrent = (param) => {
  cards.forEach(card => {
    if (card.dataset.description === param) {
    card.classList.add("description__item--current");
  };
});
}

// links.forEach(link => {
//   link.addEventListener("click", () => {
//     clearCurrent();
//     addCurrent(link.dataset.description);
//   });
// });


links.forEach(link => {
  link.addEventListener("mouseover", () => {
    clearCurrent();
    addCurrent(link.dataset.description);
  });
});

links.forEach(link => {
  link.addEventListener("mouseout", () => {
    clearCurrent();
  });
});
