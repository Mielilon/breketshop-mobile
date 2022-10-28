const productsContainers = document.querySelectorAll('.products-more');

productsContainers.forEach((productsContainer) => {
  const moreButton = productsContainer.querySelector('.product__more');
  const moreCardsButton = productsContainer.querySelector('.more-cards');
  const content = productsContainer.querySelector('.content');
  let counter = 1;

  const showProducts = function(e) {
    if(counter === 2) {
      moreButton.textContent = 'Каталог'
      moreButton.href = '/catalog.html'
    };
    if(counter > 2) {
      return;
    };
    e.preventDefault();
    const template = document.querySelector('.template-products');
    const product = template.content.cloneNode(true);
    content.insertBefore(product, moreButton);
    counter += 1;
  }
  const showCards = function(e) {
    if(counter === 2) {
      moreCardsButton.textContent = 'Показать все'
      moreCardsButton.href = '/catalog.html'
    };
    if(counter > 2) {
      return;
    };
    e.preventDefault();
    const template = document.querySelector('.template-cards');
    const product = template.content.cloneNode(true);
    moreCardsButton.classList.add('mt-20')
    content.insertBefore(product, moreCardsButton);
    counter += 1;
  }

  moreButton?.addEventListener("click", showProducts);
  moreCardsButton?.addEventListener("click", showCards);
});