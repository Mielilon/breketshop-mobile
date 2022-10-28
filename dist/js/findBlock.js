const options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: 1.0
}

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
      const hiddenEl = document.querySelector('.cart-bar');
      if(entry.isIntersecting) {
        hiddenEl.style.display = "none";
        return;
      }
      if(entry.target.getBoundingClientRect().y > hiddenEl.getBoundingClientRect().y) {
        hiddenEl.style.display = "block";
      }
  });
});

const el = document.querySelector('.cart__order');

observer.observe(el);