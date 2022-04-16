// Get today's date
currentDay = new Date();
currentMonth = currentDay.getMonth();
currentYear = currentDay.getFullYear();
dayOfWeek = currentDay.getDay(); 

// Create array of months
months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Create array of days
days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function getDayOfWeek() {
    return days[dayOfWeek];
}

function getYear() {
    return currentYear;
}

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}
            