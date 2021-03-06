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
    if(username.localeCompare(storedUser) == 0 && password.localeCompare(storedPwd) == 0) {
        // Store current username
        localStorage.setItem("currentUser", username);

        // Create and store a map of flags
        var flagsArr = [false, false, false, false]
        const jsonArr = JSON.stringify(flagsArr);
        localStorage.setItem("flagsArr", jsonArr);

        // Uncheck all boxes on checklist from dashboard
        localStorage.setItem("item-1", "unchecked");
        localStorage.setItem("item-2", "unchecked");
        localStorage.setItem("item-3", "unchecked");

        alert("You have successfully logged in.");
        location.assign("https://esther588.github.io/Code-Red/calendar/calendar.html");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})