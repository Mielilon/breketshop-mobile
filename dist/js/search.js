const searchInput = document.querySelector(".search-field");
const searchResult = document.querySelector(".search-result");

searchInput.addEventListener("focus", function() {
  searchResult.classList.add("active");
});
searchInput.addEventListener("blur", function() {
  searchResult.classList.remove("active");
});