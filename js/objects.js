var yearArray = [], 
    yearsStored = 0;


function yearObject(yearName, monthArray) {

    this.yearName = yearName;
    this.monthArray = monthArray;

}


function createYear(yearName) {

    var monthArray = [];

    const year = new yearObject(yearName, monthArray);

    yearArray[yearsStored] = year;

    ++yearsStored;

    sortYears();
}



function searchYears() {





}


function sortYears() {

    var i, j, min;

    for (i = 0; i < yearsStored -1; i++) {
        min = i;
        for (j = i + 1; j < yearsStored; j++) {

            if (yearArray[j].yearName < yearArray[min].yearName) {
                min = j;
            }

        } 

        let temp = yearArray[min];
        yearArray[min] = yearArray[i];
        yearArray[i] = temp;
    }
}

createYear(2021);
createYear(2001);
createYear(2421);
createYear(1945);
createYear(2013);

