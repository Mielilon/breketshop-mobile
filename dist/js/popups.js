
const favoritePopup = document.querySelector('.popup-wrapper--favorites');
const favoriteButtons = document.querySelectorAll('.favorites');

if(favoriteButtons && favoritePopup) {
  const addFavorite = (favoriteButton) => {
    if(favoriteButton.classList.contains('favorites--added')) {
      favoritePopup.classList.add('active');
      return;
    }
  }
  
  const favoriteActionButtons = favoritePopup.querySelectorAll('.button');
  favoriteActionButtons.forEach((favoriteActionButton) => {
    favoriteActionButton.addEventListener('click', () => {
      favoritePopup.classList.remove('active');
    })
  })
  
  favoriteButtons.forEach((favoriteButton) => {
    favoriteButton.addEventListener('click', () => addFavorite(favoriteButton))
  })  
}

const popupCloseButtons = document.querySelectorAll('.popup__close');

const closePopup = (e) => {
  e.target.parentElement.parentElement.classList.remove('active')
}

popupCloseButtons.forEach((popupCloseButton) => {
  popupCloseButton.addEventListener('click', (e) => closePopup(e))
})

const popupWrappers = document.querySelectorAll('.popup-wrapper');

popupWrappers.forEach((popupWrapper) => {
  const closeButton = popupWrapper.querySelector('.close-popup-button');
  if(closeButton) {
    closeButton.addEventListener('click', () => {
      popupWrapper.classList.remove('active')
    })
  }
})

const popupButtons = document.querySelectorAll('.popup-button');

popupButtons.forEach((popupButton) => {
  popupButton.addEventListener('click', () => {
    popupWrappers.forEach((popupWrapper) => {
      if(popupWrapper.dataset.popup === popupButton.dataset.popupButton) {
        popupWrapper.classList.add('active')
      }
    })
  })
})