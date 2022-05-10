const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

// Save arrays to localStorage

var acneCounter = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
const jsonArr1 = JSON.stringify(acneCounter);
localStorage.setItem("acneCounter", jsonArr1);
var moodCounter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const jsonArr2 = JSON.stringify(moodCounter);
localStorage.setItem("moodCounter", jsonArr2);
var crampsCounter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const jsonArr3 = JSON.stringify(crampsCounter);
localStorage.setItem("crampsCounter", jsonArr3);
var fatigueCounter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const jsonArr4 = JSON.stringify(fatigueCounter);
localStorage.setItem("fatigueCounter", jsonArr4);

loginButton.addEventListener("click", (e) => {
    e.preventDefault();

    // Entered data from the login form
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    // Stored data from the signup form
    var storedUser = localStorage.getItem(username + ' username');
    var storedPwd = localStorage.getItem(username + ' password');

    // Check if stored data from signuo form is equal to data from login form
    if(username.value == storedUser && password.value == storedPwd) {
        alert("You have successfully logged in.");
        location.assign("https://esther588.github.io/Code-Red/calendar/calendar.html");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})