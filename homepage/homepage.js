function getFirstName() {
    // Obtain stored name via localStorage
    var storedFirst = localStorage.getItem(username + ' firstname');
    return storedFirst.value;
}

document.getElementById("ret").innerHTML = getFirstName();