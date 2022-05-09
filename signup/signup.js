const signupForm = document.getElementById("signup-form");
const signupButton = document.getElementById("signup-form-submit");
const signupBlankError = document.getElementById("signup-blank-error");
const signupPwdError = document.getElementById("signup-pwd-error");
const signupUserError = document.getElementById("signup-user-error");

var acneCounter = {
    January: 0,
    February: 0,
    March: 0,
    April: 0,
    May: 0,
    June: 0,
    July: 0,
    August: 0,
    September: 0,
    October: 0,
    November: 0,
    December: 0
};
localStorage.setObj('acneCounter', acneCounter);
var moodCounter = {
    January: 0,
    February: 0,
    March: 0,
    April: 0,
    May: 0,
    June: 0,
    July: 0,
    August: 0,
    September: 0,
    October: 0,
    November: 0,
    December: 0
};
localStorage.setObj('moodCounter', moodCounter);
var crampsCounter = {
    January: 0,
    February: 0,
    March: 0,
    April: 0,
    May: 0,
    June: 0,
    July: 0,
    August: 0,
    September: 0,
    October: 0,
    November: 0,
    December: 0
};
localStorage.setObj('crampsCounter', crampsCounter);
var fatigueCounter = {
    January: 0,
    February: 0,
    March: 0,
    April: 0,
    May: 0,
    June: 0,
    July: 0,
    August: 0,
    September: 0,
    October: 0,
    November: 0,
    December: 0
};
localStorage.setObj('fatigueCounter', fatigueCounter);

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