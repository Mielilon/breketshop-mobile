const quickOrder = document.querySelector('.quick-order-wrapper');
const quickOrderActionButton = document.querySelector('.quick-order-action-button');
const quickOrderClose = quickOrder.querySelector('.close');

const changeQuickOrderVisible = () => {
  quickOrder.classList.toggle('hidden');
}

quickOrderClose.addEventListener("click", changeQuickOrderVisible);
quickOrderActionButton.addEventListener("click", changeQuickOrderVisible);