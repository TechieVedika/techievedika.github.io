// 1. Mobile menu
const menuBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// 2. Search and filter
const searchBox = document.getElementById("searchBox");
const filterBtns = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");
const noResults = document.getElementById("noResults");
let activeFilter = "all";

function updateCards() {
  const text = searchBox ? searchBox.value.toLowerCase() : "";
  let shown = 0;

  cards.forEach((card) => {
    const matchesText = card.textContent.toLowerCase().includes(text);
    const matchesFilter = activeFilter === "all" || card.dataset.category === activeFilter;
    const visible = matchesText && matchesFilter;
    card.style.display = visible ? "block" : "none";
    if (visible) shown++;
  });

  if (noResults) noResults.hidden = shown !== 0;
}

if (searchBox) {
  searchBox.addEventListener("input", updateCards);
}

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    updateCards();
  });
});