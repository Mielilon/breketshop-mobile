const allCheckbox = document.querySelector('#all-products');
const checkboxes = document.querySelectorAll('.product-checkbox');
const cartButton = document.querySelector('.cart-bar__button');
const cartBigButtom = document.querySelector('.cart__order')

const toggleAll = () => {
  checkboxes.forEach((checkbox) => {
    if(!(allCheckbox.checked)) {
      checkbox.checked = false;
      cartButton.classList.add('action-button--disabled');
      cartBigButtom.classList.add('action-button--disabled');
      return;
    }
    checkbox.checked = true;
    cartButton.classList.remove('action-button--disabled')
    cartBigButtom.classList.remove('action-button--disabled')
  })
}

const toggleChecked = (e) => {
  const checkbox = e.target;

  if([...checkboxes].every(checkbox => checkbox.checked)) {
    allCheckbox.checked = true;
  }
  if([...checkboxes].some(checkbox => checkbox.checked)) {
    cartButton.classList.remove('action-button--disabled');
    cartBigButtom.classList.remove('action-button--disabled');
  } else {
    cartButton.classList.add('action-button--disabled');
    cartBigButtom.classList.add('action-button--disabled');
  }
  if(!(checkbox.checked)) {
    allCheckbox.checked = false;
    return
  }
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', toggleChecked);
})

allCheckbox.addEventListener('change', toggleAll);