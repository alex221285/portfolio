let burger = document.querySelector('.header__burger');
burger.addEventListener('click', showMenu);

function showMenu() {
    let menu = document.querySelector('.menu__list');
    menu.classList.toggle('active');
    burger.classList.toggle('active');
}