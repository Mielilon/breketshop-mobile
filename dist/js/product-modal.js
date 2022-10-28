const modalProduct = document.querySelector('.bg-wrapper');
const buttonOpenProductModal = document.querySelectorAll('.button-modal');
const buttonCloseProductModal = document.querySelector('.button-product-modal-close');

buttonOpenProductModal.forEach((buttonProductOpenModalItem) => {
  buttonProductOpenModalItem.addEventListener("click", () => {
    modalProduct.classList.remove('hidden');
  })
})

buttonCloseProductModal.addEventListener("click", () => {
  modalProduct.classList.add('hidden');
})