const filePath = document.getElementById("file");
function changePhoto() {
    document.getElementById("profile-photo").style.background = "url(" + filePath + ")" + " center center no-repeat";
}