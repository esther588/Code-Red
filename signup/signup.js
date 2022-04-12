const signupForm = document.getElementById("signup-form");
const signupButton = document.getElementById("signup-form-submit");
const signupBlankError = document.getElementById("signup-blank-error");
const signupPwdError = document.getElementById("signup-pwd-error");
const signupUserError = document.getElementById("signup-user-error");

signupButton.addEventListener("click", (e) => {
    e.preventDefault();

    // Entered data from the signup form
    const firstname = signupForm.firstname.value;
    const lastname = signupForm.lastname.value;
    const username = signupForm.username.value;
    const password = signupForm.password.value;

    // Check if data is empty or doesn't meet the password requirements
    if (firstname == "" && lastname == "" && username === "" && password === "") {
        signupBlankError.style.opacity = 1;
    } else if (password.length < 8) {
        signupPwdError.style.opacity = 1;
    } else {
        var storedUser = localStorage.getItem(username + ' username');
        if(username.value == storedUser) {
            signupUserError.style.opacity = 1;
        } else {
            // Store the data via localStorage
            localStorage.setItem(username + ' firstname', firstname);
            localStorage.setItem(username + ' lastname', lastname);
            localStorage.setItem(username + ' username', username);
            localStorage.setItem(username + ' password', password);
            alert("You have successfully signed up!");
        }
    }
})