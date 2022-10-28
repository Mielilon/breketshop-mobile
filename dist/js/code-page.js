const numberEntry = document.querySelector(".number-entry");
const number = document.querySelector(".registration__num");
const codeEntry = document.querySelector(".code-entry");
const toggleHiddenButton = document.querySelector(".registration__tel-button");

const toggleHidden = function() {
    numberEntry.classList.toggle("hidden");
    codeEntry.classList.toggle("hidden");
};

toggleHiddenButton.addEventListener("click", toggleHidden);