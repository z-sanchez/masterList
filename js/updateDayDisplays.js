const dayDisplays = document.querySelectorAll('.dayDisplay');
const nextButton = document.getElementById('nextButton');
const backButton = document.getElementById('backButton');

var currentDay = {
    month: 12,
    day: 25,
    year: 2021
};

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

    ++currentDay.day;

    let projectedDate = undefined;

    fixMissingYear(currentDay.year);

    let index = searchYears(0, yearsStored -1, currentDay.year);
    projectedDate = yearArray[index].monthArray[currentDay.month -1];

    validDatePromise(projectedDate)
    .then((outputDate) => {
        console.log("valid month: " + currentDay.month);
        return validDatePromise(outputDate[currentDay.day -1]);
    }).then((outputDate) => {
        console.log("valid date: " + currentDay.day);
        setDateDisplay(currentDay.month, currentDay.day, currentDay.year);
    }).catch(message => {
        console.log(message);
        if (Math.sign(currentDay.day) == 1) {
            console.log('small price to pay for salvation');
            ++currentDay.month;

            if (currentDay.month == 13) {
                currentDay.year = currentDay.year +1;
                fixMissingYear(currentDay.year);
                currentDay.month = 1;
                currentDay.day = 1;
                setDateDisplay(currentDay.month, currentDay.day, currentDay.year);
            }
            else {
                currentDay.day = 1;
                setDateDisplay(currentDay.month, 1, currentDay.year);
            }
            //find next year
        }
    });

//then edit date based on positive or negative numbers in a months days


});




function validDatePromise (date) {

    return new Promise((resolve, reject) => {

        if (date == undefined) {
            reject("incorrect date");
        }
        else {
            resolve(date);
        }

    })
}



