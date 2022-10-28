const sorting = document.querySelector('.sorting-wrapper');
const sortingItems = sorting.querySelectorAll('.sorting-item');

const toggleSortingActive = function() {
    this.classList.toggle('active');
}

const changeSorting = function() {
    sortingItems.forEach((sortingItem) => {
        sortingItem.classList.remove('active')
    })
    this.classList.add('active')
}
sorting.addEventListener('click', toggleSortingActive);

sortingItems.forEach((sortingItem)=>{
    sortingItem.addEventListener('click', changeSorting);
})