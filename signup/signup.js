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

function WriteToFile(passForm) {

    var firstName = document.getElementById('firstname');
    var lastName  = document.getElementById('lastname');
    var username = document.getElementById('username');
    var password  = document.getElementById('password');
 
    let fso = CreateObject("Scripting.FileSystemObject"); 
    let s = fso.CreateTextFile(username + ".txt", True);
 
    s.writeline(firstname);
    s.writeline(lastname);
    s.writeline(username);
    s.writeline(password);

    s.Close();
 }