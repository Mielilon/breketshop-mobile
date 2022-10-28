const cartButton = document.querySelector('.button-to-cart')
const changeButton = () => {
  const buttonDesc = document.createElement("span");
  if(cartButton.classList.contains('action-button--in-cart')) {
    cartButton.href = "/cart.html"
  }
  if(!(cartButton.classList.contains('action-button--disabled'))) {
    cartButton.textContent = "В корзине";
    buttonDesc.textContent = "Перейти";
    cartButton.append(buttonDesc);
    cartButton.classList.add('action-button--in-cart');
    return
  }
}

cartButton.addEventListener('click', changeButton)