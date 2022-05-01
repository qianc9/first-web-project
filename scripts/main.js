// Image switcher

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === './images/firefox2.png') {
        myImage.setAttribute('src', './images/firefox-icon.png');
    } else {
        myImage.setAttribute('src', './images/firefox2.png');
    }
}

// Personalized welcome message

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name');
    if (!myName) {
        setUserName()
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName()
} else {
    letstoredName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}