const dayDisplays = document.querySelectorAll('.dayDisplay');

const nextButton = document.getElementById('nextButton');
const backButton = document.getElementById('backButton');


setDateDisplay(7, 16, 2021);


function setDateDisplay(month, date, year) {

    let indexOfYear = searchYears(0, yearArray.length -1, year),
        foundYear = yearArray[indexOfYear];

    //check for cases where the next and previous days are different months and year

    let dayLocator = -2;

    for (let i = 0; i < 3; ++i) {
        dayDisplays[i].children[0].innerHTML = foundYear.monthArray[month -1][date + dayLocator].date;
        ++dayLocator;
    }
}



nextButton.addEventListener("click", () => {










});


