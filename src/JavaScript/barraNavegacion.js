let menuToggle = document.querySelector('.menu-toggle');
let menuToggleIcon = document.querySelector('.menu-toggle i');
let menu = document.getElementsByClassName('.menu');

menu-toggle.addEventListener('click', e =>{
    menu.clasList.toggle('show');

    if(menu.clasList('show')){
        menuToggleIcon.setAttribute('class', 'fa fa-times')
    } else {
        menuToggleIcon.setAttribute('class', 'fa fa-bars')
    }
})