displayUser();
displayFirst();
displayLast();
displayFull();

var firstName = localStorage.getItem(currentUser + ' firstname');
var lastName = localStorage.getItem(currentUser + ' firstname');

function displayUser() {
    var userID = document.getElementById("username");
    var currentUser = localStorage.getItem('currentUser');
    userID.innerHTML = currentUser;
}

function displayFirst() {
    var firstID = document.getElementById("first-name");
    firstID.innerHTML = firstName;
}

function displayLast() {
    var lastID = document.getElementById("last-name");
    lastID.innerHTML = lastName;
}

function displayFull() {
    var fullID = document.getElementById("full-name");
    fullID.innerHTML = firstName + lastName;
}

document.querySelector("input").onchange = function() {
    var url = URL.createObjectURL(this.files[0]);
    document.getElementById("profile-photo").style.background = "url(" + url + ") center center no-repeat";
}

function logOutMsg() {
    alert("You have successfully logged out.");
}