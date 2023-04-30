// Hamburger Menu
const hamburgerMenu = document.querySelector('.fa-bars');
const aboutLink = document.querySelector('#aboutLink');

// toggle menu
hamburgerMenu.addEventListener('click',function(){
    const dimScreen = document.querySelector('.dim');
    const hamburgerNav = document.querySelectorAll('.noHamburger');
    const hamburgerFlex = document.querySelector('ul');

    hamburgerFlex.classList.toggle('menu');
    hamburgerFlex.classList.toggle('hamburgerFlex');

    for(let i = 0; i < hamburgerNav.length; i++){
        hamburgerNav[i].classList.toggle('noHamburger');
        hamburgerNav[i].classList.toggle('hamburger');
    }

    dimScreen.classList.toggle('dimOFF');
    dimScreen.classList.toggle('dimON');
})

// hide menu when clicked on "about"
aboutLink.addEventListener('click', function(){
    const dimScreen = document.querySelector('.dim');
    const hamburgerNav = document.querySelectorAll('.noHamburger');
    const hamburgerFlex = document.querySelector('ul');

    hamburgerFlex.classList.remove('hamburgerFlex');
    hamburgerFlex.classList.add('menu');

    for(let i = 0; i < hamburgerNav.length; i++){
        hamburgerNav[i].classList.remove('hamburger');
        hamburgerNav[i].classList.add('noHamburger');
    }

    dimScreen.classList.remove('dimON');
    dimScreen.classList.add('dimOFF');
})