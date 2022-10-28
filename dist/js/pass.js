const passWrapper = document.querySelector('.password');
const changePassButton = document.querySelector('.change-visible-button');
const passInput = document.querySelector('.text-field-pass');

changePassButton.addEventListener('click', () => {
  passWrapper.classList.toggle('open');
  if(passInput.type === 'password') {
    passInput.type = 'text';
  } else {
    passInput.type = 'password';
  }
})