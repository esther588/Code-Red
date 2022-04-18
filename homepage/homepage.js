// Create a date object and get the date, month, year and day of the week
var today = new Date();
var currentDate = today.getDate();
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();
var dayOfWeek = today.getDay();

// Create array of months
months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novemver", "December"];

// Create array of days
days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let daysHtml = document.getElementById("calendarBody");

displayDay(days, dayOfWeek);
displayDate(currentDate, months, currentMonth);
displayYear(currentYear);
showCalendar(dayOfWeek, currentDate, currentMonth, currentYear);

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

function showCalendar(day, date, month, year) {
    html = '';
    totalDays = daysInMonth(month, year);
    for(var i = 1; i <= 7; i++) {
        if(i == day) {
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
            break;
        } else {
            html += '<li><a href="#" title="' + ' ' + '" data-value="'+ ' ' +'"' + addClass + '>' + ' ' + '</a></li>';
        }
    }
}