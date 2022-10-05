const buttonDarkMode = document.querySelector('.container-button-dark-mode');   
const buttonSun = document.querySelector('.container-button-dark-mode__sun');
const buttonMoon = document.querySelector('.container-button-dark-mode__moon');
const backgroundBody = document.querySelector('body');
const buttonMain = document.querySelector('.container-info__buttons__primary');
const githubSun = document.querySelector('.github-icon');
const githubMoon = document.querySelector('.github-dark');
const menuHamburger = document.querySelector('.container-hamburger');
const menuMobile = document.querySelector('.container-menu');
const buttonClose = document.querySelector('.button-close'); 
const linkedinButton = document.querySelector('.container-button-web__linkedin');
const certificationButton = document.querySelector('.container-button-web__certificacion');
const curriculumButton = document.querySelector('.container-button-web__cv');


buttonDarkMode.addEventListener('click', toggleDarkMode);
menuHamburger.addEventListener('click', toggleMenuMobile);
buttonClose.addEventListener('click', toggleMenuMobile);
buttonMain.addEventListener('click', goToPage);
linkedinButton.addEventListener('click', goToPageLinkedin);
certificationButton.addEventListener('click', goToPageCv);
curriculumButton.addEventListener('click', goToPageCurriculum);

function toggleDarkMode() {
    buttonDarkMode.classList.toggle('container-second-color');
    buttonSun.classList.toggle('inactive');
    buttonMoon.classList.toggle('inactive');
    backgroundBody.classList.toggle('background-body'); 
    buttonMain.classList.toggle('button-dark-mode');
    githubSun.classList.toggle('inactive');
    githubMoon.classList.toggle('inactive');
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
function goToPageCv(){
    window.open ('https://www.linkedin.com/in/frontend-nicolas-garcia/details/certifications/');
}
function goToPageCurriculum(){
    window.open ('https://responsible-board-65b.notion.site/curriculum-b042d3d6e4fc4cffb9f2f0b506dea27f');
}