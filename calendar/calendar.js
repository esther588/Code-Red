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
let noteHtml = document.getElementById("note");

displayDay(days, dayOfWeek);
displayDate(currentDate, fullMonths, currentMonth);
displayYear(currentYear);
createBody(currentDate, currentMonth, currentYear);
createMonths(abbrevMonths, currentMonth);

// Display the current day of the week
function displayDay(daysArr, day) {
    finalDay = document.getElementById("currentDay");
    finalDay.innerHTML = daysArr[day];
}

// Display the current month and date 
function displayDate(date, monthsArr, month) {
    fullDate = document.getElementById("currentDate");
    fullDate.innerHTML = monthsArr[month] + " " + date;
}

// Display the current year
function displayYear(year) {

    finalYear = document.getElementById("currentYear");
    finalYear.innerHTML = year;
}

// Find the total days of the month

function daysInMonth(month, year) {
    return 32 - new Date(year, month, 32).getDate();
}

// Display all the days of the month
function createBody(date, month, year) {
    html = '';
    var firstDay = new Date(year, month, 1);
    var dayOfWeek = firstDay.getDay();
    var totalDays = daysInMonth(month, year);
    for(var i = 1; i < dayOfWeek; i++) {
        html += '<li><a href="#" title="' + i + '" data-value="' + i + '"' + '' + '>' + '</a></li>';
    }
    for(var j = 1; j <= totalDays; j++){
        var addClass = '';
        if(j === date) { 
            addClass = ' class="selected"'; 
        }

        html += '<li><a href="#" title="' + j + '" data-value="' + j + '"' + addClass + '>' + j + '</a></li>';
    }
    daysHtml.innerHTML = html;
}

// Display all of the months
function createMonths(monthsArr, month) {
    html = '';
    for(var i = 0; i < 12; i++) {
        var addClass = '';
        monthName = monthsArr[i];
        if(i === month) { 
            addClass = ' class="selected"'; 
        }
        html += '<li><a href="#" title="' + monthName + '" data-value="' + i + '"' + addClass + '>' + monthName + '</a></li>';
    }
    monthsHtml.innerHTML = html;
}

showNotes();

function addNote() {
    let notesInput = document.getElementById("note-input");
    let notes = localStorage.getItem("notes");
  
    if (notes == null) {
        notesArr = [];
    } else {
        notesArr = JSON.parse(notes);
    }
  
    notesArr.push(notesInput.value);
    localStorage.setItem("notes", JSON.stringify(notesArr));
    notesInput.value = "";
    showNotes();
}

function showNotes() {
    let notes = localStorage.getItem("notes");
  
    if (notes == null) {
        notesArr = [];
    } else {
        notesArr = JSON.parse(notes);
    }
  
    let html = "";
  
    notesArr.forEach(function(element, index) {
        html += '<ul class="noteList"><li>' + element + '<a href="#" title="Remove note" class="removeNote animate" id="' + index + '" onclick="deleteNote(id)">x</a></li></ul>';
    });
  
    let notesElm = document.getElementById("note");
  
    if (notesArr.length != 0) {
        notesElm.innerHTML = html;
    }
}

function deleteNote(index) {
    let notes = localStorage.getItem("notes");
  
    if (notes == null) {
        notesArr = [];
    } else {
        notesArr = JSON.parse(notes);
    }
    
    notesArr.splice(index, 1);
  
    localStorage.setItem("notes", JSON.stringify(notesArr));
  
    showNotes();
}

function checkSubmit() {
    const strFlags = localStorage.getItem("flagsArr");
    var flagsArr = JSON.parse(strFlags);

    var acneFlag = flagsArr[0];
    var moodFlag = flagsArr[1];
    var crampsFlag = flagsArr[2];
    var fatigueFlag = flagsArr[3];
    if(acneFlag == true && moodFlag == true && crampsFlag == true && fatigueFlag == true) {
        location.assign("https://esther588.github.io/Code-Red/dashboard/dashboard.html");
    }
}