const moreProductsButton = document.querySelector(".more-button");
const moreCatalogLink = document.querySelector(".more-catalog");

moreProductsButton.addEventListener("click", function() {
    moreCatalogLink.classList.add("active");
    moreProductsButton.classList.remove("active");
});