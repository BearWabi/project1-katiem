// Sale Popup Image
const closeButton = document.querySelector('.closePopup');
const popupFlex = document.querySelector('.popupFlex')
const dimScreen = document.querySelector('.dim');

// display modal only on page landing
if (!localStorage.getItem("firstLoad")) {

    localStorage.getItem("firstLoad", true);
    popupFlex.style.display = "flex";
    dimScreen.classList = "dim dimON";
    
} else {
    popupFlex.style.display = "none";
    dimScreen.classList = "dim dimOFF";
}

if (document.cookie.indexOf("visitedBefore=true") == -1) {
    let now = new Date();
    let expiryDate = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
    document.cookie = "visitedBefore=true; expires=" + expiryDate.toUTCString();
    popupFlex.style.display = "flex";
    dimScreen.classList = "dim dimON";
} else {
    popupFlex.style.display = "none";
    dimScreen.classList = "dim dimOFF";
}

// 
closeButton.addEventListener('click', function(){
    popupFlex.style.display = 'none';
    dimScreen.classList.toggle('dimOFF');
    dimScreen.classList.toggle('dimON');
})