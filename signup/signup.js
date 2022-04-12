const signupForm = document.getElementById("signup-form");
const signupButton = document.getElementById("signup-form-submit");
const signupBlankError = document.getElementById("signup-blank-error");
const signupPwdError = document.getElementById("signup-pwd-error");

signupButton.addEventListener("click", (e) => {
    e.preventDefault();
    const firstname = signupForm.firstname.value;
    const lastname = signupForm.lastname.value;
    const username = signupForm.username.value;
    const password = signupForm.password.value;

    if (firstname == "" && lastname == "" && username === "" && password === "") {
        signupBlankError.style.opacity = 1;
    } else if (password.length < 8) {
        signupPwdError.style.opacity = 1;
    } else {
        alert("You have successfully signed up!");
    }
})

var firstname = document.getElementById('firstname');
var lastname = document.getElementById('lastname');
var username = document.getElementById('username');
var password = document.getElementById('password');

// Storing input from signup-form
function store() {
    localStorage.setItem('firstname', firstname.value);
    localStorage.setItem('lastname', lastname.value);
    localStorage.setItem('username', username.value);
    localStorage.setItem('password', password.value);
}