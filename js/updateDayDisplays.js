const dayDisplays = document.querySelectorAll('.dayDisplay');
const nextButton = document.getElementById('nextButton');
const backButton = document.getElementById('backButton');



setDateDisplay(1, 20, 2000);

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
                dateReference = yearArray[searchYears(0, yearsStored -1, year-1)].monthArray[11][30].date;
            }
            else { //else locate the last day of previous month and display
                let newDate = foundYear.monthArray[month -2].length - 1;
                dateReference = foundYear.monthArray[month -2][newDate].date;
            }

        }
        else if (foundYear.monthArray[month -1][date + dayLocator] == undefined) { //if next day is in different month

            if (month == 12) { //if new year, create a new year and show first day of that year
                fixMissingYear(year+1);
                dateReference =  yearArray[searchYears(0, yearsStored -1, year+1)].monthArray[0][0].date;
            }
            else {
                dateReference = foundYear.monthArray[month][0].date;
            }

        }
        else {
            dateReference = foundYear.monthArray[month -1][date + dayLocator].date; //else leave the month the same and project next day 
        }

        dayDisplays[i].children[0].innerHTML = dateReference;
        ++dayLocator;
    }
}


nextButton.addEventListener("click", () => {


    
    setDateDisplay();







});


