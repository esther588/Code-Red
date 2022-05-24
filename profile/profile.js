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
    var url = URL.createObjectURL(this.files[0]);
    document.getElementById("profile-photo").style.background = "url(" + url + ") center center no-repeat";
    var currentUser = localStorage.getItem('currentUser');
    localStorage.setItem(currentUser + " url", url);
}

function getPhoto() {
    var currentUser = localStorage.getItem('currentUser');
    var savedPhoto = localStorage.getItem(currentUser + " url");
    if(savedPhoto != null) {
        document.getElementById("profile-photo").style.background = "url(" + savedPhoto + ") center center no-repeat";
    } else {
        document.getElementById("profile-photo").style.background = "url(default_user.jpeg) center center no-repeat";
    }
}

function logOutMsg() {
    alert("You have successfully logged out.");
}