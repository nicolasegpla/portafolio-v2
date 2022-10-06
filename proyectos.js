const buttonDarkMode = document.querySelector('.container-button-dark-mode');   
const buttonSun = document.querySelector('.container-button-dark-mode__sun');
const buttonMoon = document.querySelector('.container-button-dark-mode__moon');
const backgroundBody = document.querySelector('body');
const menuHamburger = document.querySelector('.container-hamburger');
const menuMobile = document.querySelector('.container-menu');
const buttonClose = document.querySelector('.button-close');

buttonDarkMode.addEventListener('click', toggleDarkMode);
menuHamburger.addEventListener('click', toggleMenuMobile);
buttonClose.addEventListener('click', toggleMenuMobile);


function toggleDarkMode() {
    buttonDarkMode.classList.toggle('container-second-color');
    buttonSun.classList.toggle('inactive');
    buttonMoon.classList.toggle('inactive');
    backgroundBody.classList.toggle('background-body');      
}
function toggleMenuMobile() {
    menuMobile.classList.toggle('inactive');
}