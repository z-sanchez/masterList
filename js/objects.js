//yearArray: stores all the year objects that carry data
//yearsStored: number of years stores
var yearArray = [], 
    yearsStored = 0;

//yearObject: takes in a name (ex. 2021) and an array of months
function yearObject(yearName, monthArray) {

    this.yearName = yearName;
    this.monthArray = monthArray;
    this.memory = false;

}

//dayObjects: objects to be placed within month arrays
//carry a date, number of to do tasks, actual task items, and a bool
function dayObject(date, month, year) {

    this.date = month + "/" + date;
    this.month = month;
    this.year = year;
    this.numTask = 0;
    this.taskArray = [];
    this.onScreen = false;
}

//createYear: creates a year using a yearName 
function createYear(yearName) {

    var monthArray = []; //created array to be used as parameter

    var year = new yearObject(yearName, monthArray); //creates object

    fillMonthArray(year); //fills the months with days

    yearArray[yearsStored] = year; //inputs year into yearArray

    ++yearsStored; 

    sortYears(); 
}

//fillMonthArray: fills all the month arrays inside of years with correct
//amount of days 
function fillMonthArray(year) {

    let dayCountThirtyOne = [0, 2, 4, 6, 7, 9, 11], //used to compare with months ending in 31 days
        dayCountThirty = [3, 5, 8, 10], //monhts ending in 30 days
        i = 0;

    for (let n = 0; n < 12; ++n) {
        year.monthArray[n] = []; //fills month arrays with array for days to be stored
    }


    while (i < 12) {
        
        if (dayCountThirtyOne.includes(i)) { //if i equals a month ending in 31 days
            for (let j = 0; j < 31; ++j) {
                year.monthArray[i][j] = new dayObject(j + 1, i + 1, year.yearName); //fill array with 31 days
            }
        }
        else if (dayCountThirty.includes(i)) {

            for (let j = 0; j < 30; ++j) {
                year.monthArray[i][j] = new dayObject(j + 1, i + 1, year.yearName);
            }
        }
        else {

            for (let j = 0; j < 28; ++j) { //case for february
                year.monthArray[i][j] = new dayObject(j + 1, i + 1, year.yearName);
            }
        }

        ++i;
    }

    //handles leaps years
    if (year.yearName/4%1 == 0) { 
        year.monthArray[1][28] = new dayObject(29, 2, year.yearName);
    }

}


//fixMissingYear checks to see if a year exist within the yearsArray, if it doesn't the year is created
function fixMissingYear (year) {

    if (searchYears(0, yearsStored -1, year) == -1)
        createYear(year);
    else 
        return;

}
