const dayDisplays = document.querySelectorAll('.dayDisplay');
const nextButton = document.getElementById('nextButton');
const backButton = document.getElementById('backButton');

const buttons = [nextButton, backButton];


//setDateDisplay updates the date headers on each day item in the DOM
function setDateDisplay(month, date, year) {

    fixMissingYear(year); 

    let foundYear = yearArray[searchYears(0, yearsStored -1, year)], //intializes the year to be dealt with
        dayLocator = -2; //used to show the day before the date, the day of, and the next date. Incremented by one each loop

    for (let i = 0; i < 3; ++i) { //loop runs through editing day items on page left to right

        var dateReference; 

        if (Math.sign(date + dayLocator) == -1) { //if the previous day is a negative date

            if (month == 1) { //if the previous date is in a new year
                fixMissingYear(year-1);
                dateReference = yearArray[searchYears(0, yearsStored -1, year-1)].monthArray[11][30];
            }
            else { //else locate the last day of previous month and display
                let newDate = foundYear.monthArray[month -2].length - 1;
                dateReference = foundYear.monthArray[month -2][newDate];
            }

        }
        else if (foundYear.monthArray[month -1][date + dayLocator] == undefined) { //if next day is in different month

            if (month == 12) { //if new year, create a new year and show first day of that year
                fixMissingYear(year+1);
                dateReference =  yearArray[searchYears(0, yearsStored -1, year+1)].monthArray[0][0];
            }
            else {
                dateReference = foundYear.monthArray[month][0];
            }

        }
        else {
            dateReference = foundYear.monthArray[month -1][date + dayLocator]; //else leave the month the same and project next day 
        }


        dayDisplays[i].children[0].innerHTML = dateReference.date;
        dayDisplays[i].children[1].innerHTML = "";
        displayTask(dateReference, i);
        ++dayLocator;
    }
}




buttons.forEach(element => {
    element.addEventListener("click", (event) => {

        if (event.target == nextButton)
            ++currentDay.day; //add to days date if next button
        else
            --currentDay.day; //subtract to days date if back button
    
        if (checkValidDate(currentDay.month, currentDay.day, currentDay.year) == false) {
            if (Math.sign(currentDay.day) == 1) { //if day is positive (ex. 1/32/21)
                ++currentDay.month; //next month
                if (currentDay.month == 13) { //if month is in next year
                    currentDay.year = currentDay.year +1;
                    fixMissingYear(currentDay.year); //create the new year
                    currentDay.month = 1; //reset the date
                    currentDay.day = 1;
                    setDateDisplay(currentDay.month, currentDay.day, currentDay.year);
                }
                else { //else just push date back to one with the new month already in place from previous code
                    currentDay.day = 1; 
                    setDateDisplay(currentDay.month, 1, currentDay.year);
                }
            }
            else { //if day is negative (back button was pressed to invalid date)
                --currentDay.month; //set month back one
                    if (currentDay.month == 0) { //if month is in previous year
                        currentDay.year = currentDay.year -1;
                        fixMissingYear(currentDay.year); //create or fix new year
                        currentDay.month = 12;
                        currentDay.day = 31; //set date to last day of that year
                        setDateDisplay(currentDay.month, currentDay.day, currentDay.year);
                    }
                    else { //if month is just the one before
                        let index = searchYears(0, yearsStored -1, currentDay.year);
                        projectedDate = yearArray[index].monthArray[currentDay.month -1]; //find the new month 
                        currentDay.day = projectedDate.length; //then find the amount of day for accurate day (fixes leap years, month ending in 30, and 31)
                        setDateDisplay(currentDay.month, currentDay.day, currentDay.year);
                    }
            }      
        }
        else {
            setDateDisplay(currentDay.month, currentDay.day, currentDay.year);
        }
    });
});



function checkValidDate(month, day, year) {

    var validDate = false;

    let projectedDate = undefined; //variable used to store suggested date in the calendar object for validation

    fixMissingYear(year); //may not need this

    //finds projected date in calendar object
    let index = searchYears(0, yearsStored -1, year);
    projectedDate = yearArray[index].monthArray[month -1];

    if (projectedDate != undefined) {
        if (projectedDate[day -1] != undefined)
            validDate = true;
    }

    return validDate;

}


