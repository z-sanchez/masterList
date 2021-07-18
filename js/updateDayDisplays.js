const dayDisplays = document.querySelectorAll('.dayDisplay');

const nextButton = document.getElementById('nextButton');
const backButton = document.getElementById('backButton');


setDateDisplay(1, 17, 2021);


function setDateDisplay(month, date, year) {

    if (searchYears(year) == -1) 
        createYear(year);

    let indexOfYear = searchYears(0, yearArray.length -1, year),
        foundYear = yearArray[indexOfYear];

    //check for cases where the next and previous days are different months and year
    //edit css so longer dates don't stretch display

    let dayLocator = -2;

    for (let i = 0; i < 3; ++i) {
        dayDisplays[i].children[0].innerHTML = foundYear.monthArray[month -1][date + dayLocator].date;
        ++dayLocator;
    }
}



nextButton.addEventListener("click", () => {










});


