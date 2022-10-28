const button = document.querySelector('.about__more');
const hiddenText = document.querySelector('.about__text-content.hidden');

doVisible = () => {
  button.classList.add('hidden');
  hiddenText.classList.remove('hidden')
}

button.addEventListener('click', doVisible)


const controlButtons = document.querySelectorAll('.about__control-button')
const aboutSlides = document.querySelectorAll('.about__carousel')

const changeVisible = (e) => {
  controlButtons.forEach((controlButton) => controlButton.classList.remove('active'));
  aboutSlides.forEach((aboutSlide) => {
    aboutSlide.classList.remove('active');
    if(aboutSlide.dataset.aboutCarouselContent === e.target.dataset.aboutCarouselButton) {
      aboutSlide.classList.add('active');
    }
  });
  e.target.classList.add('active');
  

}

controlButtons.forEach((controlButton) => {
  controlButton.addEventListener('click', (e) => changeVisible(e))
})