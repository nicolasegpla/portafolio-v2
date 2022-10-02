const buttonDarkMode = document.querySelector('.container-button-dark-mode');
const buttonSun = document.querySelector('.container-button-dark-mode__sun');
const buttonMoon = document.querySelector('.container-button-dark-mode__moon');
const backgroundBody = document.querySelector('body');
const buttonMain = document.querySelector('.container-info__buttons__primary');
const githubSun = document.querySelector('.github-icon');
const githubMoon = document.querySelector('.github-dark');
const profession = document.querySelector('.container-info__text__profession');
const linkMain = document.querySelector('.container-info__buttons__link');
const arrowDark = document.querySelector('.arrow-dark');
const arrowDark2 = document.querySelector('.arrow-dark2');
const menuHamburger = document.querySelector('.container-hamburger');
const menuMobile = document.querySelector('.container-menu');
const buttonClose = document.querySelector('.button-close'); 

buttonClose.addEventListener('click', toggleMenuMobile);
buttonDarkMode.addEventListener('click', toggleDarkMode);
buttonMain.addEventListener('click', goToPage);
menuHamburger.addEventListener('click', toggleMenuMobile);

function toggleDarkMode() {
    buttonDarkMode.classList.toggle('container-second-color');
    buttonSun.classList.toggle('inactive');
    buttonMoon.classList.toggle('inactive');
    backgroundBody.classList.toggle('background-body');
    buttonMain.classList.toggle('button-dark-mode');
    githubSun.classList.toggle('inactive');
    githubMoon.classList.toggle('inactive');
    profession.classList.toggle('text-color-dark');
    linkMain.classList.toggle('text-color-dark');
    arrowDark.classList.toggle('inactive');
    arrowDark2.classList.toggle('inactive');
}

function goToPage(){
    window.open ('https://github.com/nicolasegpla');
}

function toggleMenuMobile() {
    menuMobile.classList.toggle('inactive');
}