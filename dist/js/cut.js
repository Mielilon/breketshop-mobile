const croppedTexts = document.querySelectorAll('.product__name');
const croppedProductText = document.querySelector('.crop');
const productButtonMore = document.querySelector('.product-desc-more');
const textLimit = 40;
const textProductLimit = 90;


function cut(text, limit) {
  if( text.innerText.length <= limit) return;
  text.innerText = `${text.innerText.slice(0, limit)}...`;
}
function more(elem, fullText, button) {
  elem.innerText = fullText;
  button.style.display = "none";
}

croppedTexts.forEach((croppedText) => {
  cut(croppedText, textLimit);
})

if(croppedProductText && productButtonMore) {
  const fullProductText = croppedProductText.innerText;
  cut(croppedProductText, textProductLimit)
  productButtonMore.addEventListener('click', () => more(croppedProductText, fullProductText, productButtonMore))
}