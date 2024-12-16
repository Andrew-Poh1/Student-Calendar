

function setCalendar(){ //get current month and day, then display it as default when opened
    const currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentDay = currentDate.getDay();
    let currentDayOfMonth = currentDate.getDate();
    const dateDisplay = document.getElementById("displayDate");


    // January
    // February
    // March
    // April
    // May
    // June
    // July
    // August
    // September
    // October
    // November
    // December

    // Sunday
    // Monday
    // Tuesday
    // Wednesday
    // Thursday
    // Friday
    // Satuday

    switch (currentDay){
        case 0:
            currentDay = "Sunday";
            break;
        case 1:
            currentDay = "Monday";
            break;
        case 2:
            currentDay = "Tuesday";
            break;
        case 3:
            currentDay = "Wednesday";
            break;
        case 4:
            currentDay = "Thursday";
            break;
        case 5:
            currentDay = "Friday";
            break;
        case 6:
            currentDay = "Satuday";
            break;
    }

    switch(currentMonth){
        case 0:
            currentMonth = "January";
            break;
        case 1:
        currentMonth = "February";
            break;
        case 2:
        currentMonth = "March";
            break;
        case 3:
        currentMonth = "April";
            break;
        case 4:
        currentMonth = "May";
            break;
        case 5:
        currentMonth = "June";
            break;
        case 6:
        currentMonth = "July";
            break;
        case 7:
        currentMonth = "August";
            break;
        case 8:
        currentMonth = "September";
            break;
        case 9:
        currentMonth = "October";
            break;
        case 10:
        currentMonth = "November";
            break;
        case 11:
        currentMonth = "December";
            break;
    }

    dateDisplay.innerHTML = currentMonth + " " + currentDayOfMonth + " " + currentDay;
}

setCalendar();