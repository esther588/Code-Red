document.querySelector("input").onchange = function() {
    var url = URL.createObjectURL(this.files[0]);
    document.getElementById("profile-photo").style.background = "url(" + url + ") center center no-repeat";
}

function logOutMsg() {
    alert("You have successfully logged out.");
}