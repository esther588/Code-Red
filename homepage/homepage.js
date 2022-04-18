// Create a date object and get the date, month, year and day of the week
var today = new Date();
var currentDate = today.getDate();
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();
var dayOfWeek = today.getDay();

// Create array of months with their full names
fullMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Create array of months with their abbreviated names
abbrevMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Create array of days
days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let daysHtml = document.getElementById("calendarBody");
let monthsHtml = document.getElementById("calendarMonths");

displayDay(days, dayOfWeek);
displayDate(currentDate, fullMonths, currentMonth);
displayYear(currentYear);
//createBody(dayOfWeek, currentDate, currentMonth, currentYear);
createMonths(abbrevMonths, currentMonth);

function displayDay(daysArr, day) {
    finalDay = document.getElementById("currentDay");
    finalDay.innerHTML = daysArr[day];
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
    return 32 - new Date(year, month, 32).getDate();
}

function createBody(day, date, month, year) {
    html = '';
    totalDays = daysInMonth(month, year);
    for(var j = 1; j <= totalDays; j++){
        var addClass = '';
        if(j === date) { 
            addClass = ' class="selected"'; 
        }
        
        switch(j) {
            case 8:
            case 10:
            case 27:
                addClass = ' class="event"';
            break;
        }

        html += '<li><a href="#" title="' + j + '" data-value="' + j + '"' + addClass + '>' + j + '</a></li>';
    }
    daysHtml.innerHTML = html;
}

function createMonths(monthsArr, month) {
    html = '';
    for(var i = 0; i < 12; i++) {
        var addClass = '';
        monthName = monthsArr[i];
        if(i + 1 === month) { 
            addClass = ' class="selected"'; 
        }
        html += '<li><a href="#" title="' + monthName + '" data-value="' + i + 1 + '"' + addClass + '>' + monthName + '</a></li>';
    }
    monthsHtml.innerHTML = html;
}