var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ant-1.jpg') {
        myImage.setAttribute('src', 'images/ant-2.jpg');
    } else {
        myImage.setAttribute('src', 'images/ant-1.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUsername() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Ant ' + myName;
}

if(!localStorage.getItem('name')) {
    setUsername();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Ant ' + storedName;
}

myButton.onclick = function() {
    setUsername();
}