const hiddenButton = document.querySelector(".password-sent__button");
const passwordSentBlock = document.querySelector(".password-sent");

const toggleHidden = function() {
    passwordSentBlock.classList.toggle("hidden");
};

hiddenButton.addEventListener("click", toggleHidden);