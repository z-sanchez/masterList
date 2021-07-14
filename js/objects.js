var yearArray = [], 
    yearsStored = 0;


function yearObject(yearName, monthArray) {

    this.yearName = yearName;
    this.monthArray = monthArray;

}

function dayObject(date) {

    this.date = date;
    this.numTask = 0;
    this.taskArray = [];
    this.onScreen = false;
}


function createYear(yearName) {

    var monthArray = [];

    var year = new yearObject(yearName, monthArray);

    fillMonthArray(year);

    yearArray[yearsStored] = year;

    ++yearsStored;

    sortYears();
}


function fillMonthArray(year) {

    let dayCountThirtyOne = [0, 2, 4, 6, 7, 9, 11],
        dayCountThirty = [3, 5, 8, 10],
        i = 0;

    for (let n = 0; n < 12; ++n) {

        year.monthArray[n] = [];
    }


    while (i < 12) {
        
        if (dayCountThirtyOne.includes(i)) {

            for (let j = 0; j < 31; ++j) {
                year.monthArray[i][j] = new dayObject(j + 1);
            }
        }
        else if (dayCountThirty.includes(i)) {

            for (let j = 0; j < 30; ++j) {
                year.monthArray[i][j] = new dayObject(j + 1);
            }
        }
        else {

            for (let j = 0; j < 29; ++j) {
                year.monthArray[i][j] = new dayObject(j + 1);
            }
        }

        ++i;
    }
}


createYear(2021);
createYear(2001);
createYear(2421);
createYear(1945);
createYear(2013);

// comments, deal with leap years