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

displayDay(days, dayOfWeek);
displayDate(currentDate, months, currentMonth);
displayYear(currentYear);
addDays();

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

function addDays() {
    var calendarBody = '';
                    for(var i = 1; i <= 31; i += 1){
                        var addClass = '';
                        if( i === 12 ){ addClass = ' class="selected"'; }
                        
                        switch( i ){
                        case 8:
                        case 10:
                        case 27:
                            addClass = ' class="event"';
                        break;
                        }

                        calendarBody += '<li><a href="#" title="'+i+'" data-value="'+i+'"'+addClass+'>'+i+'</a></li>';
                    }
                    finalBody = document.getElementById("createBody");
                    finalBody.innerHTML = calendarBody;
}

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}
            