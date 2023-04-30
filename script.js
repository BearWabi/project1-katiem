const dimScreen = document.querySelector('.dim');

// Sale Popup Image
const closeButton = document.querySelector('.closePopup');
const popupFlex = document.querySelector('.popupFlex')

closeButton.addEventListener('click', function(){
    popupFlex.style.display = 'none';
    dimScreen.classList.toggle('dimOFF');
    dimScreen.classList.toggle('dimON');
})


// Hamburger Menu
const hamburgerMenu = document.querySelector('.fa-bars');
const hamburgerNav = document.querySelectorAll('.noHamburger');
const hamburgerFlex = document.querySelector('ul');

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