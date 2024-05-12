let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

//  configuracion de la lista

let countItem = items.length;
let itemActive = 0;


// aumentando la lista
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
// al presionar clic en el siguiente
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// hacer que el slider sea automatico
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider(){
    // quitando el item viejo 
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // activdando el item nuevo 
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // que se reinici el contador de slider para que aparezca de nuevo 
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

// al presionar clic en cualquiera de las imagenes pequeñas 
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})