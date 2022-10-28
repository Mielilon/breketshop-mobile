const buttonContainers = document.querySelectorAll('.add-to-cart');

buttonContainers.forEach((buttonContainer) => {
  const button = buttonContainer.querySelector('.product__button');
  const counter = buttonContainer.querySelector('.counter');
  const counerInput = counter.querySelector('.counter__num');
  const counterDec = counter.querySelector('.counter__dec');
  const counterInc = counter.querySelector('.counter__inc');

  const toggleVisibility = (e) => {
    button.classList.add('hidden');
    counter.classList.add('active');
    e.stopPropagation()
  }
  const changeCount = (e) => {
    if(e.target === counterInc) {
      if(+counerInput.value === 99) return
      counerInput.value++;
    }
    if(e.target === counterDec) {
      if(+counerInput.value === 1) {
        button.classList.remove('hidden');
        counter.classList.remove('active');
        return;
      }
      counerInput.value--;
    }
  }

  button.addEventListener('click', toggleVisibility)
  counter.addEventListener('click', changeCount)
})