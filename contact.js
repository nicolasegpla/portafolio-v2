const buttonDarkMode = document.querySelector('.container-button-dark-mode');   
const buttonSun = document.querySelector('.container-button-dark-mode__sun');
const buttonMoon = document.querySelector('.container-button-dark-mode__moon');
const backgroundBody = document.querySelector('body');
const menuHamburger = document.querySelector('.container-hamburger');
const menuMobile = document.querySelector('.container-menu');
const buttonClose = document.querySelector('.button-close'); 
const buttonred1 = document.querySelector('.container-redes__red1');
const buttonred2 = document.querySelector('.container-redes__red2');
const buttonred3 = document.querySelector('.container-redes__red3');
const buttonred4 = document.querySelector('.container-redes__red4');
const titleForm = document.querySelector('.container-form__title');
const butonForm = document.querySelector('.container-form__form__button');


buttonDarkMode.addEventListener('click', toggleDarkMode);
menuHamburger.addEventListener('click', toggleMenuMobile);
buttonClose.addEventListener('click', toggleMenuMobile);
buttonred1.addEventListener('click', goToPage);
buttonred2.addEventListener('click', goToPageLinkedin);
buttonred3.addEventListener('click', goToPageWatsapp);
buttonred4.addEventListener('click', goToPageCurriculum);

function toggleDarkMode() {
    buttonDarkMode.classList.toggle('container-second-color');
    buttonSun.classList.toggle('inactive');
    buttonMoon.classList.toggle('inactive');
    backgroundBody.classList.toggle('background-body');
    titleForm.classList.toggle('contact-dark');
    butonForm.classList.toggle('button-dark-form')
      
}
function toggleMenuMobile() {
    menuMobile.classList.toggle('inactive');
}
function goToPage(){
    window.open ('https://github.com/nicolasegpla');
}
function goToPageLinkedin(){
    window.open ('https://www.linkedin.com/in/frontend-nicolas-garcia/');
}
function goToPageWatsapp(){
    window.open ('https://wa.link/1tjx5a');
}
function goToPageCurriculum(){
    window.open ('https://responsible-board-65b.notion.site/curriculum-b042d3d6e4fc4cffb9f2f0b506dea27f');
}