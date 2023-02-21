const hamburgerMenu = document.querySelector('.fa-bars');
const hamburgerNav = document.querySelectorAll('.noHamburger');
const hamburgerFlex = document.querySelector('ul');
const dimScreen = document.querySelector('.dimOFF');

hamburgerMenu.addEventListener('click',function(){
    hamburgerFlex.classList.toggle('menu');
    hamburgerFlex.classList.toggle('hamburgerFlex');

    for(let i = 0; i < hamburgerNav.length; i++){
        hamburgerNav[i].classList.toggle('noHamburger');
        hamburgerNav[i].classList.toggle('hamburger');
    }

    dimScreen.classList.toggle('dimOFF');
    dimScreen.classList.toggle('dimON');
})