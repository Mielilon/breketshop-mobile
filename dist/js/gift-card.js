const gifts = document.querySelectorAll('.gift');
const giftCard = document.querySelector('.gift-card');
const giftCardClose = document.querySelector('.gift__close')

const toggleGiftActive = function() {
    gifts.forEach((gift) => {
        gift.classList.remove('gift--active')
    })
    this.classList.toggle('gift--active')
    giftCard.classList.add('gift-card--active')
}
const hiddenGiftCard = function() {
    giftCard.classList.remove('gift-card--active')
    gifts.forEach((gift) => {
        gift.classList.remove('gift--active')
    })
}

gifts.forEach((gift) => {
    gift.addEventListener('click', toggleGiftActive);
})

giftCardClose.addEventListener('click', hiddenGiftCard);
