const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

function checkCred() {

    // Stored data from the signup-form
    var storedUser = localStorage.getItem('username');
    var storedPwd = localStorage.getItem('password');

    // Entered data from the login-form
    var username = document.getElementById('username');
    var password = document.getElementById('password');

    // check if stored data from register-form is equal to data from login form
    if(username.value == storedUser && password.value == storedPwd) {
        alert('You are loged in.');
    }else {
        alert('ERROR.');
    }
}