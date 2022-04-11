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

    var fs = require('fs'); 
    var fileContent = " " + firstname + " " + lastname + " " + username + " " + password; 
    var filepath = username + ".txt"; 
    fs.writeFile(filepath, fileContent, (err) => { 
        if (err) throw err; 
    }); 
})