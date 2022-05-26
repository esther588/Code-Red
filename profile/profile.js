displayUser();
displayFirst();
displayLast();
displayFull();
displayYear();

function displayUser() {
    var userID = document.getElementById("username");
    var currentUser = localStorage.getItem('currentUser');
    userID.innerHTML = currentUser;
}

function displayFirst() {
    var firstID = document.getElementById("first-name");
    var currentUser = localStorage.getItem('currentUser');
    var firstName = localStorage.getItem(currentUser + ' firstname');
    firstID.innerHTML = firstName;
}

function displayLast() {
    var lastID = document.getElementById("last-name");
    var currentUser = localStorage.getItem('currentUser');
    var lastName = localStorage.getItem(currentUser + ' lastname');
    lastID.innerHTML = lastName;
}

function displayFull() {
    var fullID = document.getElementById("full-name");
    var currentUser = localStorage.getItem('currentUser');
    var firstName = localStorage.getItem(currentUser + ' firstname');
    var lastName = localStorage.getItem(currentUser + ' lastname');
    fullID.innerHTML = firstName + " " + lastName;
}

function displayYear() {
    var yearID = document.getElementById("year");
    var currentUser = localStorage.getItem('currentUser');
    var year = localStorage.getItem(currentUser + ' year');
    yearID.innerHTML = year;
}

document.querySelector("input").onchange = function() {
    var file = this.files[0];
    var url = URL.createObjectURL(this.files[0]);
    document.getElementById("profile-photo").style.background = "url(" + url + ") center center no-repeat";
    var currentUser = localStorage.getItem('currentUser');
    localStorage.setItem(currentUser + " file-name", file.name);
}

function logOutMsg() {
    alert("You have successfully logged out.");
}