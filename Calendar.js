////get current month and day, then display it as default when opened
function setCalendar() {
    const currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentDay = currentDate.getDay();
    let currentDayOfMonth = currentDate.getDate();
    let currentYear = currentDate.getFullYear();
    const dateDisplay = document.getElementById("displayDate");


    //in order to start the first of the month on the right day we have to get what day the first day lands on.
    //my idea for this is I will get the current month, and year, put the first in a format such as 2024-12-1
    //aka currentYear-currentMonth-1 and this paired with new Date(2024-12-1) will give me all that info

    //Months start from zero so adding new variable that will add one to month
    let month = 1 + currentMonth;
    let firstOfMonth = (currentYear + "-" + month + "-" + 1);//inputs first of the month
    let firstOfMonthInfo = new Date(firstOfMonth); // got new objects with first of the month
    firstOfMonthDay = firstOfMonthInfo.getDay(); //now i know where to start the month on a calendar
    LoadDayCells(firstOfMonthInfo);


    currentDay = TranslateDay(currentDay);
    currentMonth = TranslateMonth(currentMonth)

    dateDisplay.innerHTML = currentMonth + " " + currentDayOfMonth + " " + currentDay;
}


//turns month to day given month number
function TranslateMonth(MonthNum) {
    switch (MonthNum) {
        case 0:
            MonthNum = "January";
            break;
        case 1:
            MonthNum = "February";
            break;
        case 2:
            MonthNum = "March";
            break;
        case 3:
            MonthNum = "April";
            break;
        case 4:
            MonthNum = "May";
            break;
        case 5:
            MonthNum = "June";
            break;
        case 6:
            MonthNum = "July";
            break;
        case 7:
            MonthNum = "August";
            break;
        case 8:
            MonthNum = "September";
            break;
        case 9:
            MonthNum = "October";
            break;
        case 10:
            MonthNum = "November";
            break;
        case 11:
            MonthNum = "December";
            break;
    }
    return MonthNum;
}


//turns given number of day to day name
function TranslateDay(Day) {
    switch (Day) {
        case 0:
            Day = "Sunday";
            break;
        case 1:
            Day = "Monday";
            break;
        case 2:
            Day = "Tuesday";
            break;
        case 3:
            Day = "Wednesday";
            break;
        case 4:
            Day = "Thursday";
            break;
        case 5:
            Day = "Friday";
            break;
        case 6:
            Day = "Satuday";
            break;
    }
    return Day;
}


//takes first of the month and starts to add the rest of the cells for that month
//starting at the first of the month day
function LoadDayCells(date) {
    //first thing is first how many cells are needed do this by checking month and if leap year
    let Month = TranslateMonth(date.getMonth()); //gets month name
    let cellCount = 0;
    let days = 0; //got to keep track of days number to put them in each cell
    let index = 0;//to keep track of table iteration
    //let leapYear = CheckLeapYear(date.getFullYear());
    const calendar = document.getElementById("calendar");

    switch (Month) {
        case "January":
            cellCount = 28;
            // if (leapYear) {
            //     cellCount = 29;
            // } else {
            //     cellCount = 28;
            // }
            break;
        case "February":
            cellCount = 31;
            break;
        case "March":
            cellCount = 31;
            break;
        case "April":
            cellCount = 30;
            break;
        case "May":
            cellCount = 31;
            break;
        case "June":
            cellCount = 30;
            break;
        case "July":
            cellCount = 31;
            break;
        case "August":
            cellCount = 31;
            break;
        case "September":
            cellCount = 30;
            break;
        case "October":
            cellCount = 31;
            break;
        case "November":
            cellCount = 30;
            break;
        case "December":
            cellCount = 31;
            break;
    }//checks month and then sets cell count accordingly

    let HTML = ``;//have to enter the table header first need to do it all at once , once

    // hard code how each of the first weeks would look like, then create a while loop to finish the
    // rest of the calendar except for sunday right, because don't have to hard code that one
    // it starts at the beginning.
    switch(date.getDay()){
        case 0://day starts sunday
            index = 0;
            days = 0; //got to keep track of days number to put them in each cell

            while (Math.ceil(cellCount / 7) > index) {
                HTML = HTML + `
            <tr>
                    <td class="day-cell">${days + 1}</td>
                    <td class="day-cell">${days + 2}</td>
                    <td class="day-cell">${days + 3}</td>
                    <td class="day-cell">${days + 4}</td>
                    <td class="day-cell">${days + 5}</td>
                    <td class="day-cell">${days + 6}</td>
                    <td class="day-cell">${days + 7}</td>
            </tr>
            `
                index = index + 1;
                days = days + 7
            }
            calendar.innerHTML = `
        <table>
            <tr className="days">
                <td>Sunday</td>
                <td>Monday</td>
                <td>Tuesday</td>
                <td>Wednesday</td>
                <td>Thursday</td>
                <td>Friday</td>
                <td>Satuday</td>
            </tr>
        `
                + HTML + `</table>`;
            break;
        case 1://day starts Monday

            //hard code first week may look like and fix the rest.
            HTML = ` 
            <tr>
                    <td class="day-cell"></td>
                    <td class="day-cell">${days + 1}</td>
                    <td class="day-cell">${days + 2}</td>
                    <td class="day-cell">${days + 3}</td>
                    <td class="day-cell">${days + 4}</td>
                    <td class="day-cell">${days + 5}</td>
                    <td class="day-cell">${days + 6}</td>
            </tr>
            `
            days = 6; //days start at 6 because first row ends at 6

            while ((Math.ceil(cellCount / 7))-1 > index) {//change cell count fomual because first row is made
                HTML = HTML + `
            <tr>
                    <td class="day-cell">${days + 1}</td>
                    <td class="day-cell">${days + 2}</td>
                    <td class="day-cell">${days + 3}</td>
                    <td class="day-cell">${days + 4}</td>
                    <td class="day-cell">${days + 5}</td>
                    <td class="day-cell">${days + 6}</td>
                    <td class="day-cell">${days + 7}</td>
            </tr>
            `
                index = index + 1;
                days = days + 7
            }
            calendar.innerHTML = `
        <table>
            <tr className="days">
                <td>Sunday</td>
                <td>Monday</td>
                <td>Tuesday</td>
                <td>Wednesday</td>
                <td>Thursday</td>
                <td>Friday</td>
                <td>Satuday</td>
            </tr>
        `
                + HTML + `</table>`
            break;
        case 2://day starts Tuesday

            //hard code first week may look like and fix the rest.
            HTML = ` 
            <tr>
                    <td class="day-cell"></td>
                    <td class="day-cell"></td>
                    <td class="day-cell">${days + 1}</td>
                    <td class="day-cell">${days + 2}</td>
                    <td class="day-cell">${days + 3}</td>
                    <td class="day-cell">${days + 4}</td>
                    <td class="day-cell">${days + 5}</td>
            </tr>
            `
            days = 5; //days start at 5 because first row ends at 5

            while ((Math.ceil(cellCount / 7))-1 > index) {//change cell count fomual because first row is made
                HTML = HTML + `
            <tr>
                    <td class="day-cell">${days + 1}</td>
                    <td class="day-cell">${days + 2}</td>
                    <td class="day-cell">${days + 3}</td>
                    <td class="day-cell">${days + 4}</td>
                    <td class="day-cell">${days + 5}</td>
                    <td class="day-cell">${days + 6}</td>
                    <td class="day-cell">${days + 7}</td>
            </tr>
            `
                index = index + 1;
                days = days + 7
            }
            calendar.innerHTML = `
        <table>
            <tr className="days">
                <td>Sunday</td>
                <td>Monday</td>
                <td>Tuesday</td>
                <td>Wednesday</td>
                <td>Thursday</td>
                <td>Friday</td>
                <td>Satuday</td>
            </tr>
        `
                + HTML + `</table>`
            break;
        case 3://day starts Wednesday

            //hard code first week may look like and fix the rest.
            HTML = ` 
            <tr>
                    <td class="day-cell"></td>
                    <td class="day-cell"></td>
                    <td class="day-cell"></td>
                    <td class="day-cell">${days + 1}</td>
                    <td class="day-cell">${days + 2}</td>
                    <td class="day-cell">${days + 3}</td>
                    <td class="day-cell">${days + 4}</td>
            </tr>
            `
            days = 4; //days start at 4 because first row ends at 4

            while ((Math.ceil(cellCount / 7))-1 > index) {//change cell count fomual because first row is made
                HTML = HTML + `
            <tr>
                    <td class="day-cell">${days + 1}</td>
                    <td class="day-cell">${days + 2}</td>
                    <td class="day-cell">${days + 3}</td>
                    <td class="day-cell">${days + 4}</td>
                    <td class="day-cell">${days + 5}</td>
                    <td class="day-cell">${days + 6}</td>
                    <td class="day-cell">${days + 7}</td>
            </tr>
            `
                index = index + 1;
                days = days + 7
            }
            calendar.innerHTML = `
        <table>
            <tr className="days">
                <td>Sunday</td>
                <td>Monday</td>
                <td>Tuesday</td>
                <td>Wednesday</td>
                <td>Thursday</td>
                <td>Friday</td>
                <td>Satuday</td>
            </tr>
        `
                + HTML + `</table>`
            break;
        case 4://day starts Thrusday

            //hard code first week may look like and fix the rest.
            HTML = ` 
            <tr>
                    <td class="day-cell"></td>
                    <td class="day-cell"></td>
                    <td class="day-cell"></td>
                    <td class="day-cell"></td>
                    <td class="day-cell">${days + 1}</td>
                    <td class="day-cell">${days + 2}</td>
                    <td class="day-cell">${days + 3}</td>
            </tr>
            `
            days = 3; //days start at 3 because first row ends at 3

            while ((Math.ceil(cellCount / 7))-1 > index) {//change cell count fomual because first row is made
                HTML = HTML + `
            <tr>
                    <td class="day-cell">${days + 1}</td>
                    <td class="day-cell">${days + 2}</td>
                    <td class="day-cell">${days + 3}</td>
                    <td class="day-cell">${days + 4}</td>
                    <td class="day-cell">${days + 5}</td>
                    <td class="day-cell">${days + 6}</td>
                    <td class="day-cell">${days + 7}</td>
            </tr>
            `
                index = index + 1;
                days = days + 7
            }
            calendar.innerHTML = `
        <table>
            <tr className="days">
                <td>Sunday</td>
                <td>Monday</td>
                <td>Tuesday</td>
                <td>Wednesday</td>
                <td>Thursday</td>
                <td>Friday</td>
                <td>Satuday</td>
            </tr>
        `
                + HTML + `</table>`
            break;
        case 5://day starts Friday

            //hard code first week may look like and fix the rest.
            HTML = ` 
            <tr>
                    <td class="day-cell"></td>
                    <td class="day-cell"></td>
                    <td class="day-cell"></td>
                    <td class="day-cell"></td>
                    <td class="day-cell"></td>
                    <td class="day-cell">${days + 1}</td>
                    <td class="day-cell">${days + 2}</td>
            </tr>
            `
            days = 2; //days start at 2 because first row ends at 2

            while ((Math.ceil(cellCount / 7))-1 > index) {//change cell count fomual because first row is made
                HTML = HTML + `
            <tr>
                    <td class="day-cell">${days + 1}</td>
                    <td class="day-cell">${days + 2}</td>
                    <td class="day-cell">${days + 3}</td>
                    <td class="day-cell">${days + 4}</td>
                    <td class="day-cell">${days + 5}</td>
                    <td class="day-cell">${days + 6}</td>
                    <td class="day-cell">${days + 7}</td>
            </tr>
            `
                index = index + 1;
                days = days + 7
            }
            calendar.innerHTML = `
        <table>
            <tr className="days">
                <td>Sunday</td>
                <td>Monday</td>
                <td>Tuesday</td>
                <td>Wednesday</td>
                <td>Thursday</td>
                <td>Friday</td>
                <td>Satuday</td>
            </tr>
        `
                + HTML + `</table>`
            break;
        case 6://day starts Satuday

            //hard code first week may look like and fix the rest.
            HTML = ` 
            <tr>
                    <td class="day-cell"></td>
                    <td class="day-cell"></td>
                    <td class="day-cell"></td>
                    <td class="day-cell"></td>
                    <td class="day-cell"></td>
                    <td class="day-cell"></td>
                    <td class="day-cell">${days + 1}</td>
            </tr>
            `
            days = 1; //days start at 1 because first row ends at 1

            while ((Math.ceil(cellCount / 7))-1 > index) {//change cell count fomual because first row is made
                HTML = HTML + `
            <tr>
                    <td class="day-cell">${days + 1}</td>
                    <td class="day-cell">${days + 2}</td>
                    <td class="day-cell">${days + 3}</td>
                    <td class="day-cell">${days + 4}</td>
                    <td class="day-cell">${days + 5}</td>
                    <td class="day-cell">${days + 6}</td>
                    <td class="day-cell">${days + 7}</td>
            </tr>
            `
                index = index + 1;
                days = days + 7
            }
            calendar.innerHTML = `
        <table>
            <tr className="days">
                <td>Sunday</td>
                <td>Monday</td>
                <td>Tuesday</td>
                <td>Wednesday</td>
                <td>Thursday</td>
                <td>Friday</td>
                <td>Satuday</td>
            </tr>
        `
                + HTML + `</table>`
            break;
    }




}


setCalendar();