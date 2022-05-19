const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();

    // Entered data from the login form
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    // Stored data from the signup form
    var storedUser = localStorage.getItem(username + " username");
    var storedPwd = localStorage.getItem(username + " password");

    // Check if stored data from signuo form is equal to data from login form
    if(username.value == storedUser && password.value == storedPwd) {
        // Store current username
        localStorage.setItem("currentUser", username);

        // Create and store a map of flags
        var flagsArr = [false, false, false, false]
        const jsonArr = JSON.stringify(flagsArr);
        localStorage.setItem("flagsArr", jsonArr);

        alert("You have successfully logged in.");
        alert(username.value);
        location.assign("https://esther588.github.io/Code-Red/calendar/calendar.html");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})