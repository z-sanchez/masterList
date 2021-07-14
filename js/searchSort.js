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