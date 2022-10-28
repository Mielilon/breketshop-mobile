const modalContent = document.querySelector(".modal-content");
const modalFilters = document.querySelector(".modal-filters");
const modalOptions = document.querySelector(".modal-options");
const body = document.querySelector("body");

const buttonOpenFilters = document.querySelector(".category__filter");
const buttonArrLinkAll = document.querySelectorAll(".filter__arr-link");
const buttonFilterLinkAll = document.querySelectorAll("a.filter__link");
const buttonFilterPre = document.querySelector(".filter-options__prev");
const buttonApply = document.querySelector(".filters__button--close");
const buttonToFilters = document.querySelector(".to-filters");
const buttonCloseModal = document.querySelectorAll(".close-modal");

buttonOpenFilters.addEventListener("click", () => {
  modalContent.classList.add("active");
  body.classList.add('overflow-hidden');
})

buttonFilterPre.addEventListener("click", () => {
  modalFilters.classList.remove("hidden");
  modalOptions.classList.add("hidden");
})
buttonApply.addEventListener("click", () => {
  modalContent.classList.remove("active");
  body.classList.remove('overflow-hidden');
})
buttonToFilters.addEventListener("click", () => {
  modalFilters.classList.remove("hidden");
  modalOptions.classList.add("hidden");
})


buttonCloseModal.forEach((buttonCloseModalItem) => {
  buttonCloseModalItem.addEventListener("click", () => {
    modalContent.classList.remove("active");
    body.classList.remove('overflow-hidden');
  })
})
buttonArrLinkAll.forEach((buttonArrLink) => {
  buttonArrLink.addEventListener("click", () => {
    modalFilters.classList.add("hidden");
    modalOptions.classList.remove("hidden");
  })
})
buttonFilterLinkAll.forEach((buttonFilterLink) => {
  buttonFilterLink.addEventListener("click", () => {
    modalFilters.classList.add("hidden");
    modalOptions.classList.remove("hidden");
  })
})
