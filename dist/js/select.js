const selectWrappers = document.querySelectorAll('.select-wrapper');

selectWrappers.forEach((selectWrapper) => {
    const selectedItem = selectWrapper.querySelector('.selected');
    const selectItemsWrapper = selectWrapper.querySelector('.select');
    const selectItems = selectWrapper.querySelectorAll('.select-item');

    const toggleSelect = function(e) {
        selectItemsWrapper.classList.toggle('select--active');
        selectedItem.classList.toggle('selected--active');
    }
    
    const changeSelected = function() {
        selectedItem.innerText = this.innerText;
        selectItemsWrapper.classList.remove('select--active');
        selectedItem.classList.remove('selected--active');
    }
    
    selectedItem.addEventListener('click', toggleSelect);
    
    selectItems.forEach((selectItem)=>{
        selectItem.addEventListener('click', changeSelected);
    })
})

const closeSelect = (e) => { 
    selectWrappers.forEach((selectWrapper) => {
        const selectedItem = selectWrapper.querySelector('.selected');
        const selectItemsWrapper = selectWrapper.querySelector('.select');
        if(e.target != selectedItem) {
            selectItemsWrapper.classList.remove('select--active');
            selectedItem.classList.remove('selected--active');
        }
    })
}
document.addEventListener('click', closeSelect)
