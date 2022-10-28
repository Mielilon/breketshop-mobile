const сounters = document.querySelectorAll('.product-configuration__counter');
const actionButton = document.querySelector('.button-to-cart')

const fullKitButton = document.querySelector('#full-kit');
const topKitButton = document.querySelector('#top-kit');
const bottomKitButton = document.querySelector('#bottom-kit');

const topCountsWrapper = document.querySelector('#product-configuration-top');
const bottomCountsWrapper = document.querySelector('#product-configuration-bottom');

const controls = document.querySelectorAll('.product-configuration__control');

const сountersTop = topCountsWrapper.querySelectorAll('.product-configuration__counter');
const сountersBottom = bottomCountsWrapper.querySelectorAll('.product-configuration__counter');

сounters.forEach((counter)=>{
    let amount = counter.querySelector('.product-configuration__amount');
    let additionCheckbox = counter.querySelector('.product-configuration__addition');
    let moreCounterButton = counter.querySelector('.product-configuration__button--more');
    let lessCounterButton = counter.querySelector('.product-configuration__button--less');
    let counterInput = counter.querySelector('.product-configuration__input');
    
    if(amount.textContent == 0) {
        amount.style.opacity = 0;
    }
    const toggleCounting = function() {
        if (this.checked) {
            amount.style.opacity = 1;
            counterInput.value = 1;
            amount.textContent = counterInput.value;
            actionButton.classList.remove('action-button--disabled');
        } else {
            amount.style.opacity = 0;
            counterInput.value = 0;
            amount.textContent = counterInput.value;
            if(actionButton.classList.contains('action-button--in-cart')) return
            actionButton.classList.add('action-button--disabled');
        }
    }
    const increaseCount = function() {
        if(Number(amount.textContent) >= 99) return;
        additionCheckbox.checked = true;
        amount.style.opacity = 1;
        counterInput.value++;
        amount.textContent = counterInput.value;
        actionButton.classList.remove('action-button--disabled');
        if(counterInput.value != 1) {
            topKitButton.classList.remove('product-configuration__control--active')
            bottomKitButton.classList.remove('product-configuration__control--active')
            fullKitButton.classList.remove('product-configuration__control--active')
        }
        const counterArrTop = [];
        сountersTop.forEach((counter) => {
            const counterValue = counter.querySelector('.product-configuration__input');
            counterArrTop.push(counterValue.value);
        })
        if(counterArrTop.every((elem) => elem === '1')) {
            topKitButton.classList.add('product-configuration__control--active');
        }

        const counterArrBottom = [];
        сountersBottom.forEach((counter) => {
            const counterValue = counter.querySelector('.product-configuration__input');
            counterArrBottom.push(counterValue.value);
        })
        if(counterArrBottom.every((elem) => elem === '1')) {
            bottomKitButton.classList.add('product-configuration__control--active');
        }
        if((counterArrTop.every((elem) => elem === '1')) && (counterArrBottom.every((elem) => elem === '1'))) {
            topKitButton.classList.remove('product-configuration__control--active')
            bottomKitButton.classList.remove('product-configuration__control--active')
            fullKitButton.classList.add('product-configuration__control--active')
        }
        
    }
    const decreaseCount = function() {
        if(Number(amount.textContent) <= 1) {
            amount.style.opacity = 0;
            counterInput.value = amount.textContent = 0;
            additionCheckbox.checked = false;
            if(actionButton.classList.contains('action-button--in-cart')) return
            actionButton.classList.add('action-button--disabled');
            if(counterInput.value != 1) {
                topKitButton.classList.remove('product-configuration__control--active')
                bottomKitButton.classList.remove('product-configuration__control--active')
                fullKitButton.classList.remove('product-configuration__control--active')
            }
            const counterArrTop = [];
            сountersTop.forEach((counter) => {
                const counterValue = counter.querySelector('.product-configuration__input');
                counterArrTop.push(counterValue.value);
            })
            if(counterArrTop.every((elem) => elem === '1')) {
                topKitButton.classList.add('product-configuration__control--active');
            }

            const counterArrBottom = [];
            сountersBottom.forEach((counter) => {
                const counterValue = counter.querySelector('.product-configuration__input');
                counterArrBottom.push(counterValue.value);
            })
            if(counterArrBottom.every((elem) => elem === '1')) {
                bottomKitButton.classList.add('product-configuration__control--active');
            }
            if((counterArrTop.every((elem) => elem === '1')) && (counterArrBottom.every((elem) => elem === '1'))) {
                topKitButton.classList.remove('product-configuration__control--active')
                bottomKitButton.classList.remove('product-configuration__control--active')
                fullKitButton.classList.add('product-configuration__control--active')
            }
            return;
        }
        counterInput.value--;
        const counterArrTop = [];
        сountersTop.forEach((counter) => {
            const counterValue = counter.querySelector('.product-configuration__input');
            counterArrTop.push(counterValue.value);
        })
        if(counterArrTop.every((elem) => elem === '1')) {
            topKitButton.classList.add('product-configuration__control--active');
        }

        const counterArrBottom = [];
        сountersBottom.forEach((counter) => {
            const counterValue = counter.querySelector('.product-configuration__input');
            counterArrBottom.push(counterValue.value);
        })
        if(counterArrBottom.every((elem) => elem === '1')) {
            bottomKitButton.classList.add('product-configuration__control--active');
        }
        if((counterArrTop.every((elem) => elem === '1')) && (counterArrBottom.every((elem) => elem === '1'))) {
            topKitButton.classList.remove('product-configuration__control--active')
            bottomKitButton.classList.remove('product-configuration__control--active')
            fullKitButton.classList.add('product-configuration__control--active')
        }
        amount.textContent = counterInput.value;
        
    }

    additionCheckbox.addEventListener('change', toggleCounting);
    moreCounterButton.addEventListener('click', increaseCount);
    lessCounterButton.addEventListener('click', decreaseCount);
    
})



const toggleAllCounters = function() {
    topKitButton.classList.remove('product-configuration__control--active')
    bottomKitButton.classList.remove('product-configuration__control--active')
    this.classList.toggle('product-configuration__control--active')

    сounters.forEach((counter)=>{
        let amount = counter.querySelector('.product-configuration__amount');
        let additionCheckbox = counter.querySelector('.product-configuration__addition');
        let counterInput = counter.querySelector('.product-configuration__input');

        if (this.classList.contains("product-configuration__control--active")) {
            amount.style.opacity = 1;
            counterInput.value = 1;
            amount.textContent = counterInput.value;
            additionCheckbox.checked = true;
            actionButton.classList.remove('action-button--disabled');
            return;
        }
        amount.style.opacity = 0;
        counterInput.value = 0;
        amount.textContent = counterInput.value;
        additionCheckbox.checked = false;
        if(actionButton.classList.contains('action-button--in-cart')) return
        actionButton.classList.add('action-button--disabled');
    })
    
}

const toggleTopCounters = function() {

    fullKitButton.classList.remove('product-configuration__control--active')
    bottomKitButton.classList.remove('product-configuration__control--active')

    this.classList.toggle('product-configuration__control--active')

    сounters.forEach((counter)=> {
        let amount = counter.querySelector('.product-configuration__amount');
        let additionCheckbox = counter.querySelector('.product-configuration__addition');
        let counterInput = counter.querySelector('.product-configuration__input');

        amount.style.opacity = 0;
        counterInput.value = 0;
        amount.textContent = counterInput.value;
        additionCheckbox.checked = false;
        if(actionButton.classList.contains('action-button--in-cart')) return
        actionButton.classList.add('action-button--disabled');
    })
    сountersTop.forEach((counter)=>{
        let amount = counter.querySelector('.product-configuration__amount');
        let additionCheckbox = counter.querySelector('.product-configuration__addition');
        let counterInput = counter.querySelector('.product-configuration__input');

        if (this.classList.contains("product-configuration__control--active")) {
            amount.style.opacity = 1;
            counterInput.value = 1;
            amount.textContent = counterInput.value;
            additionCheckbox.checked = true;
            actionButton.classList.remove('action-button--disabled');
            return;
        }
        amount.style.opacity = 0;
        counterInput.value = 0;
        amount.textContent = counterInput.value;
        additionCheckbox.checked = false;
        if(actionButton.classList.contains('action-button--in-cart')) return
        actionButton.classList.add('action-button--disabled');
    })
}
const toggleBottomCounters = function() {

    fullKitButton.classList.remove('product-configuration__control--active')
    topKitButton.classList.remove('product-configuration__control--active')

    this.classList.toggle('product-configuration__control--active')
    сounters.forEach((counter)=> {
        let amount = counter.querySelector('.product-configuration__amount');
        let additionCheckbox = counter.querySelector('.product-configuration__addition');
        let counterInput = counter.querySelector('.product-configuration__input');
        
        amount.style.opacity = 0;
        counterInput.value = 0;
        amount.textContent = counterInput.value;
        additionCheckbox.checked = false;
        if(actionButton.classList.contains('action-button--in-cart')) return
        actionButton.classList.add('action-button--disabled');
    })
    сountersBottom.forEach((counter)=>{
        let amount = counter.querySelector('.product-configuration__amount');
        let additionCheckbox = counter.querySelector('.product-configuration__addition');
        let counterInput = counter.querySelector('.product-configuration__input');

        if (this.classList.contains("product-configuration__control--active")) {
            amount.style.opacity = 1;
            counterInput.value = 1;
            amount.textContent = counterInput.value;
            additionCheckbox.checked = true;
            actionButton.classList.remove('action-button--disabled');
            return;
        }
        amount.style.opacity = 0;
        counterInput.value = 0;
        amount.textContent = counterInput.value;
        additionCheckbox.checked = false;
        if(actionButton.classList.contains('action-button--in-cart')) return
        actionButton.classList.add('action-button--disabled');
    })
}
fullKitButton.addEventListener('click', toggleAllCounters);
topKitButton.addEventListener('click', toggleTopCounters);
bottomKitButton.addEventListener('click', toggleBottomCounters);
