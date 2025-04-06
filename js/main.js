const left = document.querySelector('.button-left i');
const slider = document.querySelector('.content-slider');
const right = document.querySelector('.button-right i');

let currentPage = 0;
let totalPage = slider.children.length;

const changePage = (currentPage) => {
    slider.style.marginLeft = `-${ currentPage * 100 }%`
}

left.addEventListener('click', (e) => {
    if(currentPage  !== 0){
        currentPage = currentPage - 1
        changePage(currentPage);
    }
});

right.addEventListener('click', (e) => {
    if(currentPage !== 2){
        currentPage = currentPage + 1
        changePage(currentPage);
    }
});