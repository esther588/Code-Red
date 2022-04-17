// Create a date object and get the date, month, year and day of the week
var today = new Date();
var currentDate = today.getDate();
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();
var dayOfWeek = today.getDay();

// Create array of months
months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Create array of days
days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

displayDay(days, dayOfWeek);
displayDate(currentDate, months, currentMonth);

function displayDay(daysArr, dayOfWeek) {
    finalDay = document.getElementById("currentDay");
    finalDay.innerHTML = daysArr[dayOfWeek];
}

function displayDate(date, monthsArr, month) {
    fullDate = document.getElementById("currentDate");
    fullDate.innerHTML = monthsArr[month] + " " + date;
}

function displayYear(year) {
    finalYear = document.getElementById("currentYear");
    finalYear.innerHTML = year;
}

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}
            