function searchYears(l, r, year) {

    if (yearsStored == 0)
        return -1;
    
    if (r >= l) {
        let mid = l + Math.floor((r-l) / 2);

        if (yearArray[mid].yearName == year) 
            return mid;

        if (yearArray[mid].yearName > year)
            return searchYears(l, mid - 1, year);

        else 
            return searchYears(mid + 1, r, year);
    }

    return -1;

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