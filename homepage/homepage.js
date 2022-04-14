function getFirstName() {
    // Obtain stored name via localStorage
    var storedFirst = localStorage.getItem(username + ' firstname');
    return storedFirst.value;
}

ddocument.write(compare(getFirstName()));