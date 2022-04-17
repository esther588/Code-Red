// Get today's date
var currentDay = new Date();
var currentMonth = currentDay.getMonth();
var currentYear = currentDay.getFullYear();
var dayOfWeek = currentDay.getDay(); 

// Create array of months
months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Create array of days
days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function getDayOfWeek() {
    var strDay = days[dayOfWeek];
    return strDay;
}

document.getElementById("currentYear").innerHTML = getYear();

function getYear() {
    return currentYear;
}

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}
            