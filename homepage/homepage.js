// Get today's date
currentDay = new Date();
currentMonth = currentDay.getMonth();
currentYear = currentDay.getFullYear();

// Create array of months
months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

calendarDays(currentMonth, currentYear);

function calendarDays(month, year) {
    tbl = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";
    for( var i = 1; i <= 31; i += 1 ){
        var addClass = '';
        if( i === 12 ){ addClass = ' class="selected"'; }
        
        switch( i ){
          case 8:
          case 10:
          case 27:
            addClass = ' class="event"';
          break;
        }

        document.write( '<li><a href="#" title="'+i+'" data-value="'+_i+'"'+addClass+'>'+i+'</a></li>' );
      }

}

function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
}
            